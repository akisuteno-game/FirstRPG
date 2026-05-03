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


  updateEnemyUI();


  if(
    currentEnemy.hp <= 0
  ){

    localStorage.removeItem(
      "selectedEnemy"
    );


    setTimeout(

      function(){

        location.href =
          "index.html";

      },

      1000

    );

    return;

  }


  enemyAttack();


  startGauge();


}




function enemyAttack(){


  player.hp -=
    currentEnemy.atk;


  if(
    player.hp < 0
  ){

    player.hp = 0;

  }


  renderPlayer();


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


  if(
    player.hp <= 0
  ){

    alert(
      "やられた..."
    );


    player.hp =
      player.maxHp;


    setTimeout(

      function(){

        location.href =
          "index.html";

      },

      1000

    );

  }


}




function updateEnemyUI(){


  document
    .getElementById(
      "enemyHpText"
    )
    .innerHTML =

      currentEnemy.hp;


  const maxHp =
    enemies[
      currentEnemy.id
    ].hp;


  const percent =

    (
      currentEnemy.hp
      /
      maxHp
    ) * 100;


  document
    .getElementById(
      "enemyHpFill"
    )
    .style.width =

      percent + "%";


}
