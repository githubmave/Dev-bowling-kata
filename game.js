// Score 64:
// const frames1 = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
//
// Score 119:
// const frames2 = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
// const frames3 = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300:
// const frames4 = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]

var players=[player1, player2,player3,player4];

var rankBook={};

rankBook={

player1: {score: frames1},
player2: {score:frames2},
player3: {score: frames3},
player4: {score:frames4},
}



function getPlayerScore(player){

      var framesArr=rankBook[player].score;

      var totalScore,roundScore;

     
          
           framesArr.map(frameArr=>{

               roundScore= frameArr.reduce((pre,curr)=>{

                        pre=pre+curr;

                });

               totalScore=totalScore+roundScore;


        
           }

       return totalScore;
}




