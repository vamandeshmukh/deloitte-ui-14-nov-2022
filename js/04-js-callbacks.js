
// callbacks in js 

// a function can be passed a argument to another function 


// enter a vaule 
// let someVariable = ???;

// const fun = (arg) => {
//     // code 
// }
// fun(??);

// const fun = (arg) => {
//     console.log('fun function');
//     // arg++;
//     let myCity = arg.city;
//     console.log(myCity);
// }
// fun(10);
// fun({ city: 'Hyderabad', pin: 500001 });

// const someArgToSupply = () => {
//     console.log('someArgToSupply function');
// };

// const fun = (arg) => {
//     console.log('fun function');
//     arg();
// }

// fun(someArgToSupply);


// problems of Async JS 

const getFun = () => {
    return { idea: 'Eat and sleep!' };
};

let myFun = getFun();

console.log(myFun.idea);



