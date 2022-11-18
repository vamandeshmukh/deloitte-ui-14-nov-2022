
class Customer {

    customerId;
    firstName;
    phones;
    email;
    address;

    constructor(customerId, firstName, phones, email, address) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.phones = phones;
        this.email = email;
        this.address = address;
    }
}

const registeredCustomers = [];

registeredCustomers[0] = new Customer(101, 'Sonu', [9876543210, 6789543210], 'sonu@deloitte.com', { street: 'Bank street', city: 'Hyderabad', 'pin': 500001 });
registeredCustomers[1] = new Customer(102, 'Monu', [8976543210, 7896543210], 'monu@deloitte.com', { street: 'Meenakshi Towers', city: 'Hyderabad', 'pin': 500081 });
registeredCustomers[2] = new Customer(101, 'Tonu', [9988776655, 9988776655], 'tonu@deloitte.com', { street: 'Whites road', city: 'Chennai', 'pin': 600006 });

registeredCustomers.forEach(e => {
    console.log(e);
    const divElem = document.createElement('div');
    const divElemData = document.createTextNode(`${e.customerId} ${e.firstName} ${e.phones[0]} ${e.phones[1]} ${e.email} ${e.address.city} ${e.address.street} ${e.address.pin}`);
    divElem.appendChild(divElemData);
    document.body.appendChild(divElem);
});

