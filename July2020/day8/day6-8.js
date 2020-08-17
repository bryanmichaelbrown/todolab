const firstName = "Rachel";
const lastName = "Ohler";

let favoriteAnimal = "Maned Wolf";

// let nickName = null;>

let isHungry = true;

let excitmentLevel = 6;

let favoriteArtists = ["daft Punk", "justice", "gesaffelstei"];

console.log(firstName);
console.log(lastName);
console.log(`${firstName} ${lastName}`);

let Name = `${firstName} ${lastName}`;

let nickName = firstName + " the hungry " + favoriteAnimal;
console.log(nickName);

if (isHungry === true) {
  nickname = `${firstName} the hungry ${favoriteAnimal}`;
} else {
  nickname = "${firstName} the satisfied ${favoriteAnimal}";
}

if (isHungry) {
  console.log(`My name is ${Name} and I am hungry`);
} else {
  console.log(`My name is ${Name} and I am not hungry`);
}

if (excitmentLevel < 4) {
  console.log(`I'm not excited`);
} else if (excitmentLevel >= 4 && excitmentLevel <= 7) {
  console.log(`I'm moderately excited`);
} else if (excitmentLevel > 7) {
  console.log(`I'm excited`);
}

let bryan = {
  firstName: "Bryan",
  lastName: "Brown",
  favoriteAnimal: "Penguin",
  nickName: null,
  excitmentLevel: 10,
  isHungry: false,
  favoriteMusic: ["B", "C"],
};

console.log(bryan);

console.log(bryan.excitmentLevel);

bryan.excitmentLevel = 9;

console.log(bryan.excitmentLevel);

bryan.isHungry = true;

console.log(bryan.isHungry);
let july2020 = [
  {
    firstName: "Kanchan",
    lastName: "Kandage",
    favoriteAnimal: "Horse",
    nickname: null,
    excitementLevel: 5,
    isHungry: false,
    favoriteMusic: ["Beatles", "Billy Joel"],
  },
  {
    firstName: "Cat",
    lastName: "Tremblay",
    favoriteAnimal: "pangolin",
    nickname: null,
    excitementLevel: 10,
    isHungry: false,
    favoriteMusic: ["Sufjan", "Gregory Alan Isakov"],
  },
  {
    firstName: "Chris",
    lastName: "Liu",
    favoriteAnimal: "Cat",
    nickName: null,
    isHungry: false,
    excitementLevel: 10,
    favoriteMusic: ["Van Gogh", "T-Pain"],
  },
];
// log each object to the console
for (let student of july2020) {
  console.log(student);
}
// log each firstName to the console
for (let student of july2020) {
  console.log(student.firstName);
}

//  log the first favorite artist of each student
for (let student of july2020) {
  console.log(student.favoriteMusic[1]);
}
//average excitmentLevel of the 3 students
let sum = 0;

for (let student of july2020) {
  // sum = sum + student.excitmentLevel
  sum += student.excitementLevel;
}
console.log(sum / 3);
console.log(sum / july2020.length);

let average = sum / july2020.length;
console.log(average);

for (let i = 50; i >= 0; i -= 5) {
  console.log(i);
}
let cars = ["ford", "chevy", "toyota"];

// log chevy (index number starts at 0. chevy would be 1)
console.log(cars[1]);

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
for (let car of cars) {
  console.log(car);
}

let counter = 0;
while (counter < cars.length) {
  console.log(cars[counter]);
  counter++;
}
// add up all numbers in array
let add = 0;
let numbers = [1, 2, 3, 4];
for (let number of numbers) {
  add += number;
}
console.log(add);
("use strict");
// const length1=3;

// function declaration
function getAreaFD(length, width) {
  return length * width;
}
//calling(invoking) the function
console.log(getAreaFD(5, 4));
// functino expression
const getAreaFE = function (length, width) {
  return length * width;
};

// calling (invoking) the function
console.log(getAreaFE(2, 2));

// Arrow function
// const getAreaAF= ()=>{

// }

const getAreaAF = (length, width) => {
  return length * width;
};

// calling(invoking) the function
console.log(getAreaAF(8, 7));

// // // const getAreaAFv2=(length,width)=>{
// //     return length*width;
// };

// above getAreaAFv2 can be written as:

const getAreaAFv2 = (length, width) => length * width;

const hello = () => {
  return "Hello";
};

hello();

console.log(hello);

("use strict");

// array of numbers for testing purposes

