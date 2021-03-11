function dinoArray() {
    var dinos = [
        { id: 1, name: "tyrannosaurus", diet: "carnivorous", weight: "7000kg", height: "12m", period: "Late Cretaceous" },
        { name: "stegosaurus", diet: "herbivorous", weight: "2000kg", height: "9m", period: "Late Jurassic", },
        { name: "velociraptor", diet: "carnivorous", weight: "15kg", height: "1.8m", period: "Late Cretaceous", }
    ]
    var arr = []
    for (i = 0; i < dinos.length; i++) {
        arr.push(dinos[i].name)
    }
    // alert(arr)
    console.log(arr)
}
/* 
Function Goal is to display all the Dino names in an array
Line 1 =  Creating a function and calling dinoArray
Line 2-6 = Creating a var called dinos setting it = an array of 3 objects
Line 7 = Creating a var called arr and setting it to an empty array
Line 8 = Start at index 0 check if less than the length of the array (3) complete the instructions below and increase by 1 stopping when the index is no longer less than 3
Line 9 = If the for loop conditions are met push the name of the dino at i or current index to the array arr
Line 11 = Creating an alert and printing arr
Line 12 = Printing to the console the arr
*/

function giveItaName() {
    // the instructions
}

// IN a JS file you invoke a function (tell it to do it's job) by calling it's name  -- You also do the same in html files if not reacting with a web page use console.log(giveItaName())

// giveItaName()

function sayHi() {
    return "Hey there"
}
sayHi()
// console.log(sayHi())


var instructors = [
    {name: "Melissa", age: "42", state: "PA"}, // name = key info after is the value
    {name: "Zaur"},
    {name: "James", age: ""},
    {name: "Josh"}
]

// console.log(instructors)
// console.log(instructors[0].name)
// console.log(instructors[0])
// console.log(instructors[0].state)
// console.log(instructors[1].age) // will show undefined
// console.log(instructors[2].age) // will show null or nothing

// Object containing 3 items 2 of which are arrays of objects

// var staff = {
//     school: "Coding Dojo",
//     instructors: [
//         {name: "Melissa", age: "42", state: "PA"}, // name = key info after is the value
//         {name: "Zaur"},
//         {name: "James", age: ""},
//         {name: "Josh"}
//     ],
//     ta: [
//         {name: "MaKenna"},
//         {name: "Aly"},
//         {name: "Aaron"}
//     ]
// }
// console.log(staff)

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
/* for j= 1 go until j is less than or eaqual to 15
if j /2 and there is no remainder j = 2 otherwise if j/3 has no remainder add 1 to j 
j=1 1/2 = 0 add 2 or if j/3 = 0 add 1 otherwise just print j


*/