const makingSenseMap = {
  3: "Making",
  5: "Sense"
};

const taDaMap = {
  3: "Ta",
  5: "Da"
};

function numberLogLoop(numberMapping, startNum = 1, endNum = 100) {
  for (let currentNum = startNum; currentNum <= endNum; currentNum++) {
    let returnString = "";
    for (numberKey in numberMapping) {
      if (currentNum % numberKey === 0) {
        returnString +=
          returnString.length > 0 ? ` ${numberMapping[numberKey]}` : numberMapping[numberKey];
      }
    }
    console.log(returnString || currentNum);
  }
}

numberLogLoop(makingSenseMap);
numberLogLoop(taDaMap);