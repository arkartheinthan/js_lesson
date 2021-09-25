// const anchor = document.querySelector('a')!;
// // if(anchor){
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// const form = document.querySelector('form')!;
// //class
// class Invoice{
//   readonly client: string;
//   private details: string;
//   public amount: number;
//   constructor(c: string, d:string, a:number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format(){
//     return `${this.client} owes ${this.amount} for ${this.details}`;
//   }
// }
// const invOne = new Invoice('Arkar', 'work for Arkar website', 250);
// const invTwo = new Invoice('MgMg', 'work for MgMg website', 300);
// let invoices : Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
//Interfaces
// interface IsPerson{
//   name : string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me:IsPerson = {
//   name : 'Arkar',
//   age : 27,
//   speak(text : string) : void {
//     console.log(text);
//   },
//   spend(amount: number) : number {
//     console.log('I spend', amount);
//     return amount;
//   }
// };
// const greetPerson = (person: IsPerson) => {
//   console.log('hello', person.name);
// }
// greetPerson(me);
// console.log(me);
// import {Invoice} from './classes/Invoice.js';
// const invOne = new Invoice('Arkar', 'work for Arkar website', 250);
// const invTwo = new Invoice('MgMg', 'work for MgMg website', 300);
// let invoices : Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   console.log(
//     type.value, 
//     tofrom.value, 
//     details.value, 
//     amount.valueAsNumber
//   );
// });
//Tutorial - 16 Interfaces with Classes
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// let docOne : HasFormatter;
// let docTwo : HasFormatter;
// docOne = new Invoice('Arkar', 'web work', 250);
// docTwo = new Payment('mgmg', 'plumbing', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance   ---Tutorial-17----
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    // ---Tutorial-17----
    list.render(doc, type.value, 'end');
});
// Generics
// const addUID = <T extends {name:string}>(obj : T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name:'arkar', age: 27});
// let docTwo = addUID('hello');
// console.log(docOne.age);
// with interface
// interface Resource<T> {
//   uid : number;
//   resourceName : string;
//   data : T;
// }
// const docThree : Resource<object> = {
//   uid : 1,
//   resourceName : 'person',
//   data : {name: 'Arkar'}
// }
// const docFour : Resource<string[]> = {
//   uid : 2,
//   resourceName : 'mgmg',
//   data : ['susu', 'ayeaye']
// }
// console.log(docThree, docFour);
// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid : number;
//     resourceName : ResourceType;
//     data : T;
//   }
//   const docOne : Resource<object> = {
//     uid : 1,
//     resourceName : ResourceType.AUTHOR,
//     data : {title: 'name of the wind'}
//   }
//   const docTwo : Resource<object> = {
//     uid : 2,
//     resourceName : ResourceType.PERSON,
//     data : { name : 'arkar'}
//   }
//   console.log(docOne, docTwo);
// Tuples
// let arr = ['Arkar', 27, true];
// arr[0] = false;
// arr[1] = 'mgmg';
// arr = [11, false, 'mgmg'];
// let tup : [string, number, boolean] = ['Arkar', 11, true];
// tup[0] = 'mgmg';
// tup[1] = false;
