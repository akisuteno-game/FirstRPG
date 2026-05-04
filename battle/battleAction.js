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

    player.gold +=
      currentEnemy.drop;




    if(
      currentEnemy.material
    ){

      if(
        !player.materials[
          currentEnemy.material
        ]
      ){

        player.materials[
          currentEnemy.material
        ] = 0;

      }




      player.materials[
        currentEnemy.material
      ]++;

    }




    if(
      currentEnemy.rareMaterial
      &&
      Math.random() < 0.1
    ){

      if(
        !player.materials[
          currentEnemy.rareMaterial
        ]
      ){

        player.materials[
          currentEnemy.rareMaterial
        ] = 0;

      }




      player.materials[
        currentEnemy.rareMaterial
      ]++;

    }




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




  savePlayer();




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




  const percent =

    (
      currentEnemy.hp
      /
      currentEnemy.maxHp
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
