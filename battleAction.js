function attackEnemy(){


  if(
    playerGauge < 100
  ){

    return;

  }




  currentEnemy.hp -=
    player.atk;




  if(
    currentEnemy.hp < 0
  ){

    currentEnemy.hp = 0;

  }




  updateEnemyUI();




  if(
    currentEnemy.hp <= 0
  ){


      player.gold +=
        currentEnemy.drop;




      savePlayer();




      localStorage.removeItem(
        "selectedEnemy"
      );




      setTimeout(

        function(){

          location.href =
            "index.html";

        },

        500

      );




      return;

  }




  startPlayerGauge();


}




function enemyAttack(){


  player.hp -=
    currentEnemy.atk;




  if(
    player.hp < 0
  ){

    player.hp = 0;

  }




  savePlayer();




  renderPlayer();


}
