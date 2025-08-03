//enums
enum Team {
Alpha,
Beta,
Gamma,
Delta
}
let t: Team = Team.Delta;
//used to create named constants 

//type assertions --> type casting 

//tuples in ts --> special kind of array with fixed number of elements, and each element has a specific type and position. allows to group different types of elements together. 


//string literals and template literals
type Point = "GraphPoint";

// type Shape = "Grid GraphPoint"
type Shape = `Grid ${Point}`;


//In typescript class can only inherit one class. 
//access modifiers - public, protected and private 


//symbols in ts -->unique and primitive data types introduced by ES6 in ts. 