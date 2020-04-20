class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  addition() {
    console.log(this.num1 + this.num2);
    return this.num1 + this.num2;
  }

  deduction() {
    return this.num1 - this.num2;
  }

  multiplication() {
    return this.num1 * this.num2;
  }

  division() {
    return this.num1 / this.num2;
  }
}

// export default Calculator;
module.exports = Calculator;
