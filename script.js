


const express = require("express")

const app = express();


app.get("/",function(request, reponse){
    reponse.send(index.html)
})

app.listen(3000, function(){
    console.log("server started at port 3000")
})




function name(){

    console.log('Adi');
}

name();

hello = () =>{
    console.log('Aish');
}

hello();

function double(a){
    let b = a*2;
     console.log(b);
}


double(2);


// array and functions
let output = []
let count = 1;
function fizzbuzz(){
    output.push = count;
    count++;
    console.log(output)
}

fizzbuzz();
fizzbuzz();


// loops

for(i = 0; i < 5; i++){

     i = i + 1;
    console.log(i);
}