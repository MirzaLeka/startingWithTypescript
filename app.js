/*
class HelloWorld {

public static main (): void {
console.log("Hello World");
        }
  }
*/
//  HelloWorld.main();
var myName = "Mirza";
var myAge = 24;
var haveGF = false;
var whatever = 1;
var myLastName = "Leka";
whatever = "23";
// run auto-compiler: tsc *.ts --watch --target ES5
// quickly compile: tsc app.ts
// ENUMS
var languageKnown;
(function (languageKnown) {
    languageKnown[languageKnown["JS"] = 0] = "JS";
    languageKnown[languageKnown["Java"] = 1] = "Java";
    languageKnown[languageKnown["CSharp"] = 2] = "CSharp";
    languageKnown[languageKnown["Pascal"] = 3] = "Pascal";
})(languageKnown || (languageKnown = {}));
;
// OBJECT
var student1 = {
    Name: "Mirza",
    Age: 24,
    Phone: 123321,
    Language: languageKnown[languageKnown.JS]
};
// ARRAY
var listOfStudents = [
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
function getStudentList(students) {
    students.forEach(function (element) {
        console.log("\n    Age: " + element.Age + "\n    Name: " + element.Name + "\n    Languages Known: " + element.Language + "\n    ");
    });
}
getStudentList(listOfStudents);
// This is a function with standard parameter
// We can have a function with default parameter function funky () and nums 
// Anonymous function
var StudentName = function (lName, fName) {
    return fName + "...." + lName;
};
console.log(StudentName("Sam", "Fisher"));
//Arrow function
var StudentFullName = function (lName, fName) { return fName + "..." + lName; };
console.log(StudentFullName("Solid", "Snake"));
