let playerGauge = 0;
let enemyGauge  = 0;
let playerLoop  = null;
let enemyLoop   = null;




function startPlayerGauge(){

  clearInterval(playerLoop);

  playerGauge = 0;

  const bar    = document.getElementById("playerGauge");
  const button = document.getElementById("attackBtn");

  if(bar)   { bar.style.width    = "0%";  }
  if(button){ button.disabled    = true;  }

  const speed = player.attackSpeed;

  playerLoop = setInterval(

    function(){

      playerGauge += (16 / speed) * 100;

      if(playerGauge >= 100){

        playerGauge = 100;
        clearInterval(playerLoop);

        if(button){ button.disabled = false; }

      }

      if(bar){ bar.style.width = playerGauge + "%"; }

    },

    16

  );

}




function startEnemyGauge(){

  clearInterval(enemyLoop);

  enemyGauge = 0;

  const bar   = document.getElementById("enemyGauge");

  if(bar){ bar.style.width = "0%"; }

  const speed = currentEnemy.speed;

  enemyLoop = setInterval(

    function(){

      enemyGauge += (16 / speed) * 100;

      if(enemyGauge >= 100){

        enemyGauge = 0;
        enemyAttack();

      }

      if(bar){ bar.style.width = enemyGauge + "%"; }

    },

    16

  );

}
