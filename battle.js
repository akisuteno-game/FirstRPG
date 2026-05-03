let currentEnemy = null;




window.onload =
function(){


  renderPlayer();


  loadEnemy();


};




function loadEnemy(){


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!area){

    return;

  }


  const saved =

    localStorage.getItem(
      "selectedEnemy"
    );


  if(!saved){

    area.innerHTML =
      "敵が選ばれていません";

    return;

  }


  currentEnemy =
    JSON.parse(
      saved
    );


  area.innerHTML = `

    <div
      style="
        text-align:center;
        color:white;
        padding:30px;
      "
    >

      <h1>

        ${currentEnemy.name}

      </h1>


      <img
        src="${currentEnemy.img}"
        width="220"
      >


      <br><br>


      HP :

      <span
        id="enemyHpText"
      >

        ${currentEnemy.hp}

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


    </div>

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


  updateEnemyUI();


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


  enemyAttack();


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
