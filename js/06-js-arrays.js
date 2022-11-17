
// arrays in JS 

const myArray = [22, 9, 31, 25, 17, 30];

console.log('iterate array with for loop:');
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('iterate array with for of loop:');
for (const m of myArray) {
    console.log(m);
}
