let currentEnemy = null;




document.addEventListener(

  "DOMContentLoaded",

  function(){


    renderPlayer();


    loadBattle();


  }

);




function loadBattle(){


  const saved =

    localStorage.getItem(
      "selectedEnemy"
    );


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!saved || !area){

    return;

  }


  currentEnemy =

    JSON.parse(
      saved
    );


  area.innerHTML = `

    <div
      style="
        color:white;
        text-align:center;
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


      <br><br>


      自分
      2000ms


      <div class="bar">

        <div

          id="playerGauge"

          class="fill"

          style="
            width:0%;
          "

        >
        </div>

      </div>


      <br><br>


      敵
      ${currentEnemy.speed}ms


      <div class="bar">

        <div

          id="enemyGauge"

          class="fill"

          style="
            width:0%;
          "

        >
        </div>

      </div>


      <br><br>


      <button

        id="attackBtn"

        onclick="
          attackEnemy()
        "

      >

        攻撃

      </button>


    </div>

  `;


  startPlayerGauge();


  startEnemyGauge();


}
