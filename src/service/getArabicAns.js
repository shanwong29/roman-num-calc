import Calculator from "./calculator";

export const isOperator = (char) => {
  if (
    char === "+" ||
    char === "-" ||
    char === "\u00D7" || // "*"
    char === "\u00F7" //"/"
  ) {
    return true;
  }
  return false;
};

const operatorModifier = (operatorSign) => {
  switch (operatorSign) {
    case "\u00D7":
      return "*";
    case "\u00F7":
      return "/";
    default:
      return operatorSign;
  }
};

export const getArabicAns = (input) => {
  //input is a str

  let numberArr = [];
  let operatorArr = [];
  let startCuttingPt = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "." && i === input.length - 1) {
      // when dot is at the end: e.g. 9+9.
      const number = input.slice(startCuttingPt, i);
      numberArr.push(Number(number));
    } else if (isOperator(input[i])) {
      const number = input.slice(startCuttingPt, i);
      const operator = input.slice(i, i + 1);

      numberArr.push(Number(number));
      operatorArr.push(operatorModifier(operator));
      startCuttingPt = i + 1;
    } else if (i === input.length - 1) {
      const number = input.slice(startCuttingPt);
      numberArr.push(Number(number));
    }
  }

  let ans = numberArr[0];

  for (let i = 1; i < numberArr.length; i++) {
    ans = new Calculator(ans, numberArr[i], operatorArr[i - 1]);
    ans = ans.calculation();
  }

  if (!ans && ans !== 0) {
    return {
      errorMsg: `Invalid Input`,
    };
  }

  ans = ans.toFixed(7);
  return Number(ans);
};
