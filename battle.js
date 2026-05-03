let currentEnemy = null;

let gauge = 0;

let gaugeLoop = null;




window.onload =
function(){


  renderPlayer();


  loadBattle();


};




function loadBattle(){


  const saved =

    localStorage.getItem(
      "selectedEnemy"
    );


  if(!saved){

    return;

  }


  currentEnemy =

    JSON.parse(
      saved
    );


  const area =
    document.getElementById(
      "battleArea"
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


        gauge += 5;


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


      100


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


  document
    .getElementById(
      "enemyHpText"
    )
    .innerHTML =

      currentEnemy.hp;


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


  startGauge();


}
