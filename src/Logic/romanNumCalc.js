// const Calculator = require("./calculator");
import Calculator from "./calculator";

const {
  convertNumFromRomanToArabic,
  convertNumFromArabicToRoman,
} = require("./converterService");

class RomanNumCalc extends Calculator {
  constructor(input) {
    //need to be in front of any variable assignment
    super();
    this.input = input;
    this.errorMsg = "";
  }

  validation() {
    let regexRomanExp = /^(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})((\+|-|\*|\/)(?=[MDCLXVI])M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}))?$/g;
    if (regexRomanExp.test(this.input)) {
      let regexOperator = /\+|-|\*|\//;
      let matches = regexOperator.exec(this.input);

      if (matches) {
        this.method = matches[0];
        let numArr = this.input.split(this.method);
        this.num1 = convertNumFromRomanToArabic(numArr[0]);
        this.num2 = convertNumFromRomanToArabic(numArr[1]);
      } else {
        this.num1 = convertNumFromRomanToArabic(this.input);
        this.num2 = null;
        this.method = null;
      }

      return true;
    } else {
      return false;
    }
  }

  calculation() {
    if (this.validation()) {
      const arabicAns = super.calculation();
      const ans = convertNumFromArabicToRoman(arabicAns);
      if (ans.errorMsg) {
        this.errorMsg = ans.errorMsg;
        return { errorMsg: this.errorMsg };
      } else {
        return ans;
      }
    }

    this.errorMsg = "Invalid Input";
    return { errorMsg: this.errorMsg };
  }
}

// let expression = new RomanNumCalc("MCC");
// expression.validation();
// console.log(expression.calculation());

export default RomanNumCalc;
