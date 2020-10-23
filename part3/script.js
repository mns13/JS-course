/**
 * Outdated way to find DOM element
 */
// var div = document.getElementById('playground');
// console.log(div);

// var cls = document.getElementsByClassName('text');
// console.log(cls);

// var tg = document.getElementsByTagName('h1');
// console.log(tg);


/**
 * Modern way to find DOM element
 */
// var div = document.querySelector('#playground');
// console.log(div);

// var p = document.querySelectorAll('.text');
// console.log(p);

// var h1 = document.querySelector('h1');
// console.log(h1);

// var ul = document.querySelector('div#playground > div > ul');
// console.log(ul);


// var div = document.querySelector('#playground');
// div.innerHTML = '<h2 style="color: red;">From Javascript</h2>'
// console.log(div.innerHTML);

// var h1 = document.querySelector('h1');
// h1.textContent = 'Changed from script.js';
// console.log(h1.textContent);

// var input = document.querySelector('input');
// console.log(input.value);


/**
 * lesson 4
 */

//  var a = document.querySelector('a');
//  var oldHref = a.getAttribute('href');

//  a.setAttribute('href', 'http://ya.ru');
//  a.textContent = 'Yandex';

//  console.log(a.getAttribute('href'));
//  console.log(oldHref);

/**
 * lesson 5
 */

//  var box1 = document.querySelector('#box1');
//  var box2 = document.querySelector('#box2');

//  box1.classList.add('red');
//  box2.classList.remove('blue');
//  var hasClass = box2.classList.contains('blue');
//  console.log(hasClass);

//  if(hasClass){
//    box2.classList.remove('blue');
//  } else {
//    box2.classList.add('blue');
//  }

/**
 * lesson 6
 */

//  var but = document.querySelector('button');
//  var h1 = document.querySelector('h1');
//  var input = document.querySelector('input');

//  but.addEventListener('click', buttonHandler);

//  function buttonHandler(){
//    h1.textContent = input.value;
//  }

// h1.addEventListener('mouseenter', function(){
//   this.style.backgroundColor = 'yellow';
//   this.style.color = 'white';
// });

// h1.addEventListener('mouseleave', function(){
//   this.style.color = 'black';
//   this.style.backgroundColor = 'transparent';
// });

/**
 * lesson 7-8
 */

//  var divs = document.querySelectorAll('div');

//  for(var i = 0; i < divs.length; i++){
//    divs[i].addEventListener('click', function(){
//     console.log(this.getAttribute('id'));
//    });
//  } // 2, 1

//  for(var i = 0; i < divs.length; i++){
//   divs[i].addEventListener('click', function(){
//    console.log(this.getAttribute('id'));
//   }, true);
// } // 1, 2

// for(var i = 0; i < divs.length; i++){
//   divs[i].addEventListener('click', function(event){
//    event.stopPropagation();
//    console.log(this.getAttribute('id'));

//   });
// } // 1 || 2

// var link = document.querySelector('a');
// link.addEventListener('click', handleLinkClick);

// function handleLinkClick(event){
//   event.preventDefault();
//   var div = divs[0];

//   div.style.display = div.style.display === 'none'
//     ? 'flex'
//     : 'none';

// }

// for(var i = 0; i < divs.length; i++){
//   divs[i].addEventListener('click', function(event){
//    event.stopPropagation();
//    console.log(this.getAttribute('id'));
//   });
// }

/**
 * lesson 9
 */

// var p = document.querySelectorAll('p');

// for(var i = 0; i < p.length; i++){
//   p[i].addEventListener('click', function(event){
//     event.target.style.color = 'blue';
//   });
// }

// document.getElementById('wrapper').addEventListener('click',function(event){
//   var tagName = event.target.tagName.toLowerCase();
//   if(tagName === 'p'){
//     event.target.style.color = 'blue';
//   }

//   if(event.target.classList.contains('color')){
//     event.target.style.color = 'red';
//   }
// });
