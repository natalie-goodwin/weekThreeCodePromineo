/*Map Method used to invoke a 
function for each
element in an array and then 
create a new array from 
the returned values of each 
iteration's function 
invocation; when we need to 
transfrm the data in the 
array in some manner  */
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element) {
    return element.length;
});
console.log(lengths);

/*Reduce Method useful for taking all the
values in an array and reducing them down 
to one value; final value is the result 
of a reducer function that we pass in as 
an argument; use reduce when we need to perform an operation 
on all elements in an array that results in a 
single value*/
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
});
console.log(sum);

/*For Each Method invokes a function
for each elelment in an array, but doesn't
return a new array from the results 
of the invocation; if we only need to 
perform an action for each element 
in an array and dpn't care about storing 
the resulting value, for each works*/
names.forEach(function(element) {
  console.log(element);
});


/*Filter Method invokes a function that returns 
a boolean value of each element in an array; 
filter returns a new array that contains all 
the elements where the invoked method returns 
true; allows us to use a boolean expression 
to filter out certain methods and only keep 
the ones that pass our boolean expression */
let evens = names.filter(function(element) {
   return element.length % 2 == 0;
}); 
console.log(evens);


/*Splice Method used to alter the contents of an 
array by adding, moving, or removing elelments 
from an array at a specific location*/
let removedElement = names.splice(1, 1);
console.log(removedElement);