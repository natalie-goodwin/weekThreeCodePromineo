/*An object is a structure that logically 
groups data and functionality together*/

/*Object literals make up an object's 
property and functionality or methods by wrapping 
a  comma-separated list of key-value pairs inside 
curly braces*/

let dvdPlayer = {
  height: 3,
  width: 18,
  depth: 12,
  weight: 7,
  color: 'black', /*key value pairs*/
  dvdName: 'Mulan',
  printDVDName: function() {
       console.log(this.dvdName);
  }
};console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

/* a function is a stand-alone piece of 
functionality, and a method is a function 
that belongs to an object*/
