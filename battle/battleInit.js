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
    "selectedEnemy =",
    enemyId
  );




  if(
    enemyId === null
  ){

    document
      .getElementById(
        "battleArea"
      )
      .innerHTML =

      "<h1>enemyId null</h1>";

    return;

  }




  currentEnemy =

    enemies.find(

      function(enemy){

        return String(
          enemy.id
        ) === String(
          enemyId
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




  currentEnemy =

    JSON.parse(
      JSON.stringify(
        currentEnemy
      )
    );




  currentEnemy.maxHp =
    currentEnemy.hp;




  renderBattle();




  console.log(
    "INIT END"
  );

}




initBattle();
