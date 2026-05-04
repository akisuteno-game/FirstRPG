const enemyId =

  localStorage.getItem(
    "selectedEnemy"
  );




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




renderPlayer();




startPlayerGauge();




startEnemyGauge();
