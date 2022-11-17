
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

// =======================
// problems of Async JS 
// =======================


// const getFun = () => {
//     console.log('getFun called');
//     setTimeout(() => {
//         return { idea: 'Eat and sleep!' };
//     }, 2000);
// };

// // line 1
// let myFun = getFun();

// // line 2
// console.log(myFun.idea);

// ============================
// solution with callback in JS 
// ============================

const getFun = (callBack) => {
    console.log('getFun called');
    setTimeout(() => {
        callBack({ idea: 'Eat and sleep!' });
    }, 2000);
};

const myFun = (arg) => {
    console.log(arg.idea);
};

getFun(myFun);


// short version 
// getFun((arg) => {
//     console.log(arg.idea);
// });


// setTimeout(arg1, arg2);

// setTimeout(() => {
// // code
// }, 2000);


