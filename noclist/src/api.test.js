import { describe, expect, test } from '@jest/globals'
import { fetchAuthToken, fetchUsers } from './api'
import {
  setupAxiosMock,
  MOCK_TOKEN,
  MOCK_TOKEN_HASH,
  MOCK_USER_LIST
} from './testConfig'
import { AUTH_URL, USERS_URL } from './config'

setupAxiosMock()

describe('api', () => {
  test('fetchAuthToken() invokes the /auth endpoint', async () => {
    const response = await fetchAuthToken()
    const { config, headers } = response

    // ensure network call correctness
    expect(config?.url).toEqual(AUTH_URL)
    expect(headers['badsec-authentication-token']).toEqual(MOCK_TOKEN)
  })

  test('fetchUsers() invokes the /users endpoint with auth token set', async () => {
    const { config, data } = await fetchUsers(MOCK_TOKEN)

    // ensure network call correctness
    expect(config?.url).toEqual(USERS_URL)
    expect(config).toHaveProperty(['headers', 'X-Request-Checksum'])
    expect(config.headers['X-Request-Checksum']).toEqual(MOCK_TOKEN_HASH)
    // inspect data correctness
    expect(data?.users).toEqual(MOCK_USER_LIST)
  })
})
