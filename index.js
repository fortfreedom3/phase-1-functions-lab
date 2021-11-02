// Code your solution in this file!

let hQ = 42;
function distanceFromHqInBlocks(someValue) {
   if (someValue > hQ) {
    return someValue - hQ;
   } 
   else if (someValue < hQ) {
    return hQ - someValue;
   } 
   else {
    return 0;
   }
};

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    }
    else if (end > start) {
        return (end - start) * 264;
    }
    else return 0;
}

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
};

