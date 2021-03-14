import process from 'process'
import axios from 'axios'
import {
  BASE_URL,
  AUTH_URL,
  USERS_URL,
  NETWORK_RETRY_MAX
} from './config.js'
import { formatUserList, generateAuthHash } from './utils.js'

/**
 * Execute provided request up to 3 times before exiting process with status code 1
 * @param {object} request config to execute
 * @param {number} attempts made thus far
 * @param {function} [validator] retry logic
 */
export const resilientFetch = async (request, attempts = 0, validator = validateFetch) => {
  let response = null

  try {
    response = await axios(request)
  } catch (error) {
    // catch & send to log handler/service
  } finally {
    return validator(request, response, attempts)
  }
}

/**
 * Validator function to inspect HTTP response to determine retry status
 * @param {object} request to execute
 * @param {*} response from previous request execution
 * @param {number} attempts previously made
 * @returns either a correct HTTP response, process exit, or caller recursion
 */
export const validateFetch = (request, response, attempts) => {
  // success
  if (response?.status === 200) return response

  // check retry threshold & exit process when reached
  if (attempts >= NETWORK_RETRY_MAX) process.exit(1)

  // otherwise retry
  return resilientFetch(request, ++attempts)
}

/**
 * Network call to /auth endpoint
 * @returns {object} axios Promise
 */
export const fetchAuthToken = () => {
  const requestConfig = {
    baseURL: BASE_URL,
    url: AUTH_URL,
    method: 'head'
  }

  return resilientFetch(requestConfig)
}

/**
 * Network call to /users endpoint
 * @returns {object} axios Promise
 */
export const fetchUsers = (token) => {
  const hash = generateAuthHash(token, USERS_URL)
  const requestConfig = {
    baseURL: BASE_URL,
    url: USERS_URL,
    method: 'get',
    headers: {
      'X-Request-Checksum': hash
    }
  }

  return resilientFetch(requestConfig)
}

/**
 * Call auth endpoint & extract auth token
 * @returns {string} auth token
 */
export const getAuthToken = async () => {
  const tokenHeaderKey = 'badsec-authentication-token'
  const response = await fetchAuthToken()
  const { [tokenHeaderKey]: token } = response?.headers

  return token
}

/**
 * Retrieve the list of users from server
 * @param {string} token authorizing API access from /auth
 * @returns {string} newline delimited user list
 */
export const getUsers = async (token) => {
  const { data } = await fetchUsers(token)

  return formatUserList(data)
}
