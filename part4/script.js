/**
 * Lesson 2
 */

//  document.getElementById('alert').addEventListener('click', function(){
//    alert('Hello')
//  })

//  document.getElementById('confirm').addEventListener('click', function(){
//   var deciesion = confirm('Are you sure?')
//   if(deciesion) {
//     alert('Nice')
//   }
// })

// document.getElementById('prompt').addEventListener('click', function(){
//   var age = prompt('Enter your age', '18')
//   if(age >= 18) {
//     alert('Access Allowed')
//   } else {
//     alert('Access Denied')
//   }
// })

// console.warn('Console.warn')
// console.info('Console.info')
// console.error('Console.error')


/**
 * Lesson 3
 */

//  var str = '1,2,3,4,5,6,7,8'

//  var array =  str.split(',')

//  console.log(array)
//  console.log(array.join(';'))
//  console.log(array.reverse())

//  array.splice(1, 0, '2.2', '3.3')
//  console.log(array)

// var newArray = array.concat(1, 2)

// console.log(newArray)

// var objArr = [
//   {name: 'Max', age: 27},
//   {name: 'Jack', age: 23},
//   {name: 'William', age: 34},
//   {name: 'Hellen', age: 13},
//   {name: 'Jacob', age: 74},
// ]

// var foundPerson = objArr.find(function(person){
//   return person.age === 34
// })

// console.log(foundPerson)

// var oddArray = [1,2,3,4,5,6,7,8,9].filter(function(i){
//   return i%2 !== 0
// })

// console.log(oddArray)

// var numArray = array.map(function(i){
//   return parseInt(i)
// })
// console.log(numArray)


/**
 * Lesson 4
 */

// var num = 2.4

//  console.log(Math.random())
//  console.log(Math.floor(num))
//  console.log(Math.ceil(num))


/**
 * Lesson 5
 */

//  var person = {
//    name: 'Max',
//    age: 25,
//    job: 'Frontend',
//    friends: ['Jacob', 'Miles'],
//    car: {
//      model: 'Ford'
//    }
//  }

//  var str = JSON.stringify(person)
//  console.log(str)
//  console.log(JSON.parse(str))


/**
 * Lesson 6
 */

// var date = new Date()

// console.log(date)
// console.log(date.getSeconds())
// console.log(date.getDate())
// console.log(date.getMonth())
// console.log(date.getTime())

// console.log(date.setDate(19))
// console.log(date.getDate())


/**
 * Lesson 7
 */

//  document.querySelector('button').addEventListener('click', function(){
//   var value = document.querySelector('input').value
//   localStorage.setItem('headerText', value)
//  })

//  document.addEventListener('DOMContentLoaded', function(){
//   var text = localStorage.getItem('headerText')
//   if(text && text.trim()){
//     document.querySelector('h1').textContent = text
//   }
//  })

 document.querySelector('button').addEventListener('click', function(){
  var value = document.querySelector('input').value
  var obj = {
    text: value
  }
  localStorage.setItem('headerText', JSON.stringify(obj))
 })

 document.addEventListener('DOMContentLoaded', function(){
   var obj = {}
   
   try{
    var obj = JSON.parse(localStorage.getItem('headerText'))
   } catch(e){
    obj = {}
   }

    if(obj && obj.text && obj.text.trim()){
      document.querySelector('h1').textContent = obj.text
    }
 })