let arr1 = ['red', 'blue', 'green', 'beige', 'black']

let text = document.getElementById('clr')
let btn = document.getElementById('switchcolor')

arr1.forEach((color)=>{
        text.innerHTML += `<li> ${color} </li>`
        
    })

setTimeout((demo) => {
    document.body.style.backgroundColor = 'black';
     document.body.style.color = 'white'
    
},5000);