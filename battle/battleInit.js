let currentEnemy = null;




function initBattle(){


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

    location.href =
      "../index.html";

    return;

  }




  if(
    !enemies[
      enemyId
    ]
  ){

    location.href =
      "../index.html";

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




  console.log(
    "enemy =",
    currentEnemy
  );




  renderBattle();




  renderPlayer();




  startPlayerGauge();




  startEnemyGauge();




  console.log(
    "DEBUG OK"
  );


}




initBattle();
