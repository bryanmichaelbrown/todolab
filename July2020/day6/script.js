const firstName= "Rachel";
const lastName= "Ohler";

let favoriteAnimal= "Maned Wolf";

// let nickName = null;>

let isHungry= true;

let excitmentLevel= 6;

let favoriteArtists = ["daft Punk", "justice", "gesaffelstei"]

console.log(firstName);
console.log(lastName);
console.log(`${firstName} ${lastName}`);

let Name= `${firstName} ${lastName}`;

let nickName = firstName + ' the hungry ' + favoriteAnimal;
console.log(nickName);

if (isHungry === true){
    nickname= `${firstName} the hungry ${favoriteAnimal}`;
} else {
    nickname= '${firstName} the satisfied ${favoriteAnimal}';
}

if(isHungry){
    console.log(`My name is ${Name} and I am hungry`);
}
else{
    console.log(`My name is ${Name} and I am not hungry`);
}

if(excitmentLevel <4){
    console.log(`I'm not excited`);
} else if(excitmentLevel>=4 && excitmentLevel <=7){
    console.log(`I'm moderately excited`);
} else if(excitmentLevel>7){
    console.log(`I'm excited`);
}

let bryan = {
    firstName:"Bryan",
    lastName:"Brown",
    favoriteAnimal:"Penguin",
    nickName:null,
    excitmentLevel:10,
    isHungry:false,
    favoriteMusic:["B", "C",]
};

console.log(bryan);

console.log(bryan.excitmentLevel);

bryan.excitmentLevel=9;

console.log(bryan.excitmentLevel);

bryan.isHungry=true;

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
  for (let student of july2020){
      console.log(student);
  }
// log each firstName to the console
  for (let student of july2020){
    console.log(student.firstName);
  }

//  log the first favorite artist of each student
for(let student of july2020){
    console.log(student.favoriteMusic[1]);
}
//average excitmentLevel of the 3 students
let sum = 0;

for(let student of july2020){
    // sum = sum + student.excitmentLevel
    sum += student.excitementLevel;
}
console.log(sum/3);
console.log(sum/july2020.length);

let average = sum / july2020.length;
console.log(average);

for(let i=50; i>=0;i-=5){
    console.log(i);
}
let cars = ["ford", "chevy", "toyota"]; 

// log chevy (index number starts at 0. chevy would be 1)
console.log(cars[1])

for(let i =0;i < cars.length; i++){
    console.log(cars[i]);
}
for(let car of cars){
    console.log(car);
}

let counter = 0;
while (counter < cars.length){
    console.log(cars[counter]);
    counter++;
}
// add up all numbers in array
let add = 0
let numbers = [1,2,3,4];
for(let number of numbers){
    add+= number;
}
console.log(add);