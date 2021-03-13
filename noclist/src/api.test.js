import { describe, expect, test } from '@jest/globals'
import { fetchAuthToken } from './api'
import { setupAxiosMock, MOCK_TOKEN } from './testConfig'

setupAxiosMock()

describe('api', () => {
  test('fetchAuthToken()', async () => {
    const { headers } = await fetchAuthToken()

    expect(headers['badsec-authentication-token']).toEqual(MOCK_TOKEN)
  })
})
