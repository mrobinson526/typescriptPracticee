let  fname: string = "Margaret";
const states: number = 50;
let results: number = 5+4;
function sayHello() {
    alert("Hello World");
}

sayHello();

   // Using function to check age
function checkAge(name: string, age: number) {
    if (age < 21) {
        alert("Sorry" + name + ", you are not old enought to view this page!");
    }
 

    checkAge("Charles", 21);
    checkAge("Abby", 27);
    checkAge("James", 18),
    checkAge("John", 17);

    // Using arrays with For Loop
    let vegetables = ["collards", "Spinach", "Broccoli", "Succotash", "Corn"];
    for (let i=0; i<vegetables.length; i++) {
        console.log(vegetables[i]);
    }
    
    var pet = {
        name: "Little C",
        breed: "Chow",
    }
    console.log(pet.name, pet.breed);
    var people=[
        {name: "Mary", age: 34},
        {name: "Susan", age: 25},
        {name: "Jared", age: 18},
        {name: "Jason", age: 17},
        {name: "Jessica", age: 15},
    ];
    for (let i=0; i<people.length; i++) {
        checkAge(people[i].name, people[i].age);
    }
    function getLength(word: string) {
        return word.length
        }
    
    let stringLength = getLength("Hello World")
    if (stringLength % 2 == 0) {
        console.log("The world is nice and even") 
    } else {
        console.log("The world is an odd place")
    }}

    
