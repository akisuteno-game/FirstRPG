function attackEnemy(){


  if(
    !currentEnemy
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




  const hpText =

    document.getElementById(
      "enemyHpText"
    );


  if(
    hpText
  ){

    hpText.innerHTML =
      currentEnemy.hp;

  }




  const hpBar =

    document.getElementById(
      "enemyHpFill"
    );


  if(
    hpBar
  ){

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


  if(
    player.hp <= 0
  ){

    setTimeout(

      function(){

        location.href =
          "index.html";

      },

      1000

    );

  }


}
