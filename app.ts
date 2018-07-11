
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

// ENUMS

enum languageKnown  {
  JS, Java, CSharp, Pascal
};


// OBJECT

let student1 = {
  Name: "Mirza",
  Age: 24,
  Phone: 123321,
  Language: languageKnown[languageKnown.JS]
}

// ARRAY

let listOfStudents = [
  {
    Name: "Ermin",
    Age: 23,
    Phone: 471961,
    Language: languageKnown[languageKnown.CSharp]
  }
];

listOfStudents.push(student1);

// FOR LOOP

/*
for (var i = 0; i < listOfStudents.length; i++) {
  var element = listOfStudents[i];
  console.log(`
  Age: ${element.Age}
  Name: ${element.Name}
  Languages Known: ${element.Language}
  `);
}
*/

// FUNCTIONS

function getStudentList(students: any[]) {
  students.forEach(element => {
    console.log(`
    Age: ${element.Age}
    Name: ${element.Name}
    Languages Known: ${element.Language}
    `);
  });
}
getStudentList(listOfStudents);

// This is a function with standard parameter
// We can have a function with default parameter function funky () and nums 

// Anonymous function
let StudentName = function (lName: string, fName: string) {
  return fName + "...." + lName;
  }
  
  console.log(StudentName("Sam", "Fisher"));
  
  //Arrow function
  let StudentFullName = (lName: string, fName: string) => fName + "..." + lName;
  
  console.log(StudentFullName("Solid", "Snake"));
  
  