let arr = []
for(i=1; i<=10 ; i++){
    arr.push(i)
}
let odd = arr.filter((element)=> element%2 != 0);
console.log(odd)

let oddcubes = arr.filter((element)=> element%2 != 0).map((element)=> element**3);
console.log(oddcubes)
