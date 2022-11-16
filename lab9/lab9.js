
"use strict"

// lab 9

const person = {
    name: "",
    dateOfBorth: "",
    getName: () => {
        return this.name
    },

    setName: (name) => {
        this.name = name
    }
}

const person1 = Object.create(person);

person1.name = "john";
person1.dateOfBorth = "December 10th, 1998";
console.log(`The person’s name is ${person1.name}`)
console.log(`John was born on ${person1.dateOfBorth}`);



let Person = {
    name : ""
}

let employee = {
    salary : 0,
    hireDate : new Date,

    joJob : (job) => {
        console.log(`[Employrr's ${this.name}] is a [JobTitle${this.job}] who earns $[${salary}]`);
    },

    __proto__ : Person
}


employee.name = "Anna"


salary.salary = 249,995,50;

const jobtitle = Employee.joJob(Programmer)
console.log(jobtitle);


