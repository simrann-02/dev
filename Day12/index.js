//understanding basics of js

//js is synchronous single-threaded language.

/*
1. execution context - memory and code component.
memory component has variables and functions as key-value pairs. (variable environment). 
code component where the code runs line-by-line. (thread of execution)

2. how js is executed? 
--> as soon as js engine executes the program, it skims through the whole program and allocates memory to each variable and function in the memory block of execution context. 
for variables - undefined
for functions - whole code is stored against the function name.
--> now the code execution phase begins, the code runs line by line. For every function invoked, another execution context is created. 
once the function is complete, the execution context created for this function, will be deleted.

To manage the execution contexts, it uses call stack. 
Global execution context is pushed to the stack, and then further execution contexts are pushed, popped when the invoked function is complete. 
Call stacks manages the order of execution of execution context. 

3. Hoisting in js?
--> we can access the variables and functions before they are declared using hoisting. It happens due to the way execution context is created. 

4. How functions are executed in js?

5. window - this is an object created by js engine, having some utility functions. It is created along with the global excecution context.  
    this -- this keyword points to the window object at the global level. at function level, also this is created. 

6. Undefined - memory has been allocated but the value will be assigned later. placeholder. 

7. Scope in js - 
scope - where can I access this variable/function. 

when a execution context is created, a lexical evironment is also created which the local memory along with the lexical environment of its parent. 

scope chain -






Let and Const ---> Temporal dead zone 
For let and const, the variable is also allocated memory and assigned the undefined placeholder, but it is not attached to the global window object. That is why we cannot access it before declaration. This is called temporal dead zone, the time between the variable declaration and the assignment of value.


Let, var and const --> 
reference error
syntax error - during redeclaration of a let variable. 
type error - when you try to reassign a const varuable. 

strictness - 
const > let > var 
const should be intialised during declaration and it can never be reinitialised. 
let cannot be redeclared. 
var can be redeclared and reinitialised.  

Block Scope - 
block is also known as compound statement 
block scope - what all variables and functions can be accessed in this block. 
let and const are block scoped. var is function scoped. 


Shadowing - when a var variable is redeclared in block scope, it shadows the previous value at global level. 

illegal shadowing - when a var variable tries to shadow a let variable in block scope. 

Closures - a function bundled together with its lexical environment. 

uses of closures 

*/
// console.log(t);
// var t = 10;
// console.log(this.t);
// console.log(t);
// console.log(window.t);

// function a() {
//   var x = 10;
//   b();
//   function b() {
//     var y = 8;
//     console.log(y);
//     c();
//     function c() {
//       console.log(x);
//       console.log(y);
//     }
//   }
// }
// a();

{
  console.log(a);
  console.log(b);
  let a = 10;
  const b = 10;
  var c = 10;
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);
