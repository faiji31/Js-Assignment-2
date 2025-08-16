function totalFine( fare ) {
  if (typeof fare!=="number"||fare<=0){
    return "Invalid";
  }
  const charge = fare * 0.20;
  const servicecharge = 30;
  const total = fare + charge + servicecharge;

  return total;
}
const liam = totalFine(200);
console.log(liam);
const siam = totalFine(0);
console.log(siam);
const lsiam = totalFine(-35);
console.log(lsiam);
const llsiam = totalFine(50);
console.log(llsiam);

