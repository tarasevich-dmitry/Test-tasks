/*Write a small algorithm in javascript that returns the following object. (Must be automatic)
{
key1:1,
key2:2,
key3:3,
key4:4
}
*/

var obj1 = {
  key1: 1,
  key2: 2,
  key3: 3,
  key4: 4
};

//#1
for (var key in obj1) {
  string1 += ' '+ object1[key1];
}

//#2
for (const key in obj) {
  console.log(`obj.${key} = ${obj[key]}`);
}

//#3
console.log(Object.values(obj1)); 
