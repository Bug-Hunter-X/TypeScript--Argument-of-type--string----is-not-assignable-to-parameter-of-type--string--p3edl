function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Correct usage with array

let userName = "John Doe";
console.log(greeter(userName)); // Correct usage with single string