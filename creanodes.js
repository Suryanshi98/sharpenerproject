var itemsList =document.querySelector('#items');

//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgrundcolor = '#f4f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);


//parentElement
console.log(itemsList.parentElement);
itemList.parentElement.style.backgrundcolor = '#f4f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
console.log(itemsList.childNodes);

console.log(itemsList.children);
console.log(itemsList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstChild
console.log(itemList.firstChild);
//firstElkementChild
console.log(itemList.firstelementChild);
itemList.firstElementChild.textContent = 'hello 1';
 

//lastChild
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello4';


//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//prevSibling
console.log(itemlist.previousSibling);
//prevElementSibling
console.log(itemList.previousElementSibling);
itemlist.previousElemntSibling.style.color = 'green';

//createElement

//create a Div
var newDiv =document.createElement('div');
//addClass
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//Add attr
newDiv.setAttribute('title', 'Hello Div');
//Create next Node
varnewDivText = document.createNextnode9('HELLO WORLD');

//Add text to Div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '40px';
container.insertBefore(newDiv, h1);



