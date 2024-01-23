
/* data type in jc 
underfined,null, boolean, string, symbol, number and object 
*/

var myNume = "antonio" ;
let ourName = "banze";
const name = "john";

/* declaration */

var a;
var b =2;
a =7;
b = a;

console.log(a);

//initialize 
var a = 5;
var b =5 ;
var c =0;

c=a+b;
console.log(c);

/********
 
 code  output 
 \'    single quote
 \"    double quote
 \\    backslash
 \n    newline 
 
 *******/

 // concatenation +

 var status1 = "my name is "+ myNume + " im this old "+ a;

 console.log(status1);


// start at 30minutes 
//methods


// finding the length of a word 

var lastNameLength = 0;
var lastName = "antonio";

lastNameLength =lastName.length;

console.log(lastNameLength);

var lastLetterofName =" ";
var LetterofName;

LetterofName = lastName[0]; // taking out letters from words 
lastLetterofName = lastName[lastNameLength -1];// gitting the last letter

console.log(LetterofName);
console.log(lastLetterofName); 

//array 

var ourArray = ["joni", 22];
var arrayone= [22,55,44,66,77];
var dataarry = arrayone[2];

var yourarray =[[1,2,2,1],[5,6,2,2],[1,5,6,8]];
arrayone[2] =50; // updating an array


console.log(dataarry);
console.log(arrayone[2]);
console.log(yourarray[2][1]);

// function

function ourReusableFunction(){
console.log("lol this is happening "); // creating a function 

}
ourReusableFunction(); //this is how we call a funtion 