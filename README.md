# Unhandled Operator Bug in JavaScript Calculator

This repository demonstrates a common error in JavaScript: failing to handle all possible cases in a switch statement. The `operate` function handles basic arithmetic operations (+, -, *, /), but it does not gracefully handle other operators (like the modulo operator %).  This can lead to unexpected errors.

## Bug Description

The `operate` function uses a `switch` statement to perform calculations. However, it lacks a `default` case to handle unsupported operators. When an unsupported operator is used, the function throws an error.

## Solution

The solution involves adding a `default` case to the `switch` statement to handle any operators not explicitly listed. This default case can either log an error message, return a default value, or throw a more informative exception.

## How to reproduce

1. Clone the repository.
2. Run `bug.js`. Note the error when trying an unsupported operator.
3. Run `bugSolution.js` and observe the improved error handling.