let playerGauge = 0;

let enemyGauge = 0;

let playerLoop = null;

let enemyLoop = null;




function startPlayerGauge(){


  playerGauge = 0;




  const bar =

    document.getElementById(
      "playerGauge"
    );




  if(
    bar
  ){

    bar.style.width =
      "0%";

  }




  const speed =

    player.attackSpeed;




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




  playerLoop =

    setInterval(


      function(){


        playerGauge +=

          100 / (
            speed / 50
          );




        if(
          playerGauge >= 100
        ){

          playerGauge = 100;




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




        if(
          bar
        ){

          bar.style.width =

            playerGauge + "%";

        }




      },


      50


    );


}




function startEnemyGauge(){


  enemyGauge = 0;




  const speed =

    currentEnemy.speed;




  clearInterval(
    enemyLoop
  );




  enemyLoop =

    setInterval(


      function(){


        const bar =

          document.getElementById(
            "enemyGauge"
          );




        if(
          !bar
        ){
          return;
        }




        enemyGauge +=

          100 / (
            speed / 50
          );




        if(
          enemyGauge >= 100
        ){

          enemyGauge = 0;




          enemyAttack();

        }




        bar.style.width =

          enemyGauge + "%";


      },


      50


    );


}
