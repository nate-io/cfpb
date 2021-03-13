import { describe, expect, test } from '@jest/globals'
import {
  fetchAuthToken,
  fetchUsers,
  getAuthToken,
  getUsers
} from './api'
import {
  setupAxiosMock,
  MOCK_TOKEN,
  MOCK_TOKEN_HASH,
  MOCK_USER_LIST
} from './testConfig'
import { AUTH_URL, USERS_URL } from './config'

setupAxiosMock()

describe('api - network calls', () => {
  test('fetchAuthToken() invokes the /auth endpoint', async () => {
    const response = await fetchAuthToken()
    const { config, headers } = response

    // ensure network call correctness
    expect(config?.url).toEqual(AUTH_URL)
    expect(headers['badsec-authentication-token']).toEqual(MOCK_TOKEN)
  })

  test('fetchUsers() invokes the /users endpoint with auth token set', async () => {
    const response = await fetchUsers(MOCK_TOKEN)
    const { config, data } = response

    // ensure network call correctness
    expect(config?.url).toEqual(USERS_URL)
    expect(config).toHaveProperty(['headers', 'X-Request-Checksum'])
    expect(config.headers['X-Request-Checksum']).toEqual(MOCK_TOKEN_HASH)
    // inspect data correctness
    expect(data).toEqual(MOCK_USER_LIST)
  })
})

describe('api - control functions', () => {
  test('getAuthToken() should return the auth token string', async () => {
    const response = await getAuthToken()

    expect(response).toEqual(MOCK_TOKEN)
  })

  test('getUsers() should return the users list', async () => {
    const response = await getUsers(MOCK_TOKEN)
    const expected = JSON.stringify(MOCK_USER_LIST.split('\n'))

    expect(response).toEqual(expected)
  })
})
