function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Invalid operator'; // Improved error handling
  }
}

console.log(operate('+', 5, 3)); // Output: 8
console.log(operate('-', 5, 3)); // Output: 2
console.log(operate('*', 5, 3)); // Output: 15
console.log(operate('/', 5, 3)); // Output: 1.6666666666666667
console.log(operate('/', 5, 0)); // Throws an error
console.log(operate('%', 5, 3)); // Output: Invalid operator