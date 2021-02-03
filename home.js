
/*Numbers

//Increments 
num1 = 10
num1 ++
console.log (num1)


num1 += 10
console.log(num1)

//Decrements
num1 --
console.log (num1)


//Divide , Multiply * , remainder %
console.log(num1*10)
*/



/*Functions

//Arguments

function greeting(yourName){
    var result = "Hello " + yourName
    console.log(result) 
}

var yourName = prompt ("What is your name")
greeting(yourName)

greeting()

function sumNumbers(num1 , num2){
    var result = num1 + num2
    console.log(result)
}
sumNumbers(10 , 5)
*/


/*While loops 

var num = 0

while (num < 100){
    num +=1
    console.log(num)
}


// For loops 
for (let num = 0; num <= 100; num++) {
    console.log(num)
}
*/


/*Data types


let yourAge = 14; //number
let yourName = "Curtis"; //string
let fullName = {first: "Curtis" , second: "smith"} //Object
let truth = false; //boolean
let groceries = ["apple" , "bannana" , "oranges"]; //aray
let random; //undefined
let nothing = null; // value null
*/


/*Strings
let fruit = "banana";
let moreFruits = "banana\napple";  //new line
console.log (moreFruits)

console.log(fruit.lengh)
console.log(fruit.indexOf("nan"));
console.log(fruit.slice(2,6));
console.log(fruit.replace("ban",123));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit.split(","))  //split by comma 
console.log(fruit.split("")) //split
*/


/* Array
let fruits = ["banana", "apple", "orange"];
 fruits = new Array ("banana", "apple", "orange");

console.log(fruits[1]); //access value at index 2nd

fruits[0] = "pear";
console.log(fruits)

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}


console.log("to string", fruits.toString());
console.log(fruits.join(" - "))
console.log(fruits.pop(), fruits);  //removes last item
console.log(fruits.push("strawberry") , fruits);  //appends
console.log(fruits[2]);
fruits[fruits.lenght] = "newfruit";
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift("kiwi");
console.log(fruits);

let vegtables = ["lettuce", "tomato", "brocili"];
let allGrociries = fruits.concat(vegtables)
console.log(allGrociries)
console.log(allGrociries.slice(1, 4));
console.log(allGrociries.reverse());
console.log(allGrociries.sort()); //alphabetical order



let someNumbers = [5, 10, 2, 25, 3, 255, 1, 321, 2];
console.log(someNumbers.sort(function(a, b) {return a-b}));  //accending order
console.log(someNumbers.sort(function(a, b) {return b-a}));  //decending order


let emptyArray = new Array();
for(let num = 0; num <= 10; num++){
    emptyArray.push(num);
}
console.log(emptyArray); 
*/


