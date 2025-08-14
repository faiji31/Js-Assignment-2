function totalFine( fare ) {
  if (typeof fare!=="number"||fare<=0){
    return invalid;
  }
  const charge = fare * 0.20;
  const servicecharge = 30;
  const total = fare + charge + servicecharge;

  return total;
}

console.log(totalFine(200)); 

console.log(totalFine(50));    
console.log(totalFine("65")); 

