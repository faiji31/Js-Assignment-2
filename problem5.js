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

console.log(resultReport([])); 
// { finalScore: 0, pass: 0, fail: 0 }

console.log(resultReport([98, 87, 67, 91, 92, 33, 87])); 
// { finalScore: 79, pass: 6, fail: 1 }

console.log(resultReport([99, 87, 67, 12, 87])); 
// { finalScore: 70, pass: 4, fail: 1 }

console.log(resultReport([99])); 
// { finalScore: 99, pass: 1, fail: 0 }
console.log(resultReport([99, 87, 67, 12, 87])); 
// { finalScore: 70, pass: 4, fail: 1 }

console.log(resultReport([99])); 
// { finalScore: 99, pass: 1, fail: 0 }

console.log(resultReport(100)); 
// "Invalid"