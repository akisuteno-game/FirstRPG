let playerGauge = 0;

let enemyGauge = 0;

let playerLoop = null;

let enemyLoop = null;

const playerSpeed = 2000;




function startPlayerGauge(){


  playerGauge = 0;




  clearInterval(
    playerLoop
  );




  const button =

    document.getElementById(
      "attackBtn"
    );




  if(
    button
  ){

    button.disabled =
      true;

  }




  const bar =

    document.getElementById(
      "playerGauge"
    );




  playerLoop =

    setInterval(


      function(){


        playerGauge += 1;




        if(
          bar
        ){

          bar.style.width =

            playerGauge
            +
            "%";

        }




        if(
          playerGauge >= 100
        ){

          clearInterval(
            playerLoop
          );




          if(
            button
          ){

            button.disabled =
              false;

          }

        }


      },


      playerSpeed / 100


    );


}




function startEnemyGauge(){


  enemyGauge = 0;




  clearInterval(
    enemyLoop
  );




  const bar =

    document.getElementById(
      "enemyGauge"
    );




  enemyLoop =

    setInterval(


      function(){


        enemyGauge += 1;




        if(
          bar
        ){

          bar.style.width =

            enemyGauge
            +
            "%";

        }




        if(
          enemyGauge >= 100
        ){

          clearInterval(
            enemyLoop
          );




          enemyAttack();




          if(
            player.hp > 0
            &&
            currentEnemy.hp > 0
          ){

            startEnemyGauge();

          }

        }


      },


      currentEnemy.speed / 100


    );


}
