  var items = documentByClassName('list-group-items');
  console.log(items);
  console.log(items[3]);
  items[3].textContent = 'Hello';
  items[3].style.backgroundColor = 'green';


  for(var i=0;i<items.length;i++){
    items[i].style.fontWeight = 'bold';
  }