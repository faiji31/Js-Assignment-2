function totalFine( fare ) {
  if (typeof fare!=="number"||fare<=0){
    return "Invalid";
  }
  const charge = fare * 0.20;
  const servicecharge = 30;
  const total = fare + charge + servicecharge;

  return total;
}

function  onlyCharacter( str ) {
  if (typeof str!=="string"){
    return "Invalid";
  }
  return str.replace(/\s+/g,"").toUpperCase()
}


function  bestTeam( player1, player2 ) {
          if (typeof player1!=="object"|| typeof player2!=="object"|| typeof player1===null|| typeof player2===null){
            return "Invalid";
          }
          const total1= (player1.foul ||0) + (player1.cardY||0) + (player1.cardR||0);
           const total2= (player2.foul ||0) + (player2.cardY||0) + (player2.cardR||0);

           if (total1<total2){
            return player1;
           }else if(total1>total2){
            return player2;
           }else{
            return "Tie";
           }
}

function  isSame(arr1 , arr2 ) {
         if(!Array.isArray(arr1)||!Array.isArray(arr2)){
            return "Invalid";
         }
         if (arr1.length!==arr2.length){
            return false;
         }
         for (let i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }
         }return true;
}

function  resultReport( marks ) {
         if (!Array.isArray(marks)){
            return "Invalid";
         }
         if (marks.length===0){
            return {finalscore:0,pass:0,fail:0};
         }

         let passCount=0;
         let failCount=0;
         let total =0;

         for (let i=0;i<marks.length;i++){
            total+=marks[i];
            if (marks[i]>=40){
                passCount++;
            }else{
                 failCount++;

            }
            
         }
         let avg =Math.round(total/marks.length);
            return{
                finalscore:avg,
                pass:passCount,
                fail:failCount
            };
}