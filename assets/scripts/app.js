// const message = document.getElementById('message');
// console.log(message);
// const inputs = document.getElementsByName('language');
// console.log(inputs);
// const headings = document.getElementsByTagName('h1');
// console.log(headings);
// const headings = document.getElementsByClassName('message');
// console.log(headings);
// const container = document.getElementById('container');
// const headings = container.getElementsByClassName('message');
// console.log(headings);

// const message = document.querySelector('.message');
// console.log(message);
// const message = document.querySelectorAll('.message');
// console.log(message);
// const container = document.getElementById('container');
// const message = container.querySelectorAll('.message');
// const message = document.querySelectorAll('h1');
// const message = document.querySelectorAll('div, h1');
// console.log(message);

//?  Traversing Elements
// const text = document.querySelector('.text');
// console.log(text.parentNode);

//? Getting ChildNodes,Children,FirstChild, LastChild, FirstElementChild, LastElementChild
// const welcome = document.querySelector('.welcome');
// console.log(welcome.firstChild);
// console.log(welcome.firstElementChild);
// console.log(welcome.lastChild);
// console.log(welcome.lastElementChild);
// console.log(welcome.childNodes);
// console.log(welcome.childElementCount);
// console.log(welcome.children);

// ? Getting previousElementSibling and nextElementSibling
// const second = document.querySelector('#second');
// console.log(second.previousElementSibling);
// console.log(second.nextElementSibling);
// const welcome = document.querySelector('.welcome');
// console.log(welcome.firstElementChild.nextElementSibling); // second p tag will be selected
// console.log(welcome.lastElementChild.previousElementSibling); //third p tag will be selected

// ? createElement() method
// const pTag = document.createElement('p');
// pTag.innerHTML =
//   '<a href = "https://www.github.com/NikhilKukreja26" target = "_blank">Nikhil Kukreja</a>';
// document.body.append(pTag);

// // ? Adding Element using appendChild() or append() method
// const ul = document.querySelector('.menu');
// const listItem = document.createElement('li');
// listItem.textContent = 'Contact';
// ul.appendChild(listItem);

// ? textContent property
const ul = document.querySelector('.menu');
// ul.textContent = 'Hello';
ul.innerHTML = '<h1>Welcome to JavaScript</h1>';
