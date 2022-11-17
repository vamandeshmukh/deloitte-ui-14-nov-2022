// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// arrays in JS 

const myArray = [22, 9, 31, 25, 17, 30];

// console.log('iterate array with for loop:');
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// console.log('iterate array with for of loop:');
// for (const m of myArray) {
//     console.log(m);
// }
console.log(myArray);

const myArray2 = myArray.map((arg) => { return arg * 2; });
// const myArray2 = myArray.map(arg => arg * 2); // shortcut 
console.log(myArray2);

const myArray3 = myArray.filter((e) => { return e > 20; });
console.log(myArray3);

// console.log('iterate array with forEach method:');
myArray.forEach((e) => { console.log(e) });
