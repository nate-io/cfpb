import crypto from 'crypto'

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
