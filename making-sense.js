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
      returnString += numberMapping[5];
    }
    console.log(returnString || currentNum);
  }
}

numberLogLoop();
