import { describe, expect, test } from '@jest/globals'
import { USERS_URL } from './config'
import { generateAuthHash } from './utils'

describe('utils', () => {
  test('generateAuthHash()', () => {
    const mockToken = 'this-is-a-test-string'
    const expected = 'b83f7195011e08c579929a0e2ebf1cc752b0834f585e27be82b3bfc64526bd78'
    const result = generateAuthHash(mockToken, USERS_URL)

    expect(result).toEqual(expected)
  })
})
