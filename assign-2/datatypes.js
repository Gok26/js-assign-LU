//datatypes in js
//primitive datatypes
// numbers, strings. boolean, null, undefined
//non-primitive datatypes
// array, objects, functions

// number
 var a = 8;
 console.log(a)//defining a number
 
 let myName = 'Greg thomson';
 console.log(myName) //defining a string 

 const b = false;
 console.log(b) // retunns a boolen value

 let id = null;
 console.log(id) // returns a null value

 let employee;
console.log(employee) //returns undefined value

let arr = ['Apple', 'Orange', 'Pear', 'Berry'] // each string inside the array holds a index value from 0
console.log(arr[0]) // returns first element inside the array

let employeeDetails = {
    name: 'Malfoy',
    Place: 'Hogwards',
    Team : 'Slitherin',
    id : '1038'
} // defining an object
 console.log(`${employeeDetails.name} in ${employeeDetails.Place} belongs to team ${employeeDetails.Team} with ${employeeDetails.id}`)

function demo() {
    let x = y = 20;
    var result = x+y;
    return result;
} //function definition
console.log(demo())  //function call