function attackEnemy(){


  if(
    !currentEnemy
  ){

    return;

  }




  playerGauge = 0;




  const gauge =

    document.getElementById(
      "playerGauge"
    );




  if(
    gauge
  ){

    gauge.style.width =
      "0%";

  }




  const button =

    document.getElementById(
      "attackBtn"
    );




  if(
    button
  ){

    button.disabled =
      true;

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

      savePlayer();

      localStorage.removeItem(
        "selectedEnemy"
      );

      setTimeout(

        function(){

          location.href =
            "index.html";

        },

        500

      );

      return;

  }




  startPlayerGauge();


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


}




function updateEnemyUI(){


  const hpText =

    document.getElementById(
      "enemyHpText"
    );




  const hpBar =

    document.getElementById(
      "enemyHpFill"
    );




  if(
    !hpText
    ||
    !hpBar
  ){

    return;

  }




  hpText.innerHTML =
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




  hpBar.style.width =

    percent + "%";


}
