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
return houseSizePoints;
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
  
    return houseHoldPoints;
  }

  function displayOutObj(obj){
 //   console.log(obj)
    const output = document.getElementById("output");
    const newH3 = document.createElement("h3");
    newH3.textContent = `House Hold Members: ${obj.houseMem} /
          Your household points are: ${obj.houseHPTS} /
          Your household size is: ${obj.houseSze} /
          Your Carbon Footprint is = ${obj.cfpTotal}`;
    output.appendChild(newH3);
  }

  function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;

    cfpData.push( {
      houseMem: houseHoldMembers,
      houseSze: houseSize,
      houseHPTS: houseHoldPTS,
      houseSzePTS: houseSizePTS,
      cfpTotal: total});
 }

//displayOutObj(cfpObj);

function displayOutput() {
  for (obj of cfpData) {
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    const newH3 = document.createElement("h3");
  
     
    newH3.textContent = `Members of household of ${obj.houseMem} (score: ${obj.houseHPTS}),`;
    newP.textContent += ` and a "${obj.houseSze}" size home (score is:${obj.cfpTotal}).`;
    newH2.textContent = `Your Carbon Footprint is ${obj.cfpTotal}`;
  
   
    output.appendChild(newH3);
    output.appendChild(newP);
    output.appendChild(newH2);
  
  }
}

//function displayOutput() {
//   for (let i = 0; i < cfpData.length; i++) {
//      console.log(i)
//      const output = document.getElementById("output");
//      const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//     const newH3 = document.createElement("h3");
//     newH3.textContent = `Based on number in and size of home`;
//     const newP = document.createElement("p");
//     newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`;
//    newP.textContent += ` and a ${arr[1]} size home (score:${arr[3]}).`;
//      output.appendChild(newH2);
//     output.appendChild(newH3);
//     output.appendChild(newP)
      
start(1, "large");
start(2, "medium");
start(3, "small");
start(4, "apt");
start(5, "large");
start(6, "medium");
  
displayOutput();
//console.log(cfpData);

// Intro to Object

// const myArr = [];
// const myObj = {
//   cfpTotal: 18,
//   houseSize: "small",
//   displayOutput: function(){
//       console.log("this is a method call");
//       console.log(this.houseSize);
//   }
// };
//console.log(myObj.cfpTotal);
//console.log(myObj["houseSize"]);
//myObj.displayOutput();


// for (initialization; conditionl afterthought)
// statement 

/*
for (let i = 0; i < 5; i++ ) {
    //block scope
    console.log(i);
}

// how to modify code to count 1 - 15

for (let i = 1; i <= 15; i++ ) {
    console.log(i);
}

// count backwards?
for (let i = 6; i > 0; i-- ) {
    console.log(i);
}
*/

// standard for loop

// refactor for of loop above into standard loop