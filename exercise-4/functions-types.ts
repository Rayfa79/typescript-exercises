//Write a function greet that takes in a name (string) and returns a greeting (string).


const greet = (name: string): string => {
   return 'Welcome ${name}'
}

//function greet(name: string): string {
    //return `Welcome ${name}`
//}

const greeting = greet("Raina");
console.log(greeting)