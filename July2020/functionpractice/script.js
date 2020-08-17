"use strict";

// practice 1
function add(n1, n2) {
  return n1 + n2;
}
console.log(add(2, 2));

// practice 2
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};
console.log(randomDamage());

// practice 3

function characterCount(word) {
  return word.length;
}

console.log(characterCount("word"));

// practice 4

// const canVote = function (age) {
//   if (age < 18) {
//     return false;
//   } else {
//     return true;
//   }
// };
// console.log(canVote(18));

const canVote = function (age) {
  return age >= 18 ? true : false;
};
console.log(canVote(20));

// practice 5
// const vowelCount = (word) =>{
//     let vowels=["a","e","i","o","u"];
//     let counter=0;
//     for (let i=0; i<vowels.length; i++{
//         if(word[i]===vowels[i]{
//             counter++;
//         }
//     }
// };

// practice 5

// const vowelCount = (word) =>{
//     for (let i=0; i<word.length; i++){
//         if(word[i]==='a' || word[i]==='e' || word[i]=== 'i'|| word[i]=== 'o'|| word[i]=== 'u')
//             counter++;
//         }
//     }
//     return counter;
// };

// console.log(vowelCount("hello"));

// practice 6

const vowelCountV2 = (firstWord, secondWord) => {
  let firstWordCounter = 0;
  let secondWordCounter = 0;
  for (let i = 0; i < firstWord.length; i++) {
    if (
      firstWord[i] === "a" ||
      firstWord[i] === "e" ||
      firstWord[i] === "i" ||
      firstWord[i] === "o" ||
      firstWord[i] === "u"
    ) {
      firstWordCounter++;
    }
    for (let j = 0; j < secondWord.length; j++) {
      if (
        secondWord[j] === "a" ||
        secondWord[j] === "e" ||
        secondWord[j] === "i" ||
        secondWord[j] === "o" ||
        secondWord[j] === "u"
      ) {
        secondWordCounter++;
      }
    }
  }
  if (firstWordCounter > secondWordCounter) {
    return `${firstWord}`;
  } else if (firstWordCounter < secondWordCounter) {
    return `${secondWord}`;
  } else if (firstWordCounter === secondWordCounter) {
    return `same`;
  }
};
console.log(vowelCountV2("Day", "Day"));

const vowelCount = (word) => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
};
console.log(vowelCount("Tuesday"));

const vowelCount3 = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        count++;
      }
    }
  }
  return count;
};
console.log(vowelCount3("day"));

const vowelCountV3 = (firstWord, secondWord) => {
  if (vowelCount(firstWord) > vowelCount(secondWord)) {
    return firstWord;
  } else if (vowelCount(firstWord) < vowelCount(secondWord)) {
    return secondWord;
  } else {
    return "same";
  }
};

console.log(vowelCountV3("day", "day"));

// practice 7

const toCelcius = (fahrenheit) => {
  return (fahrenheit - 32) * (5 / 9);
};
console.log(toCelcius(50));

// practice 8

const toFahrenheit = (celcius) => {
  return celcius * (9 / 5) + 32;
};
console.log(toFahrenheit(23));

// practice 9

const tempConverter = (temp, unitToConvertTo) => {
  if (unitToConvertTo === "f") {
    return toFahrenheit(temp);
  } else if (unitToConvertTo === "c") {
    return toCelcius(temp);
  } else {
    return "Enter a correct value.";
  }
};
console.log(tempConverter(72, "c"));

// practice 10

const predictTheFuture = (question) => {
  let choices = ["Yes", "No", "Maybe", "Ask again later"];
  let index = Math.floor(Math.random() * 4);
  console.log(`index ${index}`);
  return `Question ${question} Answer ${choices[index]}`;
};

console.log(predictTheFuture("Are you happy?"));
