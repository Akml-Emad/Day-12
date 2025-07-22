alert("Task 12");

console.log("Hello World");

// comment
/* comment 2 */

var age = 21;
console.log(age);

var my_string = "Akml";
console.log(my_string);

var my_string2 = "Emad";
my_string.concat(" " , my_string2)

console.log("I\'m 21 years old \n");

var num = 1;

num == 0? console.log("Zero") : num %2 == 0 ? console.log("Even") : console.log("Odd");

num = 3;

if(num == 0)console.log("Zero");
else if(num %2 == 0)console.log("Even");
else console.log("Odd");


var player1 = prompt("player1 choose from R P S");
var player2 = prompt("player2 choose from R P S");

if(player1 == player2){
    console.log("Draw");
}else if(player1 == "R"){
    if(player2 == "S"){
        console.log("player1 won!");
    }else{
        console.log("player2 won!");
    }
}else if(player1 == "S"){
    if(player2 == "P"){
        console.log("player1 won!");
    }else{
        console.log("player2 won!");
    }
}else if(player1 == "P"){
    if(player2 == "R"){
        console.log("player1 won!");
    }else{
        console.log("player2 won!");
    }
}

for (let i = 0; i < my_string.length; i++) {
    console.log(my_string.charCodeAt(i));
}
var year = 2025 , my_age = age;
while(my_age){
    my_age--;
    year--;
}
console.log("I was born "+year+'\n');

let iterator = 0;
do{
    console.log("Do While loop \n");
}while(iterator);


function akml(price, profit, tax, ads){
    var mainPrice = price + profit;
    var priceAfterTax = mainPrice + tax;
    var priceAfterAddons = priceAfterTax + ads;
    console.log(priceAfterAddons);
    return priceAfterAddons;
}

var prouct1 = calc (300,50,1.5);
var student = {
    st_name : "Akml",
    st_age : 21,
    gender : "male",
    major : "IS",
    courses :{
        num_of_courses : 6,
        hours_per_course : 3,
    },
    final_project : {
        idea : "movie recommendation",
        rule : "front end",
        prof : {
            prof_name : "Mary",
            prof_major : "AI", 
        }
    },
    passed : function(st_grade){
        if(st_grade > 50){
            console.log("passed");
        }
        else console.log("failed");
    }
}


function welcome() {
    console.log("Welcome");
}

// window.welcome();
