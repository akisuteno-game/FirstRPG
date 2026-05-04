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

    document
      .getElementById(
        "battleArea"
      )
      .innerHTML =

      "<h1>enemyId null</h1>";

    return;

  }




  if(
    !enemies[
      enemyId
    ]
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

        enemies[
          enemyId
        ]

      )

    );




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
