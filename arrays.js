/*Customer Relationship Management System (CRM):
Sometimes you need a variable for each customer 
that needs to be scaled and manageable;
Arrays are a datatype that allow us to group 
similar variables together 
and refer to the values by location.
The index or location of each element within an array 
is zero-based; the first value or 
element in the array is located at position zero 
and the last value will always be located 
at the index just one less than the length of 
the array, or the number of elements in the array

a  0
b  1
c  2
d  3
e  4
f  5    length of the array 
is 6 but it's zero-based indexing 
so a is at position 0 and f is at a 
position one less than the lenth of 
the index (6-1 = 5) */

let customerNames = [];
customerNames.push("Sam Smith");
customerNames.push("Tommy Guns");

for (let i = 0; i < customerNames.length; i++) {
    console.log(customerNames[i])
}
/*console.log(customerNames[0]);
console.log(customerNames[1]);*/

for(name of customerNames) {
console.log(name);
}
