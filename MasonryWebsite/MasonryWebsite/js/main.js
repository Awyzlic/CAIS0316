// Learning js
console.log(name);

////console.log(interestRate);

//let name = 'Andrew'; //string literal
//let age = 30; //number literal
//let isApproved = false; //Boolean literal
//let firstName = undefined;
//let selectedColor = null;

let person = {
  name: 'Andrew',
  age: '30'
}

// dot notation preferred
person.name = 'John';

//braket notation  selected at runtime
let selection = 'name';
person['selection'] = 'Mary';

console.log(person.name)


//array = object
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);

//function
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}


greet('John', 'Smith');
greet('Mary', 'Beth');

function square(number) {
  return number * number;
}

console.log(square(2))
