import { styleStr2Array, classStr2Array, styleArray2Str, classArray2Str, getClass } from '../src/util/StringUtil'

describe('Test StringUtil', () => {
  describe('styleStr2Array', () => {
    test('undefined ', () => {
      const input = undefined
      expect(styleStr2Array(input)).toEqual([])
    })
    test('null ', () => {
      const input = null
      expect(styleStr2Array(input)).toEqual([])
    })
    test('an empty string ', () => {
      const input = ''
      expect(styleStr2Array(input)).toEqual([])
    })
    test('a string with only space', () => {
      const input = ' '
      expect(styleStr2Array(input)).toEqual([])
    })

    test('a:va', () => {
      const input = 'a:va'
      expect(styleStr2Array(input)).toEqual(['a:va'])
    })

    test('a:va;b:vb', () => {
      const input = 'a:va;b:vb'
      expect(styleStr2Array(input)).toEqual(['a:va', 'b:vb'])
    })

    test('a:va;b:vb;', () => {
      const input = 'a:va;b:vb;'
      expect(styleStr2Array(input)).toEqual(['a:va', 'b:vb'])
    })

    test('a: va ;b:vb;', () => {
      const input = 'a: va; b:vb;'
      expect(styleStr2Array(input)).toEqual(['a: va', 'b:vb'])
    })

    test(' a: va ; b:vb ; ', () => {
      const input = ' a: va ; b:vb ; '
      expect(styleStr2Array(input)).toEqual(['a: va', 'b:vb'])
    })

    test(' a: va ;; b:vb ; ', () => {
      const input = ' a: va ; b:vb ; '
      expect(styleStr2Array(input)).toEqual(['a: va', 'b:vb'])
    })

    test('a:va;b:vb;a:va', () => {
      const input = 'a:va;b:vb;a:va'
      expect(styleStr2Array(input)).toEqual(['a:va', 'b:vb'])
    })
  })

  describe('classStr2Array', () => {
    test('undefined ', () => {
      const input = undefined
      expect(classStr2Array(input)).toEqual([])
    })
    test('null ', () => {
      const input = null
      expect(classStr2Array(input)).toEqual([])
    })
    test('an empty string ', () => {
      const input = ''
      expect(classStr2Array(input)).toEqual([])
    })
    test('a string with only space', () => {
      const input = ' '
      expect(classStr2Array(input)).toEqual([])
    })

    test('a', () => {
      const input = 'a'
      expect(classStr2Array(input)).toEqual(['a'])
    })

    test('a b', () => {
      const input = 'a b'
      expect(classStr2Array(input)).toEqual(['a', 'b'])
    })

    test('a  b', () => {
      const input = 'a  b'
      expect(classStr2Array(input)).toEqual(['a', 'b'])
    })

    test(' a b ', () => {
      const input = ' a b '
      expect(classStr2Array(input)).toEqual(['a', 'b'])
    })

    test('   a   b   ', () => {
      const input = '   a   b   '
      expect(classStr2Array(input)).toEqual(['a', 'b'])
    })

    test('a b a', () => {
      const input = 'a b a'
      expect(classStr2Array(input)).toEqual(['a', 'b'])
    })
  })

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

  describe('classArray2Str', () => {
    test('null', () => {
      const input = null
      expect(classArray2Str(input)).toEqual(null)
    })
    test('undefined', () => {
      const input = undefined
      expect(classArray2Str(input)).toEqual(null)
    })

    test('empty array', () => {
      const input = []
      expect(classArray2Str(input)).toEqual(null)
    })

    test('one item', () => {
      const input = ['a']
      expect(classArray2Str(input)).toEqual('a')
    })

    test('one item only empty string', () => {
      const input = ['']
      expect(classArray2Str(input)).toEqual(null)
    })
    test('one item only space', () => {
      const input = [' ']
      expect(classArray2Str(input)).toEqual(null)
    })
    test('one item with space at front and end', () => {
      const input = [' a ']
      expect(classArray2Str(input)).toEqual('a')
    })
    test('two items', () => {
      const input = ['a', 'b']
      expect(classArray2Str(input)).toEqual('a b')
    })
    test('two items with space at front or end', () => {
      const input = [' a ', ' b ']
      expect(classArray2Str(input)).toEqual('a b')
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
