// var carAge = 7;

// if(carAge < 5){
//   console.log('Good')
// } else if (carAge > 5 && carAge < 10) {
//   console.log('Not Bad')
// } else {
//   console.log('Bad')
// }


/**
 * lesson 10
 */

// var carColor = 'green';

// switch(carColor){
//   case 'green':
//     console.log('Green Car');
//     break;
//   case ' yellow':
//     console.log('Yellow Car');
//     break;
//   default:
//     console.log('Black Car');
// }


/**
 * lesson 11
 */

// var carName = 'Ford';
// var carYear = 2012;
// var personYear = 1990;

// console.log((2020 - carYear) < 10 ? 'Not Bad' : 'Not Good');
// console.log((2020 - personYear) < 18 ? 'Not Adult' : 'Adult');

// function calculateAge(year){
//   var currentYear = 2020;
//   var result = currentYear - year;
//   return result;
// }

// function checkAndLogAge(year, name, compareInt){
//   return console.log(calculateAge(year) < compareInt ? name + ' Age Less Then '+compareInt+' Years' : name + ' Age More Then '+compareInt+' Years');

// }

// checkAndLogAge(carYear, 'car', 15);
// checkAndLogAge(personYear, 'person', 10);


/**
 * lesson 12
 */

// sayHelloTo('Jack');

// var sayHey = function(name){
//   console.log('Hey ' + name);
// }

// sayHello('Jack');

// function sayHello(name){
//   console.log('Hello ' + name);
// }


/**
 * lesson 13
 */

// var str1 = 'Hello World!!!';

// console.log(str1.length);
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());
// console.log(str1.charAt(0));
// console.log(str1.indexOf('World'));
// console.log(str1.substr(6, 5)); // 'World'
// console.log(str1.substr(str1.indexOf('World'), 5)); // 'World'
// console.log(str1.substring(1));
// console.log(str1.substring(1, 3));



/**
 * lesson 14
 */

// console.log(0xAB);
// console.log(2e5);
// console.log(NaN);

// console.log((4).toString());

// console.log(8/3);
// console.log((8/3).toFixed());
// console.log((8/3).toFixed(1));
// console.log((8/3).toFixed(3)); //typeOf string

// console.log(+(8/3).toFixed(3)); //typeOf integer

// console.log(parseFloat((8/3).toFixed(3))); //typeOf integer
// console.log(parseInt((8/3).toFixed(3))); //2

// console.log(isNaN(NaN)); // true
// console.log(isNaN(3)); // false

// console.log(isFinite(1/0)); // false cause result is infinite

// console.log(isFinite(99999999)); //true cause result is finite


/**
 * lesson 15
 * ARRAY
 */

// var cars = [
//   'Ford',
//   'Kia',
//   'BMW',
//   'Reno',
//   'Mercedes'
// ];

// console.log(cars);
// console.log(cars[0]);
// console.log(cars.length);
// console.log(cars.push('Audi')); // add at the end of array element

// cars.pop(); //remove last element of array

// console.log(cars);

// var audi = cars.pop();
// console.log(cars, audi);

// var audi = cars.shift();
// console.log(cars, audi);

// cars.unshift(audi);
// console.log(cars);

// console.log(cars.indexOf('Mercedes')); //4


/**
 * lesson 16
 * OBJECTS
 */
//  var person = {
//    'name': 'John',
//    'age': 23,
//    'family': ['Jake', 'Sarah'],
//    'car': {
//      'year': 2015,
//      'model': 'nissan skyline'
//    },
//    calculateAge: function(){
//      console.log(this.age + ' years old');
//    }
//  }

//  console.log(person);
//  console.log(person.name);
//  console.log(person['age']);
// var field = 'car';
// console.log(person[field].model);

// person.age = 24;
// console.log(person.age);
// person.calculateAge();


/**
 * lesson 17
 * 
 */
 var numbers = [1, 2, 3 ,4 , 5];
 numbers.push('not a number');

 for(var i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 0){
    continue;
  } else {
    console.log(numbers[i]);
  }
 }

 for(var i = 0; i < numbers.length; i++){
  if(numbers[i] % 2 !== 1){
    continue;
  } else {
    console.log(numbers[i]);
  }
 }