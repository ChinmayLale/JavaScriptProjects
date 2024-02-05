// Introduction
console.log("hello")
console.log("hello World from js file");
document.write("Hello This is written by JS")

// Variables In JS
var n1 = 10;
var n2 = 20;
console.log(n1+n2);

// Data Types in JS
var str1 = "This is a String"
var str2 = 'This is also a string'
var num1 = 455
var num2 = 45.26
//Object Data Type key val pair
var marks = {
    ravi : 64,
    shunham : 99.988,
}
document.write(marks);
// boolean
var a = true;
var b = false;

//undifind / null
var und = undefined;
var und1;
var und2 = null;

//Arrays
var arr = [1,2,3,4,5,6,7,8,9];
var arr1 = ["hello","this",99,"is also a array",100.209];
console.log("arr[5] is "+arr[5]);
console.log("Whole Array : "+arr); 
console.log("Mix Array : "+arr1);

//Operators In Java Script 
var b = 4;
var a = 6;
//Arithmatic
console.log("A+B = "+(a+b))
console.log("A-B = "+(a-b))
console.log("A*B = "+(a*b))
console.log("A/B = "+(a/b))

//Comparison Operator
console.log("A==B "+(a==b))
console.log("A<=B "+(a<=b))
console.log("A>=B "+(a>=b))
console.log("A!=B "+(a!=b))


// Functions in Java Script

function avg(a,b){
    var avg = (a+b)/2;
    return avg;
}

//Conditional statements Same If else
// -------------------


// Loops in JS
// 1. For Looop 
var arr = [4,5,2,1,6,7,2] ;
for(var i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

console.log("Below For Each Loop")
arr.forEach(function(element){
    console.log(element)
})

// Let is also used for variable declaration
let index = 0;
while(index < arr.length){
    console.log("using while arr"+index+" = "+arr[index]);
    index++;
}
// if(index <= arr.length){
// // alert("Hiii")
// }



//Array Methods in JS

let newarr = ["hello" , 1 , 5.7 , " new Array"];
console.log("To get length : "+newarr.length);
console.log('To Remove last use POP'+newarr.pop());
console.log('TO add last use push'+newarr.push("Chinmay"))

console.log(newarr);



//Dates in java Script

let mydate = new Date();
console.log(mydate)


// Dom Manipulation

let ele = document.getElementById('btn')
let element = document.getElementById('d1')
console.log("This Element Found "+ele)
ele.onclick = function(){
    alert("You Pressed Btn")
}
element.addEventListener('mouseover' ,function(){
    element.style.color='#eeeeea'
    console.log("Hello")
} ) 
element.addEventListener('mouseout' ,function(){
    element.style.color='black'
    console.log("Hello")
} ) 


givealert = () =>{
    alert('Timeout')
}
givelog = () => {
    console.log("TImeout")
}
// setTimeout(givealert,5000)
// setInterval(givelog,5000)