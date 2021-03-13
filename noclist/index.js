import { getAuthToken, getUsers } from './src/api.js'

// eslint-disable-next-line
const token = await getAuthToken()
const users = await getUsers(token)

console.log(users)
