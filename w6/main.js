const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) { 
  let houseSizePoints = 0;
  if (size === "large") {
  houseSizePoints = 10;
} else if (size === "medium") {
  houseSizePoints = 7;
} else if (size === "small") {
  houseSizePoints = 4;
} else if (size === "apartment") {
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


  function start(firstname, lastname, houseHoldMembers, houseSze) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSze);
    const total = houseHoldPTS + houseSizePTS;

    cfpData.push({
      firstN: firstname,
      lastN: lastname,
      houseM: houseHoldMembers,
      houseS: houseSze,
      houseHPTS: houseHoldPTS,
      houseSzePTS: houseSizePTS,
      cfpTotal: total,
    });
 }


function displayOutput() {

  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    const newH3 = document.createElement("h3");
    const newLine = document.createElement("p");
       
    newH3.textContent = `${obj.firstN} ${obj.lastN} ,with a household of ${obj.houseM} people, (score: ${obj.houseHPTS}),`;
    newP.textContent += ` and a "${obj.houseS}" size home (score is:${obj.houseSzePTS}).`;
    newH2.textContent = `Your Carbon Footprint is ${obj.cfpTotal}`;
    newLine.textContent = `------------------------------------------------------------------`;
  
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newLine);
  
  }
}

FORM.addEventListener('submit', function(e){
  e.preventDefault();
 
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housem.value);
  const houseSze = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSze);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});

// is the apartment score correct? if not why not?
// We have the min in the html at 1 instead of 0

// why are we doing all this work in the form to make sure the user gives us good data
// users are special and theyll type all kinds of madness, so you have to tell them what to type

// did not work for me at first
  
//callback function
//explain in your own words what is happening in the event listener
//-- the even listener is taking what is being typed in the areas
// and allowing the submit to do its thing once it gathers all the info

//is pulling the displayOUtput inside the even listeners a good idea?
//  --- I believe so because its withing the listener, so once it did its bounce
// around it should come back and output the info

//mine did not give me duplicates...

// Intro to Forms - simple form validation


