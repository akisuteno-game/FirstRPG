let currentEnemy = null;




window.onload =
function(){


  renderPlayer();


  loadEnemy();


};




function loadEnemy(){


  const savedEnemy =

    localStorage.getItem(
      "selectedEnemy"
    );


  if(!savedEnemy){

    return;

  }


  currentEnemy =

    JSON.parse(
      savedEnemy
    );


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!area){

    return;

  }


  area.innerHTML = `

    <div
      style="
        text-align:center;
      "
    >

      <h2>

        ${currentEnemy.name}

      </h2>


      <img

        src="${currentEnemy.img}"

        width="220"

      >


      <br><br>


      敵HP :

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

  ";


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
