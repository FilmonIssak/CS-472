"use strict"


//Q6

var count = (function(){
    let counter = 0;
    var add = function(){
        return counter += 1
    }

    var reset = function(){
        counter=0;
        return counter
    }
   return {
    add: add,
    reset: reset
   }
})()




// Q8

const make_adder = (five)=>{
    counter = 0;
    const add = function(){
            counter += five
            return counter
    }
    return add
}

const add5 = make_adder(5);
add5();
add5();
add5();

const make_adderr = (seven)=>{
    counter = 0;
    const add = function(){
            counter += seven
            return counter
    }
    return add
}

const add7 = make_adder(7);
add7();
add7();
add7();






//Q10 && Q11
const Employee = (function () {

    let name = ""
    let age = 0
    let salary = 0;
    let address = ""
    

   const setName = function (name){
       this.name = name;
   }

   const setAge =function (age){
       this.age = age;
   }

   const setSalary = function (salary){
       this.salary = salary;
   }

   const getName = function (){
       return this.name;
   }

   const getAge = function (){ 
       return this.age
   }

   const getSalary = function(){
       return this.salary
   }
   
   const increaseSalary = function(persentage){
       this.salary = this.salary + (getSalary() * (persentage/100));
   }

   const incrementAge =  function(){
       this.age = getAge() + 1
   }

   const setAddress = function (newAddress){
       this.address = newAddress;
   }

   const getAddress = function (){
       return this.address
   }
   

return  {
   setName, 
   setAge, 
   setSalary,
   increaseSalary, 
   incrementAge,
   address,
   setAddress,
   getAddress
  }

})()



Employee.setAge(30);
Employee.setName("Filli");
Employee.setSalary(200)
Employee.incrementAge()
Employee.incrementAge()
Employee.increaseSalary(20)

Employee.setAddress("Mke")
console.log(Employee.address)
console.log(Employee.getAddress());

