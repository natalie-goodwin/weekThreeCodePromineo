/*Functions allow us to write code 
and give it a name so we can reuse 
it any time we need to*/

function myFunction () { /*will print 0-99*/
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }     /* curly braces make up the function body, and this code inside will be executed any time we use this function*/
}

myFunction();

/* lines 5-9 are considered the rules, but line 11 
calls (invokes) a function;
otherwise the function won't run*/

function createFullName(firstName, lastName) {
     console.log(firstName + " " + lastName);
}

createFullName("Tom", "Sawyer");

/* Parameters define a function 
that takes input and go inside the parentheses 
of a function declaration don't use more than 
three parameters

Arguments: parameters are like parking spots
and arguments are like cars - the cars go 
into the parking spot; a parameter is part of the 
declaration of the function, and an argument 
is used when invoking the function */

/*Give descriptive names that 
tell what the function is doing; 
they should be verbs because functions 
are actions*/