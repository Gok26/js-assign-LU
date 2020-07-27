const student = {
    name : "Helsinki",
    age:24,
    projects:{
        dicegame:'Two player dice game using Javascript'
    }
}

let{name,age,projects:{dicegame}} = student //destructing objects
console.log(name, age,dicegame);   