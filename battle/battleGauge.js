let playerGauge = 0;

let enemyGauge = 0;

let playerLoop = null;

let enemyLoop = null;

const playerSpeed = 2000;




function startPlayerGauge(){


  console.log(
    "player gauge start"
  );




  const bar =

    document.getElementById(
      "playerGauge"
    );




  console.log(
    "player bar =",
    bar
  );




  if(
    !bar
  ){

    return;

  }




  playerGauge = 0;




  clearInterval(
    playerLoop
  );




  playerLoop =

    setInterval(


      function(){


        playerGauge++;




        bar.style.width =

          playerGauge
          +
          "%";




        debug(
          playerGauge
        );




        if(
          playerGauge >= 100
        ){

          clearInterval(
            playerLoop
          );

        }


      },


      playerSpeed / 100


    );


}




function startEnemyGauge(){


  const bar =

    document.getElementById(
      "enemyGauge"
    );




  if(
    !bar
  ){

    return;

  }




  enemyGauge = 0;




  clearInterval(
    enemyLoop
  );




  enemyLoop =

    setInterval(


      function(){


        enemyGauge++;




        bar.style.width =

          enemyGauge
          +
          "%";




        if(
          enemyGauge >= 100
        ){

          clearInterval(
            enemyLoop
          );

        }


      },


      currentEnemy.speed / 100


    );


}
