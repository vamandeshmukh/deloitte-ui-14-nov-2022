// method == function 

// console.log('OOP concepts in JS');

const userName = 'Vaman';
// const greetingMessage = 'Hi ' + userName + '!'; // this line 
const greetingMessage = `Hi ${userName}!`; // this line 

// console.log(greetingMessage);

// class and object in JS 


class Employee {

    eid;
    firstName; // name, id, value, user 
    salary;

    constructor(eid, firstName, salary) {
        this.eid = eid;
        this.firstName = firstName;
        this.salary = salary;
    }

    work = () => {
        console.log(`${this.firstName} works!`);
    };
}

const emp = new Employee();
// emp.firstName = 'Sonu';
emp.work();
const emp2 = new Employee(102, 'Monu', 90000);
// emp.firstName = 'Sonu';
emp2.work();

class ContractualEmployee extends Employee {

}

const conEmp = new ContractualEmployee();
conEmp.firstName = 'Tonu';
conEmp.work();


