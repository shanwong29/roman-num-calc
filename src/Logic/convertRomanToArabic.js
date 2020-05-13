const convertNumFromRomanToArabic = (givenRomanNumStr) => {
  // this fn recieve a str, return a number
  if (!givenRomanNumStr.length || !givenRomanNumStr) {
    return "";
  }

  const validRomanNumRegex = /^M{0,3}(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/g;
  if (!validRomanNumRegex.test(givenRomanNumStr)) {
    return { errorMsg: "Given Roman number is invalid" };
  }

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

  while (pointer < givenRomanNumStr.length) {
    const currentAlphabet = givenRomanNumStr[pointer];
    const nextAlphabet = givenRomanNumStr[pointer + 1];
    const isSpecialCase1 =
      currentAlphabet === "I" && (nextAlphabet === "V" || nextAlphabet === "X");
    const isSpecialCase2 =
      currentAlphabet === "X" && (nextAlphabet === "L" || nextAlphabet === "C");
    const isSpecialCase3 =
      currentAlphabet === "C" && (nextAlphabet === "D" || nextAlphabet === "M");

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
};

const convertExpFromRomanToArabic = (givenExp) => {
  //givenExp is always string
  //This function should return a str
  if (!givenExp.length) {
    return "";
  }

  const numRegex = /I|V|X|L|C|D|M/;
  let numStr = "";
  let ansArr = [];

  for (let i = 0; i < givenExp.length; i++) {
    if (numRegex.test(givenExp[i])) {
      //if it is number
      numStr += givenExp[i];

      if (i === givenExp.length - 1 && numStr.length > 0) {
        let arabicNum = convertNumFromRomanToArabic(numStr);
        if (arabicNum.errorMsg) {
          return arabicNum;
        }
        ansArr.push(arabicNum);
      }
    } else {
      //not a number
      let arabicNum = convertNumFromRomanToArabic(numStr);
      if (arabicNum.errorMsg) {
        return arabicNum;
      }
      ansArr.push(arabicNum);
      ansArr.push(givenExp[i]);
      numStr = "";
    }
  }
  return ansArr.join("");
};

export { convertNumFromRomanToArabic, convertExpFromRomanToArabic };
