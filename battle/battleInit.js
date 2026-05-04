const enemyId =

  localStorage.getItem(
    "selectedEnemy"
  );




if(
  !enemyId
){

  location.href =
    "index.html";

}




if(
  !enemies[
    enemyId
  ]
){

  location.href =
    "index.html";

}




let currentEnemy =

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




renderPlayer();




startPlayerGauge();




startEnemyGauge();
