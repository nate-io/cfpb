import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const MOCK_TOKEN = 'this-is-a-test-string'
export const MOCK_TOKEN_HASH = 'b83f7195011e08c579929a0e2ebf1cc752b0834f585e27be82b3bfc64526bd78'
export const MOCK_USER_LIST = ['abc', 'def', 'ghi']

export const setupAxiosMock = () => {
  const mockAxios = new MockAdapter(axios)

  mockAxios
    .onHead('/auth')
    .reply(200, {}, { 'badsec-authentication-token': MOCK_TOKEN })

  mockAxios
    .onGet('/users')
    .reply(200, { users: MOCK_USER_LIST })

  return mockAxios
}
