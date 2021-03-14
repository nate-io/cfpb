import { getAuthToken, getUsers } from './src/api.js'

/*
  eslint has not updated to accomodate top-level await 
    nor will it accept eslint-disable
*/
const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
