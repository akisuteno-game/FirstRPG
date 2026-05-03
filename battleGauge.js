let playerGauge = 0;

let enemyGauge = 0;

let playerLoop = null;

let enemyLoop = null;




function startPlayerGauge(){


  playerGauge = 0;


  clearInterval(
    playerLoop
  );


  playerLoop =
    setInterval(


      function(){


        playerGauge += 1;


        document
          .getElementById(
            "playerGauge"
          )
          .style.width =

            playerGauge + "%";


        if(
          playerGauge >= 100
        ){

          clearInterval(
            playerLoop
          );


          attackEnemy();


        }


      },


      20


    );


}




function startEnemyGauge(){


  enemyGauge = 0;


  clearInterval(
    enemyLoop
  );


  enemyLoop =
    setInterval(


      function(){


        enemyGauge += 1;


        document
          .getElementById(
            "enemyGauge"
          )
          .style.width =

            enemyGauge + "%";


        if(
          enemyGauge >= 100
        ){

          clearInterval(
            enemyLoop
          );


          enemyAttack();


          startEnemyGauge();


        }


      },


      25


    );


}
