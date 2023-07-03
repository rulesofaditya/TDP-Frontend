


const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/",function(request, reponse){
    reponse.sendFile(__dirname + "/index.html")
})


app.post("/",function(request, response){

    var num1 = Number(request.body.num1);
    var num2 = Number(request.body.num2);
    var result = num1 + num2;

    response.send("Thanks for posting" + result)
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