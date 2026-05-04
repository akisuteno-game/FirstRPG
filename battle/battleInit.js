console.log(
  "① battleInit"
);




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




console.log(
  "enemy =",
  currentEnemy
);




console.log(
  "renderBattle =",
  typeof renderBattle
);




console.log(
  "renderPlayer =",
  typeof renderPlayer
);




console.log(
  "startPlayerGauge =",
  typeof startPlayerGauge
);




console.log(
  "startEnemyGauge =",
  typeof startEnemyGauge
);




renderBattle();




renderPlayer();




startPlayerGauge();




startEnemyGauge();




console.log(
  "② finish"
);
