import crypto from 'crypto'
import axios from 'axios'

export const BASE_URL = 'http://0.0.0.0:8888'
export const AUTH_URL = '/auth'
export const USERS_URL = '/users'

/* TODO: 
  1. add resilient network call wrapper
  2. testing
*/

/**
 * Call auth endpoint & extract auth token
 * @returns {string} auth token
 */
export const getAuthToken = async () => {
  const tokenHeaderKey = 'badsec-authentication-token'

  try {
    const response = await fetchAuthToken()
    const { [tokenHeaderKey]: token } = response?.headers

    return token
  } catch (error) {
    console.log(error)
  }
}

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
export const fetchUsers = (hash) => {
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
 * Retrieve the list of users from server
 * @param {string} token authorizing API access from /auth
 * @returns {string} newline delimited user list
 */
 export const getUsers = async (token) => {
  const hash = generateAuthHash(token, USERS_URL)

  try {
    const { data } = await fetchUsers(hash)

    return formatUserList(data)
  } catch (error) {
    console.log(error)
  }
}

/**
 * Convert newline delimited string to JSON array
 * @param {string} users 
 * @returns {array} stringified JSON
 */
 export const formatUserList = (users) => {
  return JSON.stringify(users.split('\n'))
}

/**
 * Concat params and hash value with sha256
 * @param {string} authToken for API
 * @param {string} endpoint to fetch
 * @returns {string} hashed string 
 */
export const generateAuthHash = (authToken, endpoint) => {
  return crypto
    .createHash('sha256')
    .update(`${authToken}${endpoint}`)
    .digest('hex')
}

const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
