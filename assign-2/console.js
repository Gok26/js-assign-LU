// types of console
let a = 10;
console.log(a)

//declaring object
console.time('Time taken')
let employee = {
    Name : 'Ron Weasley',
    Designation: 'Devops engineer',
    Salary : '$25000',
}
console.log(`The employee ${employee.Name} is working as ${employee.Designation} with a salary of ${employee.Salary}`)
console.table(employee)
console.error('You got an error message!')
console.warn("Remove line3 in the code")
console.timeEnd('Time taken'); //time taken for the code to run in ms
