
// object and its methods in JS - 

const empData = {
    eid: 101,
    firstName: 'Sonu',
    salary: 10.5,
    isMarried: false,
    phones: [9876543210, 6785431209],
    address: {
        street: 'Koti',
        city: 'Hyderabad',
        pin: 500001
    }
};

// console.log(empData.address.city);
// console.log(empData.phones[1]);

for (const elem in empData) {
    console.log(elem);
}
