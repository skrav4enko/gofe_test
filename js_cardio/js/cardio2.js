// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string

function longestWord(sen) {
  // const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
  // const sorted = wordArr.sort((a,b) => b.length - a.length);
  // const longestWordArr = sorted.filter(word => word.length === sorted[0].length)
  // return longestWordArr.length === 1 ? longestWordArr[0] : longestWordArr;
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
  // // 1 solution
  // const chunkedArr = [];
  // let i = 0
  // while (i < arr.length) {
  //   chunkedArr.push(arr.slice(i, i + len));
  //   i = i + len;
  // }
  // console.log(arr);
  // return chunkedArr;
  // // 2 solution
  // const chunkedArr = [];
  // arr.forEach(val => {
  //   const last = chunkedArr[chunkedArr.length - 1];
  //   if (!last || last.length === len) {
  //     chunkedArr.push([val]);
  //   } else {
  //     last.push(val);
  //   }
  // });
  // return chunkedArr;
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  // // 1 solution
  // return arrays.reduce((acc, curr) => acc.concat(curr))
  // // 2 solution
  // return arrays.reduce((acc, curr) => [...acc, ...curr], []);
  // // 3 solution
  // return [].concat.apply([], arrays);
  // // 4 solution
  // return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  // return formatStr(str1) === formatStr(str2);
}
// function formatStr(str) {
//   return str
//     .replace(/[^\w]/g, '')
//     .toLowerCase()
//     .split('')
//     .sort()
//     .join('');
// }

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  // // 1 solution
  // let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
  //   if (char === 'z' || char === 'Z') {
  //     return 'a';
  //   } else {
  //     return String.fromCharCode(char.charCodeAt() + 1);
  //   }
  // });
  // newStr = newStr.replace(/[aeiou]/gi, vowel => vowel.toUpperCase());
  // return newStr;

  // // 1 solution with improvements
  // return str
  //   .toLowerCase()
  //   .replace(/[a-z]/g, char => (char == 'z' ? 'a' : String.fromCharCode(char.charCodeAt() + 1)))
  //   .replace(/[aeiou]/g, vowel => vowel.toUpperCase());
}

// Call Function
const output = letterChanges('Helloz there');

console.log(output);
