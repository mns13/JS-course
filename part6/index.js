// function Car(name, year){

//   this.name = name
//   this.year = year

// }

// Car.prototype.getAge = function(){
//   return new Date().getFullYear() - this.year
// }


// Car.prototype.color = 'black'
// var ford = new Car('ford', 2015)
// var bmw = new Car('bmw', 2018)

// console.log(ford.getAge())
// console.log(bmw.getAge())

// ford.color = 'red'
// console.log(bmw.color)
// console.log(ford.color)

/**
 * lesson 3
 */

//  var ford = Object.create({
//    calculateDistancePerYear: function(){
//     Object.defineProperty(this, 'distancePerYear', {
//       value: Math.ceil(this.distance / this.age),
//       enumerable: false,
//       writable: false,
//       configurable: false
//     })
//    }
//  }, {
//    name: {
//     value: 'Ford',
//     enumerable: true,
//     writable: false,
//     configurable: false},
//    model: {
//      value: 'Focus',
//      enumerable: true,
//      writable: false,
//      configurable: false},
//    year: {
//      value: 2015,
//      enumerable: true,
//      writable: false,
//      configurable: false},
//    distance: {
//      value: 120500,
//      enumerable: true,
//      writable: true,
//      configurable: false},
//    age: {
//      enumerable: true,
//      get: function(){
//        console.log('Get Age')
//        return new Date().getFullYear() - this.year

//      },
//      set: function(){
//       console.log('Set Age')
//      }
//    }
//  })

//  console.log(ford.calculateDistancePerYear())
//  console.log(ford)

//  for(var key in ford){
//    if(ford.hasOwnProperty(key)){
//     console.log(key, ford[key])
//    }
//  }


/**
 * lesson 4
 */

//  var person = {
//    name: 'Max',
//    age: 28,
//    job: 'Frontend'
//  }

//  for(var key in person){
//    if(person.hasOwnProperty(key)) console.log(person[key])
//  }

// var keys = Object.keys(person).forEach(function(key){
//   console.log(person[key])
// })


/**
 * lesson 5
 */

//  var createCounter = function(counterName){
//   var counter = 0
//   return function(){
//     console.log(counterName, ++counter)
//   }
//  }

//  var createCounter = function(counterName){
//   var counter = 0
//   return {
//     increment: function(){
//       counter++
//     },
//     decriment: function(){
//       counter--
//     },
//     getCounter: function(){
//       return counter
//     }
//   }
//  }

//  var counterA = createCounter('Hello From Counter A')
//  var counterB = createCounter('Hello From Counter B')
 
//  counterA.increment()
//  counterA.increment()
//  counterA.increment()

//  counterB.decriment()
//  counterB.decriment()

/**
 * lesson 6
 */

//  var person = {
//    name: 'Max',
//    age: 28,
//    job: 'Frontend',
//    displayInfo: function(ms){
//     var self = this

//      setTimeout(function(){
//       console.log('Name: ', self.name)
//       console.log('Job: ', self.job)
//       console.log('Age: ', self.age)
//      }, ms)
//    }
//  }

// var person = {
//   name: 'Max',
//   age: 28,
//   job: 'Frontend',
//   displayInfo: function(ms){

//     setTimeout(function(){
//      console.log('Name: ', this.name)
//      console.log('Job: ', this.job)
//      console.log('Age: ', this.age)
//     }.bind(this), ms)
//   }
// }

//  person.displayInfo(3000)


/**
 * lesson 7
 */

//  function printObject(objName){
//    console.log('Printing object: '+ objName)
//   for(var key in this){
//     if(this.hasOwnProperty) console.log('[' + key + ']', this[key])
//   }
//  }

//  var person = {
//    firstName: 'Max',
//    job: 28,
//    friends: ['Jack', 'Michel']
//  }

//  var car = {
//   name: 'Ford',
//   year: 2008,
//   model: 'Focus'
//  }

//  var printPerson = printObject.bind(person)

//  printPerson('person')

//  printObject.call(car, 'Car')

// printObject.apply(person,['Person'])


/**
 * lesson 8
 */

// console.log(typeof(1))
 var array = [1,2,3,4,'hello']

  function doubleArray(array){
    for(var i in array){
      if(typeof(array[i]) === 'number'){
        array[i] = array[i] * array[i]
        console.log(array[i])
      }
      
      if(typeof(array[i]) === 'string'){
        array[i] = array[i] + array[i]
        console.log(array[i])
      }
    }
  }

// doubleArray(array)

var a = [1,2,3]
var b = [5, 'Hello', 6]

Array.prototype.double = function(){
  var newArray = this.map(function(item){
    if(typeof(item) === 'number'){
      item = Math.pow(item, 2)
      // item *= item
    }
    if(typeof(item) === 'string'){
      item += item
    }
    return item
  })

  return newArray
}

var newA = a.double()
var newB = b.double()


console.log('A', newA)
console.log('B', newB)