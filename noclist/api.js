import axios from 'axios'
import {
  BASE_URL,
  AUTH_URL,
  USERS_URL,
} from './config.js'
import { generateAuthHash } from './utils.js'

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
