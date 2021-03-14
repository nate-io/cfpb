import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const MOCK_TOKEN = 'this-is-a-test-string'
export const MOCK_TOKEN_HASH = 'b83f7195011e08c579929a0e2ebf1cc752b0834f585e27be82b3bfc64526bd78'
export const MOCK_USER_LIST = 'abc\ndef\nghi'

export const setupAxiosMock = () => {
  const mockAxios = new MockAdapter(axios)
  const endpoints = ['/auth', '/users']

  mockAxios
    .onHead(endpoints[0])
    .reply(200, {}, { 'badsec-authentication-token': MOCK_TOKEN })

  mockAxios
    .onGet(endpoints[1])
    .reply(200, MOCK_USER_LIST)

  /**
     * For each endpoint, for mock server to throw one
     * network error and one timeout error
     */
  const makeServerJanky = () => {
    endpoints.forEach(endpoint => {
      mockAxios
        .onHead(endpoint)
        .networkErrorOnce()

      mockAxios
        .onGet(endpoint)
        .timeoutOnce()
    })
  }

  return makeServerJanky
}
