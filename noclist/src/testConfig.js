import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const MOCK_TOKEN = 'this-is-a-test-string'
export const MOCK_TOKEN_HASH = 'b83f7195011e08c579929a0e2ebf1cc752b0834f585e27be82b3bfc64526bd78'
export const MOCK_USER_LIST = 'abc\ndef\nghi'

/**
 * Setup normal, well behaved, endpoints
 */
export const setupGoodAxiosServer = () => {
  const mockServer = new MockAdapter(axios)

  mockServer
    .onHead('/auth')
    .reply(200, {}, { 'badsec-authentication-token': MOCK_TOKEN })

  mockServer
    .onGet('/users')
    .reply(200, MOCK_USER_LIST)
}

/**
 * Setup endpoints which throw internal errors once before recovering
 */
export const setupJankyAxiosServer = () => {
  const mockServer = new MockAdapter(axios)

  mockServer
    .onHead('/auth')
    .replyOnce(500)
    .onHead('/auth')
    .reply(200, {}, { 'badsec-authentication-token': MOCK_TOKEN })

  mockServer
    .onGet('/users')
    .replyOnce(500)
    .onGet('/users')
    .reply(200, MOCK_USER_LIST)
}
