import Calculator from "./calculator";

export const getArabicAns = (input) => {
  //input is a str

  let numberArr = [];
  let operatorArr = [];
  let startCuttingPt = 0;

  for (let i = 0; i < input.length; i++) {
    let operatorRegex = /\+|-|\*|\//;

    if (
      input[i] === "." &&
      operatorRegex.test(input[i + 1] || i === input.length - 1)
    ) {
      continue;
    } else if (operatorRegex.test(input[i])) {
      const number = input.slice(startCuttingPt, i);
      const operator = input.slice(i, i + 1);

      numberArr.push(Number(number));
      operatorArr.push(operator);
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
  return ans;
};
