// import Calculator from "./calculator";
const Calculator = require("./calculator");
const {
  convertFromRomanToArabic,
  convertFromArabicToRoman,
} = require("./converterService");

class RomanNumCalc extends Calculator {
  constructor(input) {
    //need to be in front of any variable assignment
    super();
    this.input = input;
  }

  validation() {
    let regex = /^([I|V|X|L|C|D|M]+)((\+|\-|\*|\/)([I|V|X|L|C|D|M]+))?$/g;
    if (regex.test(this.input)) {
      regex = /^([I|V|X|L|C|D|M]+)((\+|\-|\*|\/)([I|V|X|L|C|D|M]+))?$/g;
      let matches = regex.exec(this.input);

      this.num1 = convertFromRomanToArabic(matches[1]);
      this.num2 = convertFromRomanToArabic(matches[4]);
      this.method = matches[3];

      return true;
    } else {
      return false;
    }
  }

  calculation() {
    let ans = super.calculation();
    return convertFromArabicToRoman(ans);
  }
}

// let expression = new RomanNumCalc("MCC");
// expression.validation();
// console.log(expression.calculation());

export default RomanNumCalc;
