import { getAuthToken, getUsers } from './src/api.js'

/*
  eslint has not updated to accomodate 'top-level await' rule
  this file ignored via config
*/
const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