let numbers = [99, 98, 77, 66, 55];
let numbers2 = [99, 98, 77, 66, 55, 50, 44];
// array.splice(index, 1(how many do you want to delete?));
// numbers2.splice = (2, 1);

// array of strings for testing purposes

let strings = ["Detroit", "Birmingham", "Oxford", "Grand Rapids"];

// array of objects for testing purposes

let objects = [
  {
    brand: "Apple",
    size: 15,
    price: 1600,
    touchscreen: false,
  },
  {
    brand: "Lenova",
    size: 13,
    price: 1200,
    touchscreen: true,
  },
  {
    brand: "Dell",
    size: 15,
    price: 650,
    touchscreen: false,
  },
];

//access certain property of object. in the below exmample we want the price for Lenova

// console.log(objects[1].price);

// // log the brand and price of each item in the objects array
// for (let item of objects) {
//   console.log(item.brand);
//   console.log(item.price);
// }

// log the first two items brand and size in the objects array

// for (let i = 0; i <= 1; i++) {
//   console.log(objects[i].brand);
//   console.log(objects[i].size);
// }

// For Each loop

strings.forEach((string) => {
  console.log(string);
});

objects.forEach((object) => {
  console.log(object);
});

numbers.forEach((number) => {
  console.log(number);
});

for (let number of numbers) {
  console.log(number);
}

let sum = 0;
numbers.forEach((number) => {
  sum += number;
});
console.log(sum);

// Declare a function named calcSum
// ○ Parameter(s): array
// ○ Functionality: return the sum of all the values from the provided array

const calcSum = (array) => {
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });
  return sum;
};

console.log(calcSum(numbers));

// Declare a function named filterTouchscreens
// ○ Parameter(s): array
// ○ Functionality: return a new array where every object has a touchscreen property of true.

const filterTouchscreens = (array) => {
  let touchscreens = array.filter((laptop) => {
    return laptop.touchscreen === true;
  });
  return touchscreens;
};

console.log(filterTouchscreens(objects));

const under1500 = (array) => {
  let filterArray = array.filter((item) => {
    return item.price <= 1500;
  });
  return filterArray;
};
console.log(under1500(objects));

// Declare a function named findLaptopByPrice
// ○ Parameter(s): array, price
// ○ Functionality: return the first object from the provided array that has the specified price.

const findLaptopByPrice = (array, price) => {
  let found = array.find((item) => {
    return item.price === price;
  });
  return found;
};
console.log(findLaptopByPrice(objects, 650));

const findFirstLaptopThatIsLessThan1600 = (array) => {
  let found = array.find((item) => {
    return item.price < 1600;
  });
  return found;
};
console.log(findFirstLaptopThatIsLessThan1600(objects));

// Declare a function named findIndex
// ○ Parameter(s): array, brand, price
// ○ Functionality: return the index of the first object that has both the specified brand and price

const tracker = (array, brand, price) => {
  let index = array.findIndex((item) => {
    return item.brand === brand && item.price === price;
  });
  return index;
};

console.log(tracker(objects, "Dell", 650));

const deleteByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteByIndex(numbers2, 3);
console.log(numbers2);

// Declare a function named deleteALaptop
// ○ Parameter(s): array, name, price
// ○ Functionality: remove the first object in the array that has the specified name and price

// const deleteALaptop = (array, brand, price) => {
//   let index = tracker(array, brand, price);
//   array.splice(index, 1);
// };
// deleteALaptop(objects, "Apple", 1600);
// console.log(objects);

let numbers3 = [1, 2, 3];

// add "4" to the end of the array
numbers3.push(4);

// add "9" to the begining of the array
numbers3.unshift(9);

console.log(numbers3);

// Declar a function named addStringToBeginning
// paramter - aray, string,
// functionality: add a sring to the beginning of the proivided ray

// const addStringToBeginning = (replaeMeWithAnActualArray,replaceMeWithTheSringYouWantToAddToTheArray)=>{
//   replaeMeWithAnActualArray.unshift(replaceMeWithTheSringYouWantToAddToTheArray);
//  };
const addStringToBeginning = (array, string) => {
  array.unshift(string);
};

addStringToBeginning(strings, "Ferndale");

console.log(strings);

const deleteALaptop = (array, brand, price) => {
  let index = array.findIndex((computer) => {
    return computer.brand === brand && computer.price === price;
  });
  array.splice(index, 1);
};

const addLaptopToInventory = (array, brand, size, price, touchscreen) => {};
