let currentEnemy = null;




document.addEventListener(

  "DOMContentLoaded",

  function(){


    if(
      typeof renderPlayer
      ===
      "function"
    ){

      renderPlayer();

    }


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


  if(!area){

    return;

  }


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


      攻撃速度 :

      2000ms


      <div class="bar">

        <div

          id="gaugeFill"

          class="fill"

          style="
            width:0%;
          "

        >
        </div>

      </div>


      <br>


      <button

        id="attackBtn"

        disabled

        onclick="
          attackEnemy()
        "

      >

        攻撃

      </button>


    </div>

  `;


  if(
    typeof startGauge
    ===
    "function"
  ){

    startGauge();

  }


}
