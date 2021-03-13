/* TODO: 
  1. add resilient network call wrapper
  2. testing
*/
import { fetchAuthToken, fetchUsers } from './api.js'


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
 * Retrieve the list of users from server
 * @param {string} token authorizing API access from /auth
 * @returns {string} newline delimited user list
 */
 export const getUsers = async (token) => {
  try {
    const { data } = await fetchUsers(token)

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

const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
