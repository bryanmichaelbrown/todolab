"use strict"
// const length1=3;

// function declaration
function getAreaFD(length,width){
    return length*width;
}
//calling(invoking) the function
console.log(getAreaFD(5,4));
// functino expression
const getAreaFE=function(length,width){
    return length*width;
};

// calling (invoking) the function
console.log(getAreaFE(2,2));

// Arrow function
// const getAreaAF= ()=>{

// }

const getAreaAF=(length,width)=>{
    return length*width;
};

// calling(invoking) the function
console.log(getAreaAF(8,7));

// // // const getAreaAFv2=(length,width)=>{
// //     return length*width;
// };

// above getAreaAFv2 can be written as:

const getAreaAFv2=(length,width)=> length*width;


const hello=()=>{
    return "Hello";
};

hello();

console.log((hello));