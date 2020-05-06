// const Calculator = require("./calculator");
// const { convertNumFromArabicToRoman } = require("./converterService");
import Calculator from "./calculator";
// import { convertNumFromArabicToRoman } from "./converterService";

class ArabicNumCalc extends Calculator {
  constructor(input) {
    super();
    this.input = input;
    this.errorMsg = "";
  }

  validation() {
    let regex = /^(-?\d+(\.\d+)?)((\+|-|\*|\/)(-?\d+(\.\d+)?))?$/g;

    if (regex.test(this.input)) {
      regex = /^(-?\d+(\.\d+)?)((\+|-|\*|\/)(-?\d+(\.\d+)?))?$/g;
      const matches = regex.exec(this.input);

      this.num1 = Number(matches[1]);

      if (matches[5]) {
        this.num2 = Number(matches[5]);
        this.method = matches[4];
      } else {
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
