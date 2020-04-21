class Calculator {
  constructor(num1, num2, method) {
    this.num1 = num1;
    this.num2 = num2;
    this.method = method;
  }

  addition() {
    return this.num1 + this.num2;
  }

  subtraction() {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }

  division() {
    return this.num1 / this.num2;
  }

  calculation() {
    switch (this.method) {
      case "+":
        return this.addition();

      case "-":
        return this.subtraction();

      case "*":
        return this.multiplication();

      case "/":
        return this.division();

      default:
        //no sign is found
        return this.num1;
    }
  }
}

export default Calculator;
// module.exports = Calculator;
