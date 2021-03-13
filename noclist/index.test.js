function sum (a, b) {
  return a + b
}

describe('sum()', () => {
  test('sum returns proper values', () => {
    const a = 1
    const b = 2
    const expected = a + b

    expect(sum(a, b)).toEqual(expected)
  })
})