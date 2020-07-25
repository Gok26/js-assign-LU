
function demo(){
   let userText = prompt('Enter Your name:')
   if (true){
       document.write(`<h2> Welcome to the webpage ${userText}!! </h2>`)
   }
   
}
const clk = document.getElementById('clock')
function clock() {

   let date = new Date();
   let time = date.toLocaleTimeString();
   clk.innerText = time;

}

setInterval(clock,1000)

function dark(){
    let el = document.body;
    el.classList.toggle("dark-mode");
}