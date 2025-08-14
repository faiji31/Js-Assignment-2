function  bestTeam( player1, player2 ) {
          if (typeof player1!=="object"|| typeof player2!=="object"|| typeof player1===null|| typeof player2===null){
            return invalid;
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

console.log(bestTeam(
    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }));
    console.log(bestTeam(
    { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
    { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
));
console.log(bestTeam(
    { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
    { name: "France", foul: 10, cardY: 2, cardR: 1 }
));