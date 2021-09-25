"use strict";
// const character = "Mg Mg";
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input);
// });
//tutorial - 3
// let character = "Arkar";
// let age = 29;
// let isBLackBelt = false;
// character = 10;
// character = "Mgmg";
// age = "arkar";
// age = 27;
// isBLackBelt = "yes";
// isBLackBelt = true;
// const circle = (diameter: number) => {
//     return diameter * Math.PI;
// }
// console.log(circle(25));
//Tutorial - 4
// Array
// let names = ["Arkar", "Mg mg", "Tun tun", "Susu"];
// names.push('tutu');
// names.push(1);
// names[0] = 3;
// let numbers = [10, 20, 30, 40];
// numbers.push(50);
// numbers.push('Arkar');
// numbers[1] = "tutu";
// let mixed = [10, "Arkar", 25, "mgmg"];
// mixed.push("Susu");
// mixed.push(45);
// mixed[0] = 2;
// objects
// let ninja = {
//     name : "Arkar",
//     age : 29,
//     belt : 'black'
// };
// ninja.age = 40;
// ninja.name = "Mgmg";
// ninja.age = "Susu";
// ninja.skill = ['figthing','sneaking'];
// ninja = {
//     name : "mgmg",
//     age : 45,
//     belt : "red"
// }
// Tutorial - 5
//explicit types
// let character : string;
// let age : number;
// let isLoggedIn : boolean;
// // age = "Arkar";
// age = 10;
// // isLoggedIn = 11;
// isLoggedIn = true;
// arrays
// let ninja : string[] = [];
// ninja = ["arkar","mgmg"];
// ninja.push("Arkar");
// union types
// let mixed : (string|number|boolean)[] = [];
// mixed.push("Arkar");
// mixed.push(14);
// mixed.push(true);
// console.log(mixed);
// let uid : string|number;
// uid = "123";
// uid = 123;
// objects
// let ninjaOne : object;
// ninjaOne = { name:"Arkar", age:29 };
// // ninjaOne = "hello";
// let ninjaTwo : {
//     name : string,
//     age : number,
//     color : string
// }
// ninjaTwo = {name:"Arkar", age:22, color:"blue"};
// Tutorial - (6) Dynamic (any) Types
// let age : any = 25;
// age = "arkar";
// console.log(age);
// age = true;
// console.log(age);
// age = { name : "Arkar"};
// console.log(age);
// let mixed : any[] = [];
// mixed.push("Arkar");
// mixed.push(25);
// mixed.push(false);
// console.log(mixed);
// let ninja : {name:any , age:any};
// ninja = {name: "Arkar", age:29};
// console.log(ninja);
// ninja = {name: 25, age:'mgmg'};
// console.log(ninja);
//Totorial - 8 function basic
// let greet : Function;
// greet = () => {
//     console.log('hello, world');
// }
// const add = ( a : number, b : number, c? : number | string ) => {
//     console.log( a + b);
//     console.log(c);
// }
// const add = ( a : number, b : number, c : number | string = 10 ) : void => {
//     console.log( a + b);
//     console.log(c);
// }
// add(5, 10, 25);
// const minus = (a:number, b:number) => {
//     return a+b; 
// }
// let result = minus(5,10);
// Tutorial - 9 Type Aliases
// type StringOrNum = string | number;
// type objWithName = { name:string, uid:StringOrNum };
// const logDetails = (uid : StringOrNum, item : string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };
// const greet = (user:objWithName) => {
//     console.log(`${user.name} says Hello`);
// };
// Titourial 10 Function Signatures
// let greet : Function;
//example 1
// let greet : (a: string, b: string) => void;
// greet = (name:string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
// // example 2
// let calc: (a:number, b:number, c:string) => number;
// calc = (numOne : number, numTwo:number, action:string) => {
//     if(action === "add"){
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// }
// // example 3
// let logDetails : (obj:{name:string, age:number}) => void;
// type person = {name:string, age:number};
// logDetails = (ninja : person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// }
// Titorial - 11 The DOM & Type Casting
