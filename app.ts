// 1:
let a = "Pakistan";
a = 19; // coppiler Error
console.log(a);

// 2:
if (true) {
    let a = 4;
    // use a here
    // console.log(a); // In blook
    
} else {
    let a = 'string';
    //  use a here 
}
console.log(a); //Output: connot use "a" in the log statement

// 3:
const a = 5;
a++; // compiler Error line 2
console.log(a);

// 4:
var a = 7;
a = 9;
console.log(a); // Output: no compiler error

// 5:
let myType = {name: "Zia", id: 1};
myType = { id: 2,name: "Tom"};
myType = {id: 3, name: "Mike", gender: false}; // Output: Error (gendr property does not asssign)

// 6:
let array1 number[] = [5,6,7];
let array4: number[] = []; //Correct.. .
let array2: Array<number> = [1,2,3]; //Correct.. .
let array3 = new Array[number];

// 7:
let myType: any = {name: "Zia", id: 1};
myType = {id: 2, name: "Tom"};
myType = {id: 3, name: "Mike", gender: false};
myType = {id: 4, gender: false}; //Output: no compiler error no compiler error


// 8:
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; //Output: no compiler error

// 9:
enum Color {Red =1, Green,Blue};
var colorName: string = Color[2];
console.log(colorName); //Output: Green

