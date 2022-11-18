
import {Person,Employee} from "./model/person.js"

let persons = [
    new Person("Ana Smith", Date(1998-12-15)),
    new Person("Bob Jone", Date(1945-11-16)),
    new Person("Carlos Slim Helu", Date(1976-11-24))
]

persons.map(s=> console.log(s.toString()));


let employee = new Employee("Jim Hansaon","245,990.00")

console.log(employee.doJob("software Engineer"))