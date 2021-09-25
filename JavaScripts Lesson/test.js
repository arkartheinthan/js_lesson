// alert('Hello World..');

//Function
// function getAverage (a,b){

//     var average = (a + b)/2;
//     console.log(average);
//     return average;

// }
// var myResult =  getAverage(2,5);
// console.log('The average is ' + myResult);


//Creat New JavaScripts Objects
// var myArray = new Arrray();
// muArray[0] = 8;
// myArray[1] = "hello";

// var myCar = new Object();
// myCar.maxspeed = 50;
// myCar.driver = "Arkar";
// myCar.drive = function(){ 
//     console.log("Now driving..");
//  };

//  myCar.drive();

// var myCar2 = {
//     maxspeed: 60, 
//     driver: "Mg Mg", 
//     drive: function(speed, time){ 
//         console.log(speed * time); 
//     } 
// };

// console.log(myCar2.maxspeed);
// myCar2.drive(50, 4 );


//THIS keyword
// var myCar2 = {
//     maxspeed: 60, 
//     driver: "Mg Mg", 
//     drive: function(speed, time){ 
//         console.log(speed * time); 
//     },
//     logDriver: function(){
//         console.log("Driver name is " + this.driver);
//     }
    // test: function(){
    //     console.log(this);
    // }
// };

// myCar2.logDriver();
// // myCar2.test();
// console.log(myCar2.maxspeed);
// myCar2.drive(50, 4);



//CONSTRUCTOR FUNCTIONS
// var Car = function(maxSpeed, driver){
//     this.maxSpeed = maxSpeed;
//     this.driver = driver;
//     this.drive = function(speed, time){
//         console.log(speed * time);
//     };
//     this.logDriver = function(){
//         console.log("Driver name is " + this.driver);
//     };
// }

// var myCar = new Car(70, "Arkar");
// var myCar1 = new Car(50, "mgmg");
// var myCar2 = new Car(80, "susu");
// var myCar3 = new Car(30, "tutu");

// myCar.drive(30, 4);
// myCar2.logDriver();


//Date Object
// var myDate = new Date();
// console.log(myDate);

// var myPastDate = new Date(2019, 11, 2, 10, 30, 15);
// var myFutureDate = new Date(2025, 0, 31, 10, 30, 15);

// console.log(myPastDate);
// console.log(myFutureDate);

// var birthday = new Date(1994, 4, 29, 1, 15, 10);
// var birthday2 = new Date(1994, 4, 29, 1, 15, 10);
// //get the month of the date (0 - 11)
// console.log(birthday.getMonth());
// //get the full year (YYYY)
// console.log(birthday.getFullYear());
// //get the date of the month (1 - 31)
// console.log(birthday.getDate());
// //get the day of the week (0 -6)
// console.log(birthday.getDate());
// //get the hour of the date(0 -23)
// console.log(birthday.getHours());
// //get the number of milliseconds since 29 May 1994
// console.log(birthday.getTime());

// if(birthday.getTime() == birthday2.getTime()){
//     console.log('Birthday are equal.');
// }else{
//     console.log('Birthday are not equal.');
// }


//The Onclick Event
// var content = document.getElementById("content");
// var button = document.getElementById("show-more");

// button.onclick = function(){

//     if(content.className == "open"){
//         //shrink the box
//         content.className = "";
//         button.innerHTML = "Show More";
//     } else{
//         //expand the box
//         content.className = "open";
//         button.innerHTML = "Show Less";
//     }


// };



//JavaScripts Timer 

// var myMessage = document.getElementById("message");

// function showMessage(){
//     myMessage.className = "show";
// }
// setTimeout(showMessage,3000);

// var colourChanger = document.getElementById("colour-changer");
// var colours = ["red", "blue", "green", "pink"];
// var counter = 0;

// function changeColour(){
//     if(counter >= colours.length){
//         counter = 0;
//     }
//     colourChanger.style.background = colours[counter];
//     counter++;

// }

// var myTimer = setInterval(changeColour, 3000);
// colourChanger.onclick = function(){
//     clearInterval(myTimer);
//     colourChanger.innerHTML = "Time Stopped";
// }

// var colourChanger = document.getElementById('colour-changer');
// var colours = ["red", "green", "blue", "pink"];
// var counter = 0;

// function changeColour(){
//     if(counter >= colours.length){
//         counter = 0;
//     }
//     colourChanger.style.background = colours[counter];
//     counter++;
// }
// var myTimer = setInterval(changeColour, 3000);
// colourChanger.onclick = function(){
//     clearInterval(myTimer);
//     colourChanger.innerHTML = "Times is stopped!";
// }



//Very Simple form validation
// var myForm = document.forms.myForm;
// var message = document.getElementById("message");

// myForm.onsubmit = function(){

//     if(myForm.name.value == ""){
//         message.innerHTML = "Please enter a name!";
//         return false;
//     } else{
//         message.innerHTML = "";
//         return true;
//     }

// };