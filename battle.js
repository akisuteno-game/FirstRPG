let currentEnemy = null;




window.onload =
function(){


  renderPlayer();


  renderBattle();


};




function renderBattle(){


  const savedEnemy =

    localStorage.getItem(
      "selectedEnemy"
    );


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!area){

    return;

  }


  if(!savedEnemy){

    area.innerHTML = `

      敵が選ばれていません

    `;

    return;

  }


  currentEnemy =

    JSON.parse(
      savedEnemy
    );


  area.innerHTML = `

    <div
      style="
        text-align:center;
        color:white;
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

          style="
            width:100%;
          "

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


      <br><br>


      <button
        onclick="
          location.href='index.html'
        "
      >

        戻る

      </button>


    </div>

  ";


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
