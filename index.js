const hq = 42;

function distanceFromHqInBlocks(destination) {
  if (destination > hq) {
    return destination - hq;
  } else if (hq > destination) {
    return hq - destination;
  }
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (end > start) {
    return (end - start) * 264;
  } else {
    return (start - end) * 264;
  }
}

function calculatesFarePrice (start, end) {
    let distance = distanceTravelledInFeet(start, end)
    if( distance = 400)
    return 0 
}
// } else if ( start >= end > 400 && end)
