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
      "enemyId none"
    );

    return;

  }




  currentEnemy =

    enemies.find(

      function(enemy){

        return (

          Number(
            enemy.id
          )

          ===

          Number(
            enemyId
          )

        );

      }

    );




  console.log(
    "FOUND = ",
    currentEnemy
  );




  if(
    !currentEnemy
  ){

    localStorage.removeItem(
      "selectedEnemy"
    );




    document
      .getElementById(
        "battleArea"
      )
      .innerHTML =

      "<h1 style='color:white'>enemy not found</h1>";




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
