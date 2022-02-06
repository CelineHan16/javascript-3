// OBJECTS

var studentFirstName = "Bakyt";
var studentLastName = "Utanov";
var studentAge = 20;
var studentOccupied = false;

var student = {
  firstName: "Bakyt",
  lastName: "Utanov",
  age: 20,
  occupied: false,
  sayHello: function () {
    console.log("Hello, my name is " + this.firstName + " and I'm " + this.age + " years old!");
  }
};

// student.sayHello();
// output
// console.log(studentFirstName);
// console.log(student.firstName + " " + student.lastName);
// console.log(student.age);

var dog = {
  name: "Kumaiyk",
  age: 2,
};

// update
dog.age = 3;
// console.log(dog.age);

// add
dog.color = "gray";
// console.log(dog.color);

// delete 
// delete dog.color


// Methods
// alert("Hello"); //function
// console.log("hello"); // console - object, log - method
dog.bark = function () {
  console.log("woof, woof, woof");
}

// dog.bark();
// dog.bark();

// student.sayHello();

student.firstName = "Aijan";
student.age = 19;
student.sayHello();

// ARRAYs 

var shoppingList1 = "Apple";
var shoppingList2 = "Pear";

//more
var shoppingList = ["Apple", "Pear", "Pineapple", "Cherry", "Tomato", "Potato", "Salt"];

// output
// console.log(shoppingList[0]);
// console.log(shoppingList[1]);

// update
shoppingList[2] = "Tomato";
// console.log(shoppingList[2]);

// add to the end
shoppingList.push("Cherry");
// console.log(shoppingList);

// add to the beginning 
shoppingList.unshift("Salt");
// console.log(shoppingList);

// delete
// remove from the end
shoppingList.pop();

// remove from the start
shoppingList.shift();

// show thw list lenth
// console.log(shoppingList.length);
document.write("<ul>");
for (let i = 0; i < shoppingList.length; i++) {
  document.write("<li>" + shoppingList[i] + "</li>");
}
document.write("</ul>");


// Built in properties and methods of Strings and Numbers
var numberExample1 = 3.14159265359;
// console.log(numberExample1.toFixed(2));

var stringExample1 = "Hello World!";
// console.log(stringExample1.length);
 
// console.log(stringExample1.includes("World"));
// console.log(stringExample1.toUpperCase());














