let currentEnemy = null;




function initBattle(){

  console.log(
    "INIT START"
  );




  const enemyId =

    localStorage.getItem(
      "selectedEnemy"
    );




  console.log(
    "enemyId = ",
    enemyId
  );




  if(
    enemyId === null
  ){

    console.log(
      "battle page skip"
    );

    return;

  }




  currentEnemy =

    enemies.find(

      function(enemy){

        return (

          String(
            enemy.id
          )

          ===

          String(
            enemyId
          )

        );

      }

    );




  if(
    !currentEnemy
  ){

    document
      .getElementById(
        "battleArea"
      )
      .innerHTML =

      "<h1>enemy not found</h1>";

    return;

  }




  currentEnemy.maxHp =

    currentEnemy.hp;




  renderBattle();




  if(
    typeof renderPlayer
    ===
    "function"
  ){

    renderPlayer();

  }




  if(
    typeof startPlayerGauge
    ===
    "function"
  ){

    startPlayerGauge();

  }




  if(
    typeof startEnemyGauge
    ===
    "function"
  ){

    startEnemyGauge();

  }




  console.log(
    "INIT END"
  );

}




initBattle();
