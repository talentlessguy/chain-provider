import { BigNumber } from '@ethersproject/bignumber'
import assert from 'assert'

function _equals(path: string, actual: any, expected: any): void {
  if (expected === null) {
    assert.equal(actual, expected, `expected null: ${path}!null`)
  } else if (BigNumber.isBigNumber(expected)) {
    assert.ok(BigNumber.isBigNumber(actual), `expected BigNumber instance: ${path}!BigNumber`)
    assert.ok(expected.eq(actual), `BigNumber not equal: ${path}!a.eq(e)`)
  } else if (typeof expected === 'object') {
    assert.ok(typeof actual === 'object', `expected object: ${path}!object`)
    for (const key in expected) {
      _equals(`${path}@${key}/`, actual[key], expected[key])
    }
  } else if (Array.isArray(expected)) {
    assert.ok(Array.isArray(actual), `expected an array: ${path}!array`)
    assert.equal(expected.length, actual.length, `array length mismatch: ${path}a.length!=e.length`)
    expected.forEach((item, index) => {
      _equals(`${path}#${index}/`, actual[index], expected[index])
    })
  } else {
    assert.equal(actual, expected, `not equal: ${path}a!=b`)
  }
}

export function equals(actual: any, expected: any): boolean {
  _equals('/', actual, expected)
  return true
}
