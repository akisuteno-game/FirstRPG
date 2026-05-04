console.log("battleInit start");

const enemyId =
  localStorage.getItem(
    "selectedEnemy"
  );

console.log(
  "enemyId =",
  enemyId
);

if(
  !enemyId
){
  alert(
    "enemyIdなし"
  );

  location.href =
    "../index.html";
}

if(
  !enemies[
    enemyId
  ]
){
  alert(
    "enemyデータなし : " +
    enemyId
  );

  location.href =
    "../index.html";
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

console.log(
  "enemy loaded",
  currentEnemy
);

renderBattle();

console.log(
  "renderBattle OK"
);

renderPlayer();

console.log(
  "renderPlayer OK"
);

startPlayerGauge();

console.log(
  "playerGauge OK"
);

startEnemyGauge();

console.log(
  "enemyGauge OK"
);
