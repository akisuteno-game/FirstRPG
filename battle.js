let currentEnemy = null;

let gauge = 0;

let gaugeTimer = null;




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


      <br><br>


      チャージ


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

        onclick="
          attackEnemy()
        "

        disabled
      >

        攻撃

      </button>


    </div>

  `;


  startGauge();


}




function startGauge(){


  gauge = 0;


  document
    .getElementById(
      "attackBtn"
    )
    .disabled = true;


  clearInterval(
    gaugeTimer
  );


  gaugeTimer =
    setInterval(


      function(){


        gauge += 2;


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
            gaugeTimer
          );


          document
            .getElementById(
              "attackBtn"
            )
            .disabled = false;

        }


      },


      50


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
