"use strict"
let name ="Bryan Brown";
let age = 28;
let birthday = "October 8th";
let detroitGC = true;
let lifeEvents=["I graduated from Central in 2014", "I lived in Charlotte, NC for 4 years", "I taught 7th grade Social Studies", "I worked at Quicken Loans for 2 years"];

if(detroitGC){
    console.log(`My name is ${name} and I am a student at Granc Circus in Detroit Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
    console.log(`My name is ${name} and I am a student at Granc Circus in Grand Rapids Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}

for (let i=0; i < lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0;

while(true){
    let randomNumber = Math.random(Math.floor*10+1);
    console.log(randomNumber);
    if(randomNumber !==5){
        counter++;
        console.log(`${randomNumber}!==5`);
    }else{
        counter++;
        console.log(`5 === 5. It took ${counter}iterations to randomly generate the number 5.`);
        break;
}
}