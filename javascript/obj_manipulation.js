/*Using the following object, write the instruction that removes the value 'black' from it and removes the attribute
'model'. */

var obj = {
  make: ‘Mazda’,
  model: ‘Mazda 3’,
  plates: ‘456HJK’,
  color: ‘black’
} 

obj.color = undefined;
delete obj.model;

console.log(obj);

