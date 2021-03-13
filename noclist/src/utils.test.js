import { describe, expect, test } from '@jest/globals'
import { USERS_URL } from './config'
import { MOCK_TOKEN, MOCK_TOKEN_HASH } from './testConfig'
import { formatUserList, generateAuthHash } from './utils'

describe('utils', () => {
  test('formatUserList parses a delimited string into an array', () => {
    const arrayLength = 5
    const newlineDelimitedString = new Array(arrayLength).fill({}).map(() => 'test').join('\n')
    const result = JSON.parse(formatUserList(newlineDelimitedString))

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toEqual(arrayLength)
  })

  test('generateAuthHash() generates correct hash', () => {
    const result = generateAuthHash(MOCK_TOKEN, USERS_URL)

    expect(result).toEqual(MOCK_TOKEN_HASH)
  })
})
