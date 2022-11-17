
"use strict"

// lab 9

const person_q1 = {
    name: "",
    dateOfBorth: "",
    getName: () => {
        return this.name
    },

    setName: (name) => {
        this.name = name
    }
}

const person1 = Object.create(person_q1);

person1.name = "john";
person1.dateOfBorth = "December 10th, 1998";
console.log(`The person’s name is ${person1.name}`)
console.log(`John was born on ${person1.dateOfBorth}`);


// Q2

const employee = Object.create(person_q1, ()=>{

    salary = 0
    hiredate = new Date()
});

employee.doJob = function (title) {
    console.log(`${this.name} is a ${title} who earns $${this.salary}`);
};


const name = employee.name = "anna"
const salary = employee.salary = 249995.50;
employee.doJob("Programmer")


// // Q3

function Person_q3(name, dateOfBirth) {
    this.name = name;
    this.dateOfBorth = dateOfBirth;
    this.getName = function (){
        return this.name
    }
    this.setName = function(name){
        this.name = name
    }
    this.toString = function(){
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
    }
}

// const person6 = new Person_q3("peter","new Date(1985,12,10)");

let date = new Date(1985,12,10);
 

const x = new Person_q3();
x.setName("Peter")
x.dateOfBirth = (date.getFullYear() + (date.getMonth()+1) + date.getDate());
console.log(x.toString());