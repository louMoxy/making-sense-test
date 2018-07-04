const numberMapping = {
  3: "Making",
  5: "Sense"
};

function numberLogLoop(startNum = 1, endNum = 100) {
  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    let returnString = "";
    if (!(currentNum % 3)) {
      returnString += numberMapping[3];
    }
    if (!(currentNum % 5)) {
      returnString += returnString.length > 0 ? ` ${numberMapping[5]}` : numberMapping[5];
    }
    console.log(returnString || currentNum);
  }
}

// numberLogLoop();

function numberRecursion(currentNum = 1, max = 100) {
  let returnString = "";
  if (!(currentNum % 3)) {
    returnString += numberMapping[3];
  }
  if (!(currentNum % 5)) {
    returnString += returnString.length > 0 ? ` ${numberMapping[5]}` : numberMapping[5];
  }
  console.log(returnString || currentNum);
  if (currentNum < max) {
    numberRecursion(++currentNum, max);
  }
}

numberRecursion();
