let currentEnemy = null;




function renderEnemyTab(){


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    return;

  }


  list.innerHTML = "";


  enemies.forEach(enemy=>{


    const card =
      document.createElement(
        "div"
      );


    card.className =
      "enemyCard";


    card.innerHTML = `

      <img
        class="enemyImage"
        src="${enemy.img}"
      >

      <br>

      ${enemy.name}

      <br>

      HP :
      ${enemy.hp}

      <br>

      ATK :
      ${enemy.atk}

    `;


    card.onclick =
    function(){

      startBattle(
        enemy
      );

    };


    list.appendChild(
      card
    );


  });


}




function startBattle(enemy){


  currentEnemy = {

    ...enemy

  };


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!area){

    return;

  }


  area.innerHTML = `

    <h2>

      ${enemy.name}

    </h2>


    <img

      class="enemyImage"

      src="${enemy.img}"

    >


    <br><br>


    HP :

    <span
      id="enemyHpText"
    >

      ${enemy.hp}

    </span>


    <div class="bar">

      <div

        id="enemyHpFill"

        class="fill"

      >
      </div>

    </div>


    <br>


    <button
      onclick="
        attackEnemy()
      "
    >

      攻撃

    </button>

  `;


}




function attackEnemy(){


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


  if(
    currentEnemy.hp <= 0
  ){

    alert(
      currentEnemy.name
      +
      " を倒した！"
    );

  }


}
