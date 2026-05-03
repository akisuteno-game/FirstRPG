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




  if(
    percent > 70
  ){

    hpBar.style.background =
      "lime";

  }


  else if(
    percent > 30
  ){

    hpBar.style.background =
      "yellow";

  }


  else{

    hpBar.style.background =
      "red";

  }


}
