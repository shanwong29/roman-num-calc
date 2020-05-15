import { isOperator } from "./getArabicAns";

const convertNumFromArabicToRoman = (givenNum) => {
  //givenNum is always a numberized value
  //This function should return a str
  if (!givenNum && givenNum !== 0) {
    return "";
  }

  if (!Number.isInteger(givenNum)) {
    return { errorMsg: "Roman number can only be integer" };
  }

  if (givenNum <= 0 || givenNum > 3999) {
    return {
      errorMsg: `Roman number can only in the following range: 0 < n < 3999`,
    };
  }

  let givenNumStr = givenNum.toString();

  const romanNumDict = {
    "1": "I",
    "5": "V",
    "10": "X",
    "50": "L",
    "100": "C",
    "500": "D",
    "1000": "M",
  };

  let pointer = givenNumStr.length - 1;
  let counter = 1;
  let ans = "";

  while (pointer >= 0) {
    const currentDigit = givenNumStr[pointer];

    let romanCharToBeAdded;
    if (currentDigit === "4") {
      romanCharToBeAdded =
        romanNumDict[counter * 1] + romanNumDict[counter * 5];
    } else if (currentDigit === "9") {
      romanCharToBeAdded =
        romanNumDict[counter * 1] + romanNumDict[counter * 10];
    } else if (currentDigit >= 5) {
      romanCharToBeAdded =
        romanNumDict[counter * 5] +
        romanNumDict[counter * 1].repeat(currentDigit - 5);
    } else {
      romanCharToBeAdded = romanNumDict[counter * 1].repeat(currentDigit);
    }
    ans = romanCharToBeAdded + ans;

    pointer--;
    counter *= 10;
  }

  return ans;
};

const convertExpFromArabicToRoman = (givenExp) => {
  let expArr = [];
  let numStr = "";

  for (let i = 0; i < givenExp.length; i++) {
    if (!isOperator(givenExp[i]) || givenExp[i] === ".") {
      numStr += givenExp[i];
    } else {
      if (numStr.length > 0) {
        expArr.push(Number(numStr));
        numStr = "";
      }
      expArr.push(givenExp[i]);
    }
    if (i === givenExp.length - 1 && numStr.length > 0) {
      expArr.push(Number(numStr));
    }
  }

  for (let i = 0; i < expArr.length; i++) {
    if (!isOperator(expArr[i])) {
      expArr[i] = convertNumFromArabicToRoman(expArr[i]);
      if (expArr[i].errorMsg) {
        return {
          errorMsg: expArr[i].errorMsg,
        };
      }
    }
  }
  return expArr.join("");
};

export { convertNumFromArabicToRoman, convertExpFromArabicToRoman };
