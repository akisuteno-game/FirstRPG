const enemyId =
  localStorage.getItem(
    "selectedEnemy"
  );

if(
  !enemyId
  ||
  !enemies[enemyId]
){
  location.href =
    "index.html";
}

else{

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

}
