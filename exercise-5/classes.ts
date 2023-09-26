//Create a class named Student in TypeScript. The class should define certain properties and methods

class Student {
    // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;
    
    // Define the constructor here
    constructor(studentName: string, studentAge: number, studentGrade: number){
        this.studentName= studentName;
        this.studentAge = studentAge;
        this.studentGrade = studentGrade;
    }
    // Define the displayInfo method here
    displayInfo():void {
        console.log(`Name: ${this.studentName}`); 
        console.log(`Age: ${this.studentAge}`);
        console.log(`Grade: ${this.studentGrade}`);
      }

    // Define the isPassing method here
    isPassing(gradeThreshold: number):boolean {
        return this.studentGrade >= gradeThreshold; 
      }
    
    }
    // Instantiate a new student object and call the methods to test your class

    const newStudent = new Student("Raina", 78, 85);
    newStudent.displayInfo();

    newStudent.isPassing(70);


