import axios from 'axios'
import {
  BASE_URL,
  AUTH_URL,
  USERS_URL
} from './config.js'
import { formatUserList, generateAuthHash } from './utils.js'

/**
 * Network call to /auth endpoint
 * @returns {object} axios Promise
 */
export const fetchAuthToken = () => {
  return axios({
    baseURL: BASE_URL,
    url: AUTH_URL,
    method: 'head'
  })
}

/**
 * Network call to /users endpoint
 * @returns {object} axios Promise
 */
export const fetchUsers = (token) => {
  const hash = generateAuthHash(token, USERS_URL)

  return axios({
    baseURL: BASE_URL,
    url: USERS_URL,
    method: 'get',
    headers: {
      'X-Request-Checksum': hash
    }
  })
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
