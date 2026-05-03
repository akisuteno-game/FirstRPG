function attackEnemy(){


  if(
    gauge < 100
  ){

    return;

  }


  currentEnemy.hp -=
    player.atk;


  if(
    currentEnemy.hp < 0
  ){

    currentEnemy.hp = 0;

  }


  document
    .getElementById(
      "enemyHpText"
    )
    .innerHTML =

      currentEnemy.hp;


  if(
    currentEnemy.hp <= 0
  ){

    setTimeout(

      function(){

        location.href =
          "index.html";

      },

      1000

    );

    return;

  }


  startGauge();


}
