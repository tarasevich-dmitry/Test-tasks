//a function that receives n arguments and returns the sum of all of them.
//loop implementation
function sum(){
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
//#2
function sum() {
    return Array.prototype.reduce.call(arguments, function(a, b) {
        return a + b;
    }, 0);
}
