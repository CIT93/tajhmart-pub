const cfpData = [];

function determineHouseSizePts(size) { 
  let houseSizePoints = 0;
  if (size === "large") {
  houseSizePoints = 10;
} else if (size === "medium") {
  houseSizePoints = 7;
} else if (size === "small") {
  houseSizePoints = 4;
} else if (size === "apt") {
  houseSizePoints = 2;
}
console.log (
  'Based on the size ' + size + ' the points would be ' + houseSizePoints
  )
return houseSizePoints
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  
    return houseHoldPoints
  }


  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total ] )
    console.log(cfpData);

    console.log('total carbon footprint score so far ' + total)
  }

// does it make sense to have all of this in one array?
// it doesnt look like it makes sense to me

//const myInputs = [5, "apts"];  // on the global scope


 // before the return you would put the console.log

 /// Arrays

 // how do I modify the start parameters to use the array that is the argument?
 // no idea 

 //do you understand passing arrays into functions?
 // yes

 
function displayOutput() {
  for (arr of cfpData) {
    console.log(arr)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
    newP.textContent += ` and a ${arr[1]} size home (score:${arr[3]}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP)
  }
}

start(1, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(5, "large");
start(6, "medium");

displayOutput();