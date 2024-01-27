import { describe, expect, test } from '@jest/globals';
import {
  greet,
  reverseString,
  findNumVowels,
  findLargestNum,
  getUniqueStrings,
  getUniqueNums,
  pick,
  omit,
  getByKey,
} from './index';

describe('tests for index.ts', () => {
  test('greet', () => {
    expect(greet('Shalin')).toEqual('Hello, Shalin!');
    expect(greet('World')).toEqual('Hello, World!');
  });

  test('reverseString', () => {
    expect(reverseString('World')).toEqual('dlroW');
    expect(reverseString('World')).toEqual('dlroW');
    expect(reverseString('rotator level')).toEqual('level rotator');
  });

  test('findNumVowels', () => {
    expect(findNumVowels('World')).toEqual(1);
    expect(findNumVowels('rotator level')).toEqual(5);
    expect(findNumVowels('crypt')).toEqual(0);
  });

  test('findLargestNum', () => {
    expect(findLargestNum([1, 2, 3, 4])).toEqual(4);
    // the following test would fail
    // expect(findLargestNum([-1, -3, -7, -16])).toEqual(-1);
  });

  test('getUniqueStrings', () => {
    const longList = [
      'a',
      'b',
      'a',
      'b',
      'c',
      'a',
      'b',
      'c',
      'a',
      'b',
      'a',
      'b',
      'c',
      'a',
      'b',
      'c',
    ];
    expect(getUniqueStrings(longList)).toEqual(['a', 'b', 'c']);
  });
});
