console.log("ENEMY TAB OK");


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
        enemy.id
      );

    };


    list.appendChild(
      card
    );


  });


}




function startBattle(enemyId){


  const enemyData =
    enemies.find(
      e=>e.id===enemyId
    );


  if(!enemyData){

    return;

  }


  currentEnemy = {

    ...enemyData

  };


  const battleArea =
    document.getElementById(
      "battleArea"
    );


  if(!battleArea){

    return;

  }


  battleArea.innerHTML = `

    <h2>

      ${currentEnemy.name}

    </h2>


    <img
      src="${currentEnemy.img}"
      width="200"
    >


    <br><br>


    <div>

      敵HP :

      <span id="enemyHpText">

        ${currentEnemy.hp}

      </span>

    </div>


    <div class="bar">

      <div

        id="enemyHpFill"

        class="fill"

        style="width:100%;"

      >
      </div>

    </div>


    <br>


    <button
      onclick="attackEnemy()"
    >

      攻撃

    </button>

  `;


}




function attackEnemy(){


  if(!currentEnemy){

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


  const hpFill =
    document.getElementById(
      "enemyHpFill"
    );


  hpText.innerHTML =
    currentEnemy.hp;


  const percent =
    (
      currentEnemy.hp
      /
      enemies[
        currentEnemy.id
      ].hp
    ) * 100;


  hpFill.style.width =
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
