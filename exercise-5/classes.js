//Create a class named Student in TypeScript. The class should define certain properties and methods
var Student = /** @class */ (function () {
    // Define the constructor here
    function Student(studentName, studentAge, studentGrade) {
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    // Define the displayInfo method here
    Student.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.studentName));
        console.log("Age: ".concat(this.studentAge));
        console.log("Grade: ".concat(this.studentGrade));
    };
    // Define the isPassing method here
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade >= gradeThreshold;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var newStudent = new Student("Raina", 78, 85);
newStudent.displayInfo();
newStudent.isPassing(70);
