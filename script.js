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


// day 13

var arr = [ 5 ,6,9,5,8,7,2,5,3,1,5,6,12 ];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
arr.sort(); 
console.log(arr);
arr.push(55);
console.log(arr);
arr.pop();
arr.splice(1 , 2);
arr.splice(3,4 , 550);
arr.reverse();
arr.indexOf(12);
arr.lastIndexOf(5);

var my_string3 = "my name is akml";

var check1 = my_string3.charAt(4);
var check2 = my_string3[8];
var check3 = my_string3.at(7);
var check4 = my_string3.slice(4);
var check5 = my_string3.toLowerCase(); 
var check6 = my_string3.toUpperCase(); 
var check7 = my_string3.concat("emad");
var check8 = my_string3 + "emad";
var check9 = my_string3.trimEnd();
var check10 = my_string3.trimStart();
var check11 = my_string3.trim(); 
var check12 = my_string3.split("&"); 

my_string3.replace("akml" , "Kimo");
my_string3.replaceAll("akml" , "Kimo");
my_string3.padEnd(", 12345");
my_string3.padStart("12345, ");

document.addEventListener("mousemove", function(){
    console.log("Hello");
})

document.addEventListener("mousedown", function(){
    console.log("User click mouse down");
})

document.addEventListener("mouseup", function(){
    console.log("User left the mouse up");
})

document.addEventListener("click", function(){
    console.log("User click the mouse");
})

document.addEventListener("mouseenter", function(){
    console.log("the mouse entered the space");
})

document.addEventListener("mouseleave", function(){
    console.log("the mouse left the space");
})

var myImage = document.querySelector("img")

myImage.addEventListener("drag", function(){
    console.log("the image moved");
})

document.addEventListener("keydown", function(e){
    console.log("use the keyboard");
    console.log(e.key);
})

document.addEventListener("keypress", function(){
    console.log("use the keyboard");
})

document.addEventListener("keyup", function(){
    console.log("left the keyboard button");
})

document.addEventListener("keydown", function(e){
    console.log("User click on F11 Key");
    if(e.key == 'F11') {
        e.preventDefault();
    }
})

document.addEventListener("keydown", function(e){
    if(e.key == 'm') {
        window.alert("The invoice been saved!")
    }
})

var input = document.querySelector("input")

input.addEventListener("focus", function(){
    console.log("click inside the input field");
})

input.addEventListener("blur", function(){
    console.log("left the input field");
})
