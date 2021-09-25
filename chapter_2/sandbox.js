//for loop

// const names = ['Arkar', 'Mg Mg', 'Su su'];
// for(let i = 0; i < names.length; i++){
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// } 



//While loop

// let i = 0;
// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }
// const names = ['Arkar', 'Mg Mg', 'Su su'];
// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }


//do while loop

// let i = 3;
// do{
//     console.log('val of i is: ',i);
//     i++;
// } while(i<5)



//break and Continue

// const scores = [25, 50, 0, 30, 26, 100, 52, 90];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('Your score: ',scores[i]);

//     if(scores[i] === 100){
//         console.log('Congrats, you got the top score!');
//         break;
//     }

// }



//switch statements

// const grade = "A";
// switch(grade){
//     case 'A':
//         console.log('you got an A!');
//         break;
//     case 'B':
//         console.log('you got an B!');
//         break;
//     case 'C':
//         console.log('you got an C!'); 
//         break;  
//     case 'D':
//         console.log('you got an D!');
//         break;  
//     case 'E':
//         console.log('you got an E!');
//         break;
//     default:
//         console.log('not a valid grade!');
// }

//function decleration

// function green(){
//     console.log("Hello there...");
// }


// //function expression
// green();



//regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow function
// const calcArea = (radius) => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);


//pratise arrow function

// const greet = function(){
//     return "hello, world";
// }

// const greet = () => "hello, world";
// const result = greet();
// console.log(result);

// const bill = function(proudcts, tax){
//     let total = 0;
//     for(let i = 0; i < proudcts.length; i++){
//         total += proudcts[i] + proudcts[i] * tax;
//     }
//     return total;
// }

// const bill = (proudcts, tax) => {
//     let total = 0;
//     for(let i = 0; i < proudcts.length; i++){
//         total += proudcts[i] + proudcts[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10,20,30], 0.2));



//callback & foreach

// let people = ['Arkar','mgmg', 'susu', 'aungaung', 'tutu'];

// people.forEach(function(person){
//     console.log(person);
// })

// people.forEach((person, index) => {
//     console.log(index,person);
// })

// const logPerson = (person, index) => {
//     console.log(`${index} - Hello ${person}`);
// };

// people.forEach(logPerson);



//get a reference to the 'ul'

const ul = document.querySelector('.people');

const people = ["Arkar", "Mgmg", "Aye aye", "Su Su", "TuTu"];

let html= ``;

// people.forEach(function(person){
//     // create html template
//     html += `<li style="color: purple">${person}</li>`;
// });

people.forEach(person => {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;

