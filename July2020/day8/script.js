"use strict";

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

const deleteALaptop = (array, brand, price) => {
  let index = tracker(array, brand, price);
  array.splice(index, 1);
};
deleteALaptop(objects, "Apple", 1600);
console.log(objects);

let numbers3 = [1, 2, 3];

// add "4" to the end of the array
numbers3.push(4);

// add "9" to the begining of the array
numbers3.unshift(9);

console.log(numbers3);

// Declar a function named addStringToBeginning
// paramter - aray, string,
// functionality: add a sring to the beginning of the proivided ray

const addStringToBeginning = (array, string) => {
  array.unshift(string);
};

addStringToBeginning(strings, "Ferndale");

console.log(strings);
