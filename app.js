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
// OBJECT
var student = {
    Name: "Mirza",
    Age: 24,
    Phone: 123321
};
// ARRAY
var studentsList = [
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
    console.log("\n  Age: " + element.Age + "\n  Name: " + element.Name + "\n  ");
}
// ENUMS
var languageKnown;
(function (languageKnown) {
    languageKnown[languageKnown["JS"] = 0] = "JS";
    languageKnown[languageKnown["Java"] = 1] = "Java";
    languageKnown[languageKnown["CSharp"] = 2] = "CSharp";
    languageKnown[languageKnown["Pascal"] = 3] = "Pascal";
})(languageKnown || (languageKnown = {}));
;
