var items = documentByClassName('list-group-items');
console.log(items);
console.log(items[3]);
items[3].textContent = 'Hello';
items[3].style.backgroundColor = 'green';


for(var i=0;i<items.length;i++){
  items[i].style.fontWeight = 'bold';
}

//getelementbytagname

var li = documentByClassName('li');
console.log(li);
console.log(li[3]);
li[3].textContent = 'Hello';
li[3].style.backgroundColor = 'green';


for(var i=0;i<li.length;i++){
  li[i].style.fontWeight = 'bold';
}