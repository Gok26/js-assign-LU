/*take a number from the user and write a function to check whether it is even or odd, assign it to a variable /and log it in a console */
function oddEven(x, y) {
    return ( x & 1 ) ? "odd" : "even";
  }
  
  function checkNumber(value) {
     console.log(" The Number entered is " + value + " and it is " + oddEven(value));

  }
   var num = prompt("Enter a number :")
   checkNumber(num)
