// import Calculator from "./calculator";
const Calculator = require("./calculator");

class RomanNumCalc extends Calculator {
  constructor(input) {
    //need to be in front of any variable assignment
    super();
    this.input = input;
  }

  calculation() {
    let regex = /^([I|V|X|L|C|D|M]+)((\+|\-|\*|\/)([I|V|X|L|C|D|M]+))?$/g;
    if (regex.test(this.input)) {
      regex = /^([I|V|X|L|C|D|M]+)((\+|\-|\*|\/)([I|V|X|L|C|D|M]+))?$/g;
      let matches = regex.exec(this.input);
      console.log(matches);

      this.num1 = this.convertion(matches[1]);
      if (matches[4]) {
        this.num2 = this.convertion(matches[4]);
      }

      let method = matches[3];

      switch (method) {
        case "+":
          return this.addition();

        case "-":
          return this.deduction();

        case "*":
          return this.multiplication();

        case "/":
          return this.division();

        default:
          return this.num1;
      }
    } else {
      return `Invalid Input`;
    }
  }

  convertion(romanNum) {
    let romanNumDict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let pointer = 0;
    let ans = 0;

    while (pointer < romanNum.length) {
      const currentAlphabet = romanNum[pointer];
      const nextAlphabet = romanNum[pointer + 1];
      const isSpecialCase1 =
        currentAlphabet === "I" &&
        (nextAlphabet === "V" || nextAlphabet === "X");
      const isSpecialCase2 =
        currentAlphabet === "X" &&
        (nextAlphabet === "L" || nextAlphabet === "C");
      const isSpecialCase3 =
        currentAlphabet === "C" &&
        (nextAlphabet === "D" || nextAlphabet === "M");

      if (isSpecialCase1 || isSpecialCase2 || isSpecialCase3) {
        const numToBeAdded =
          romanNumDict[nextAlphabet] - romanNumDict[currentAlphabet];
        ans += numToBeAdded;
        pointer += 2;
      } else {
        ans += romanNumDict[currentAlphabet];
        pointer++;
      }
    }

    return ans;
  }
}

// let expression = new RomanNumCalc("MCC");
// console.log(expression.calculation());

export default RomanNumCalc;
