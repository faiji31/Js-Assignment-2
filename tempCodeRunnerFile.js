function  resultReport( marks ) {
         if (!Array.isArray(marks)){
            return "invalid";
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
                return failCount++;

            }
            
         }
         let avg =Math.round(total/marks.length);
            return{
                finalscore:avg,
                pass:passCount,
                fail:failCount
            };
}