const convertFromRomanToArabic = (givenNum) => {
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

  while (pointer < givenNum.length) {
    const currentAlphabet = givenNum[pointer];
    const nextAlphabet = givenNum[pointer + 1];
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

const convertFromArabicToRoman = (givenNum) => {
  if (givenNum <= 0 || givenNum > 3999) {
    return `Roman number can only in the following range: 0 <= n < 3999`;
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

export { convertFromRomanToArabic, convertFromArabicToRoman };
