// const Calculator = require("./calculator");
// const { convertFromArabicToRoman } = require("./converterService");
import Calculator from "./calculator";
// import { convertFromArabicToRoman } from "./converterService";

class ArabicNumCalc extends Calculator {
  constructor(input) {
    super();
    this.input = input;
    this.errorMsg = "";
  }

  validation() {
    let regex = /^(\d+)((\+|-|\*|\/)(\d+))?$/g;

    if (regex.test(this.input)) {
      regex = /^(\d+)((\+|-|\*|\/)(\d+))?$/g;
      const matches = regex.exec(this.input);

      this.num1 = Number(matches[1]);
      this.num2 = Number(matches[4]);
      this.method = matches[3];

      return true;
    } else {
      return false;
    }
  }

  calculation() {
    if (this.validation()) {
      const ans = super.calculation();
      return ans;
    }

    this.errorMsg = "Invalid Input";
    return { errorMsg: this.errorMsg };
  }
}

// let testing1 = new ArabicNumCalc(`777+777`);
// testing1.validation();

export default ArabicNumCalc;
