export function formatLog(...messages: any[]): void {
  console.log(...messages);
  console.log('----------------------------------------');
}

// should return "Hello, <name>!"
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

// should reverse the string, for e.g.: "hello" -> "olleh"
export function reverseString(text: string): string {
  const word: string[] = text.split('');
  let finalWord: string = '';

  for (let i = word.length - 1; i >= 0; i--) {
    finalWord += word[i];
  }

  return finalWord;
}

function vowelExists(letter: string): boolean {
  const isVowel: boolean =
    letter.toLowerCase() === 'a' ||
    letter.toLowerCase() === 'e' ||
    letter.toLowerCase() === 'i' ||
    letter.toLowerCase() === 'o' ||
    letter.toLowerCase() === 'u';
  return isVowel;
}

// find number of vowels in a string, for e.g.: "hello" -> 2
export function findNumVowels(text: string): number {
  const word: string[] = text.split('');
  let numVowels: number = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowelExists(word[i])) {
      numVowels++;
    }
  }

  return numVowels;
}

// should return the largest number, for e.g.: [1, 2, 3] -> 3
export function findLargestNum(nums: number[]): number {
  // const largest = Math.max(...nums);
  // return largest;
  let highestNum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= highestNum) {
      highestNum = nums[i];
    }
  }

  return highestNum;
}

export type User = {
  id: string;
  name: string;
  status: 'active' | 'inactive';
};

/*
should return users names where their status is 'active'
for e.g.:
  - input: [
    { id: 'user-1', name: 'Andre', status: 'active' },
    { id: 'user-2', name: 'Bilal', status: 'inactive' },
    { id: 'user-3', name: 'Christy', status: 'inactive' },
    { id: 'user-4', name: 'Desiree', status: 'active' },
  ]
  - output: ['Andre', 'Desiree']
*/
export function getActiveUserNames(users: User[]): string[] {
  return [];
}

/*
should return a unique list of strings
for e.g.:
  - input: ['a', 'b', 'a', 'b', 'c']
  - output: ['a', 'b', 'c']
*/
export function getUniqueStrings(strings: string[]): string[] {
  const uniqueStrings: string[] = [];
  let counter = 0;
  // for (let i = 0; i < strings.length; i++) {
  //   counter += 1;

  //   if (!uniqueStrings.includes(strings[i])) {
  //     uniqueStrings.push(strings[i]);
  //     counter += uniqueStrings.length;
  //   }
  // }
  // console.log({ counter });
  // return uniqueStrings;

  const stringRef: Record<string, true> = {};

  for (let i = 0; i < strings.length; i++) {
    const value = strings[i];
    const exists = stringRef[value];
    if (!exists) {
      stringRef[value] = true;
      uniqueStrings.push(value);
    }
    counter += 1;
  }

  return uniqueStrings;
}

/*
should return a unique list of numbers
for e.g.:
  - input: [1, 2, 3, 4, 1, 3, 1, 2, 3, 4, 2]
  - output: [1, 2, 3, 4]
*/
export function getUniqueNums(nums: number[]): number[] {
  return [];
}

/*
takes in an object and an array of keys
should return a new object that only contains the keys/values for the keys that are passed in
if a key does not exist in the object, return it with a value of null
for e.g.:
  - input: obj: { a: 1, b: 2, c: 3 }, keys: ['a', 'c', 'd']
  - output: { a: 1, c: 3, d: null }
*/
export function pick(obj: object, keys: string[]): object {
  return {};
}

/*
takes in an object and an array of keys
should return a new object that only contains the keys/values for the keys that are NOT passed in
if a key does not exist in the object, return it with a value of null
for e.g.:
  - input: obj: { a: 1, b: 2, c: 3 }, keys: ['a', 'c', 'd']
  - output: { b: 2, d: null }
*/
export function omit(obj: object, keys: string[]): object {
  return {};
}

/*
takes in an arrays of similar objects and a key
returns an object where:
  - the keys are the values of the key passed in
  - the values are the objects
for e.g.:
  - input: 
    - array: [
        { id: 'userOne', name: 'joe', status: 'active' },
        { id: 'userTwo', name: 'jianna', status: 'inactive' },
      ]
    - key: 'id'
  - output: { 
      userOne: { id: 'userOne', name: 'joe', status: 'active' },
      userTwo: { id: 'userTwo', name: 'jianna', status: 'inactive' },
   }
*/
export function getByKey(list: User[], key: 'id'): Record<string, User> {
  return {};
}
