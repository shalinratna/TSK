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
  return 'Hello, ' + name;
}

// should reverse the string
// for example: "hello" -> "olleh"
function reverseString(text: string): string {
  let word : string[] = text.split("");
  let finalWord: string = '';

  for(let i = word.length - 1; i >= 0; i--){
    finalWord += word[i];
  }
  return finalWord;
}

// find number of vowels in a string
// for example: "hello" -> 2
function findNumVowels(text: string): number {

  let word : string[] = text.split("");
  let numVowes : number = 0;

  for(let i = 0; i < word.length; i++){
    if(vowelExists(word[i])){
      numVowes ++;
    }
  }

  return numVowes;
}

//Helper function for findNumValues()
function vowelExists(letter: string) : boolean {
  
  // Just using lowercase for now can obviously be changed later, but this does not matter anyways
  if(letter.toLowerCase() == "a" || letter.toLowerCase() == "e" || letter.toLowerCase() == "i" || letter.toLowerCase() == "o" || letter.toLowerCase() == "u"){
      return true;
  }

  return false;

}

// should return the largest number
// for example: [1, 2, 3] -> 3
function findLargestNum(nums: number[]): number {
  let highestNum : number = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] >= highestNum){
      highestNum = nums[i];
    }
  }

  return highestNum;
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

console.log("Greeting: " + greet("Shalin"));
console.log("Reverse String: " + reverseString("hello"));
console.log("Number of vowels: " + findNumVowels("hello"));
console.log("Highest number: " + findLargestNum([1, 2, 3]));
