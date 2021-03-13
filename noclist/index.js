import crypto from 'crypto'
import axios from 'axios'

const BASE_URL = 'http://0.0.0.0:8888'
const AUTH_URL = '/auth'
const USERS_URL = '/users'

/**
 * Fetch API auth token
 * @returns {string} auth token
 */
const getAuthToken = async () => {
  const tokenHeaderKey = 'badsec-authentication-token'

  try {
    const response = await axios({
      baseURL: BASE_URL,
      url: AUTH_URL,
      method: 'head'
    })
    const { [tokenHeaderKey]: token } = response?.headers

    return token
  } catch (error) {
    console.log(error)
  }
}

/**
 * Concat params and hash with sha256
 * @param {string} authToken for API
 * @param {string} endpoint to fetch
 * @returns {string} hashed string 
 */
const generateAuthHash = (authToken, endpoint) => {
  return crypto
    .createHash('sha256')
    .update(`${authToken}${endpoint}`)
    .digest('hex')
}

/**
 * Retrieve the list of users from server
 * @param {string} token authorizing API access from /auth
 * @returns {string} newline delimited user list
 */
const getUsers = async (token) => {
  const hash = generateAuthHash(token, USERS_URL)

  console.log({ token, hash })

  try {
    const { data } = await axios({
      baseURL: BASE_URL,
      url: USERS_URL,
      method: 'get',
      headers: {
        'X-Request-Checksum': hash
      }
    })

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
const formatUserList = (users) => {
  return JSON.stringify(users.split('\n'))
}

const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
