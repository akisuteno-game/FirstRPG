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


  if(button){

    button.disabled = true;

  }




  playerLoop =
    setInterval(


      function(){


        playerGauge +=
          100
          /
          (
            playerSpeed
            /
            16
          );


        if(
          playerGauge > 100
        ){

          playerGauge = 100;

        }


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


          if(button){

            button.disabled =
              false;

          }

        }


      },


      16


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


        enemyGauge +=
          100
          /
          (
            currentEnemy.speed
            /
            16
          );


        if(
          enemyGauge > 100
        ){

          enemyGauge = 100;

        }




        const bar =

          document.getElementById(
            "enemyGauge"
          );


        if(bar){

          bar.style.width =

            enemyGauge + "%";

        }




        if(
          enemyGauge >= 100
        ){

          clearInterval(
            enemyLoop
          );




          if(
            typeof enemyAttack
            ===
            "function"
          ){

            enemyAttack();

          }




          startEnemyGauge();


        }


      },


      16


    );


}
