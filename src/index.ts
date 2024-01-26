function formatLog(...messages: any[]): void {
  console.log(...messages);
  console.log('----------------------------------------');
}

function add(a: number, b: number): number {
  return a + b;
}

function sub(a: number, b: number): number {
  return a - b;
}

// should return "Hello, <name>!"
function greet(name: string): string {
  return 'Hello, ' + name;
}

// should reverse the string
// for example: "hello" -> "olleh"
function reverseString(text: string): string {
  let word: string[] = text.split('');
  let finalWord: string = '';

  for (let i = word.length - 1; i >= 0; i--) {
    finalWord += word[i];
  }
  return finalWord;
}

// find number of vowels in a string
// for example: "hello" -> 2
function findNumVowels(text: string): number {
  let word: string[] = text.split('');
  let numVowes: number = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowelExists(word[i])) {
      numVowes++;
    }
  }

  return numVowes;
}

//Helper function for findNumValues()
function vowelExists(letter: string): boolean {
  // Just using lowercase for now can obviously be changed later, but this does not matter anyways
  if (
    letter.toLowerCase() == 'a' ||
    letter.toLowerCase() == 'e' ||
    letter.toLowerCase() == 'i' ||
    letter.toLowerCase() == 'o' ||
    letter.toLowerCase() == 'u'
  ) {
    return true;
  }

  return false;
}

// should return the largest number
// for example: [1, 2, 3] -> 3
function findLargestNum(nums: number[]): number {
  let highestNum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= highestNum) {
      highestNum = nums[i];
    }
  }

  return highestNum;
}

type User = {
  name: string;
  status: 'active' | 'inactive';
};

/*
should return users names where their status is 'active'
for example:
input: [
  { name: 'Andre', status: 'active' },
  { name: 'Bilal', status: 'inactive' },
  { name: 'Christy', status: 'inactive' },
  { name: 'Desiree', status: 'active' },
]
output: ['Andre', 'Desiree']
*/
function getActiveUserNames(users: User[]): string[] {
  return [];
}

/*
should return a unique list of strings
for example:
input: ['a', 'b', 'a', 'b', 'c']
output: ['a', 'b', 'c']
*/
function getUniqueStrings(strings: string[]): string[] {
  return [];
}

/*
takes in an object and an array of keys
should return a new object that only contains the keys/values for the keys that are passed in
if a key does not exist in the object, return it with a value of null
for example:
input: obj: { a: 1, b: 2, c: 3 }, keys: ['a', 'c', 'd']
output: { a: 1, c: 3, d: null }
*/
function pick(obj: object, keys: string[]): object {
  return {};
}

/*
takes in an object and an array of keys
should return a new object that only contains the keys/values for the keys that are NOT passed in
if a key does not exist in the object, return it with a value of null
for example:
input: obj: { a: 1, b: 2, c: 3 }, keys: ['a', 'c', 'd']
output: { b: 2, d: null }
*/
function omit(obj: object, keys: string[]): object {
  return {};
}

function main() {
  formatLog(`Let's get started!!!`);

  const addA = 2;
  const addB = 2;
  const addResult = add(addA, addB);
  formatLog(`${addA} + ${addB} = ${addResult}`);

  const subA = 5;
  const subB = 3;
  const subResult = sub(addA, addB);
  formatLog(`${subA} - ${subB} = ${subResult}`);

  formatLog(`Greeting: ${greet('Shalin')}`);
  formatLog(`Reverse String: ${reverseString('hello')}`);
  formatLog(`Number of vowels: ${findNumVowels('hello')}`);
  formatLog(`Highest number: ${findLargestNum([1, 2, 3])}`);

  const users: User[] = [
    { name: 'Andre', status: 'active' },
    { name: 'Bilal', status: 'inactive' },
    { name: 'Christy', status: 'inactive' },
    { name: 'Desiree', status: 'active' },
  ];
  formatLog('Active user names:', getActiveUserNames(users));

  formatLog('Unique Strings:', getUniqueStrings(['a', 'b', 'a', 'b', 'c']));

  formatLog('Pick:', pick({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd']));

  formatLog('Omit:', omit({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd']));
}

main();
