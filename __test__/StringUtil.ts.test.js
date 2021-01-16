import { styleArray2Str, getClass } from '../src/util/StringUtil'

describe('Test StringUtil', () => {
  describe('styleArray2Str', () => {
    test('null', () => {
      const input = null
      expect(styleArray2Str(input)).toEqual(null)
    })

    test('undefined', () => {
      const input = undefined
      expect(styleArray2Str(input)).toEqual(null)
    })

    test('empty array', () => {
      const input = []
      expect(styleArray2Str(input)).toEqual(null)
    })

    test('one item', () => {
      const input = ['a:a']
      expect(styleArray2Str(input)).toEqual('a:a;')
    })

    test('one item only empty string', () => {
      const input = ['']
      expect(styleArray2Str(input)).toEqual(null)
    })
    test('one item only space', () => {
      const input = [' ']
      expect(styleArray2Str(input)).toEqual(null)
    })
    test('one item with space at front and end', () => {
      const input = [' a:va ']
      expect(styleArray2Str(input)).toEqual('a:va;')
    })
    test('two items', () => {
      const input = ['a:va', 'b:vb']
      expect(styleArray2Str(input)).toEqual('a:va;b:vb;')
    })
  })
})

describe('Test getClass', () => {
  test('null', () => {
    const input = null
    expect(getClass(input)).toEqual(null)
  })
  test('empty array', () => {
    const input = []
    expect(getClass(input)).toEqual(null)
  })
  test('string item', () => {
    const input = ['aaa', 'bbb']
    expect(getClass(input)).toEqual('aaa bbb')
  })
  test('string item no empty', () => {
    const input = ['aaa', 'bbb']
    expect(getClass(input)).toEqual('aaa bbb')
  })
  test('string item with empty', () => {
    const input = ['aaa', '', 'bbb']
    expect(getClass(input)).toEqual('aaa bbb')
  })

  test('array with tuple string', () => {
    const input = ['aaa', 'bbb', ['ccc']]
    expect(getClass(input)).toEqual('aaa bbb ccc')
  })
  test('array with tuple string and boolean', () => {
    const input = ['aaa', 'bbb', ['ccc', false]]
    expect(getClass(input)).toEqual('aaa bbb')
  })

  test('array with tuple error 1st argument', () => {
    const input = ['aaa', 'bbb', [false, false]]
    try {
      getClass(input)
    } catch (error) {
      expect(error.message).toBe('Error type of 1st argument.')
    }
  })
})
