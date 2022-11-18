/**
 * lab 10
 * model app
 */



class Person{
    constructor(name,dateOfBirth){
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    getName = function(){
        return this.name
    }

    setName = function(name){
         this.name = name
    }

    getDateOfBirth = function(){
        return this.dateOfBirth
    }

    setDateOfBirth = function(birth){
       this.dateOfBirth = birth
    }

    toString = function(){
        return `{Name: ${this.name}, DateOfBirth: ${this.dateOfBirth}}`
    }
}




class Employee extends Person{
    
    constructor(name,salary, hiredate){
        super(name);
        this.salary = salary;
        this.hiredate = hiredate
    }
    
    doJob = function(title){
        return `Employee's ${this.name} is a ${title} who earns $${this.salary}`
    }
}

//  export default Employee


export {Person,Employee}
