//take an input from the user i.e android9 and log it in a console seperated by a space

function usrInput(text){
       let myArray = text.split(/([0-9]+)/)
       console.log(`The OS name is ${myArray[0]} and version is ${myArray[1]}`);

}

var getInput = prompt("Enter the OS name of your android mobile: ")
usrInput(getInput)