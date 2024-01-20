function formatLog(message: string): void {
  console.log(message);
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
  return '';
}

// should reverse the string
// for example: "hello" -> "olleh"
function reverseString(text: string): string {
  return '';
}

// find number of vowels in a string
// for example: "hello" -> 2
function findNumVowels(text: string): number {
  return 0;
}

// should return the largest number
// for example: [1, 2, 3] -> 3
function findLargestNum(nums: number[]): number {
  return 0;
}

// define main function
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
}

// call main function
main();
