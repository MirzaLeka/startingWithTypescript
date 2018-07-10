
/*
class HelloWorld {

public static main (): void {
console.log("Hello World");
        }
  }
*/

//  HelloWorld.main();


var myName : string = "Mirza";
var myAge : number = 24;
var haveGF : boolean = false;
var whatever : any = 1;
var myLastName = "Leka";
whatever = "23"; 

// run auto-compiler: tsc *.ts --watch --target ES5

// quickly compile: tsc app.ts

// OBJECT

let student = {
  Name: "Mirza",
  Age: 24,
  Phone: 123321
}

// ARRAY

let studentsList = [
  {
    Name: "Ermin",
    Age: 23,
    Phone: 471961
  }
];

studentsList.push(student);

// FOR LOOP

for (var i = 0; i < studentsList.length; i++) {
  var element = studentsList[i];
  console.log(`
  Age: ${element.Age}
  Name: ${element.Name}
  `);
}


// ENUMS

enum languageKnown  {
  JS, Java, CSharp, Pascal
};
