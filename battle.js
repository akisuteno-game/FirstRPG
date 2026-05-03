let currentEnemy = null;

let gauge = 0;

let gaugeLoop = null;

const chargeTime = 2000;




window.onload =
function(){


  renderPlayer();


  loadBattle();


};




function loadBattle(){


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

      ${chargeTime}ms


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


  startGauge();


}




function startGauge(){


  gauge = 0;


  const startTime =
    Date.now();


  clearInterval(
    gaugeLoop
  );


  document
    .getElementById(
      "attackBtn"
    )
    .disabled = true;


  gaugeLoop =
    setInterval(


      function(){


        const elapsed =

          Date.now()
          -
          startTime;


        gauge =

          (
            elapsed
            /
            chargeTime
          ) * 100;


        if(
          gauge > 100
        ){

          gauge = 100;

        }


        document
          .getElementById(
            "gaugeFill"
          )
          .style.width =

            gauge + "%";


        if(
          gauge >= 100
        ){

          clearInterval(
            gaugeLoop
          );


          document
            .getElementById(
              "attackBtn"
            )
            .disabled = false;

        }


      },


      16


    );


}




function attackEnemy(){


  if(
    gauge < 100
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


  startGauge();


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


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


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
