/* TODO: 
  1. add resilient network call wrapper
*/
import { fetchAuthToken, fetchUsers } from './src/api.js'
import { formatUserList } from './src/utils'

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

// eslint-disable-next-line
const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
