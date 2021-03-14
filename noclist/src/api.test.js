import { describe, expect, jest, test } from '@jest/globals'
import {
  fetchAuthToken,
  fetchUsers,
  getAuthToken,
  getUsers,
  resilientFetch,
  validateFetch
} from './api'
import {
  setupGoodAxiosServer,
  setupJankyAxiosServer,
  MOCK_TOKEN,
  MOCK_TOKEN_HASH,
  MOCK_USER_LIST
} from './testConfig'
import { BASE_URL, AUTH_URL, USERS_URL } from './config'

setupGoodAxiosServer()

describe('api', () => {
  test('fetchAuthToken() invokes the /auth endpoint', async () => {
    const response = await fetchAuthToken()
    const { config, headers } = response

    // ensure network call correctness
    expect(config?.url).toEqual(AUTH_URL)
    // inspect data correctness
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

  test('getAuthToken() should return the auth token string', async () => {
    const response = await getAuthToken()

    expect(response).toEqual(MOCK_TOKEN)
  })

  test('getUsers() should return the users list', async () => {
    const response = await getUsers(MOCK_TOKEN)
    const expected = JSON.stringify(MOCK_USER_LIST.split('\n'))

    expect(response).toEqual(expected)
  })

  test('validateFetch() should return HTTP response on 200', () => {
    const request = {
      baseURL: BASE_URL,
      url: AUTH_URL,
      method: 'head'
    }
    const response = { status: 200 }
    const attempts = 0
    const result = validateFetch(request, response, attempts)

    expect(result).toEqual(response)
  })

  test('validateFetch() should exit process when threshold crossed', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})
    const request = {
      baseURL: BASE_URL,
      url: AUTH_URL,
      method: 'head'
    }
    const response = { status: 500 }
    const attempts = 2
    validateFetch(request, response, attempts)

    expect(mockExit).toHaveBeenCalledWith(1)
  })

  test('validateFetch() should retry as needed by returning Promise', () => {
    const request = {
      baseURL: BASE_URL,
      url: AUTH_URL,
      method: 'head'
    }
    const response = { status: 500 }
    const attempts = 0
    const result = validateFetch(request, response, attempts)

    expect(typeof result).toBe('object')
    expect(result?.then).toBeTruthy()
    expect(typeof result?.then).toBe('function')
  })

  test('resilientFetch() should handle network & timeout errors', async () => {
    const request = {
      baseURL: BASE_URL,
      url: AUTH_URL,
      method: 'head'
    }
    // first setup server to make it faulty
    setupJankyAxiosServer()

    const result = await resilientFetch(request)
    expect(result.status).toEqual(200)
  })
})
