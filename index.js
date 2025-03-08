// index.js

// Function to return the first two drivers
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2); // Corrected 'Slice' to 'slice'
}

// Function to return the last two drivers
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2); // Corrected 'Slice' to 'slice'
}

// Array holding the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier; // Corrected reference to 'fare'
  };
}

// Function to double the fare
function fareDoubler(fare) {
  return fare * 2;
}

// Function to triple the fare
function fareTripler(fare) {
  return fare * 3;
}

// Function to select different drivers based on the passed function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
