let playerGauge = 0;

let enemyGauge = 0;




function startPlayerGauge(){


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




      playerGauge++;




      if(
        playerGauge > 100
      ){

        playerGauge = 0;

        playerAttack();

      }




      bar.style.width =

        playerGauge + "%";




      debug(
        playerGauge
      );


    },


    50


  );


}




function startEnemyGauge(){


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




      enemyGauge++;




      if(
        enemyGauge > 100
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
