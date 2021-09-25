// object literals

// let user = {
//     name : "Arkar",
//     age : 29,
//     email : "arkar@gmail.com",
//     location : "Yangon"
// };

// console.log(user);
// console.log(user.name);

// user['name'] = "mgmg";
// console.log(user['name']);


//math object

// console.log(Math);
// console.log(Math.PI);

// const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// // random number
// const random = Math.random();
// console.log(random);
// console.log(Math.round(random * 100));



//primitive values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne : ${scoreOne}`, `scoreTwo : ${scoreTwo}`);

// scoreOne = 100;
// console.log(`scoreOne : ${scoreOne}`, `scoreTwo : ${scoreTwo}`);

//reference values

userOne = {name : "Arkar", age : 29};
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 30;
console.log(userOne, userTwo);
