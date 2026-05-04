let playerGauge = 0;

let enemyGauge = 0;

let playerLoop = null;

let enemyLoop = null;




function startPlayerGauge(){


  const speed =

    player.attackSpeed;




  clearInterval(
    playerLoop
  );




  playerLoop =

    setInterval(


      function(){


        const bar =

          document.getElementById(
            "playerGauge"
          );




        if(
          !bar
        ){
          return;
        }




        playerGauge +=

          100 / (
            speed / 50
          );




        if(
          playerGauge >= 100
        ){

          playerGauge = 100;




          bar.style.width =
            "100%";




          attackEnemy();




          playerGauge = 0;

        }




        bar.style.width =

          playerGauge + "%";




        debug(

          Math.floor(
            playerGauge
          )

        );


      },


      50


    );


}




function startEnemyGauge(){


  const speed =

    currentEnemy.speed
    * 1000;




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
