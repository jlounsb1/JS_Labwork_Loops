let everything = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

//the goal is to take the above string and make it into a table which will display in console.
//when you get to a , make a new cell. when you get to a \n make a new row

let allTheThings ="Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";


let everythingArray = everything.split('\n');

console.log(everythingArray);

//doing this by using built in methods and arrays
for(let i=0; i<everythingArray.length; i++) {
    console.log(everythingArray[i])
}

/*

This is able to grab the first word, but I could not send it to variables without manually making up to 20 cells.
I wanted to make a loop to assign variables but I couldn't get the variables to assing in the scope of the loop.
*/
let cell1 = '';

for(let i =0; i<allTheThings.length; i++) {
    if (allTheThings[i]!=',') {
        cell1=cell1+allTheThings[i];
        } else break;

} console.log(cell1)

