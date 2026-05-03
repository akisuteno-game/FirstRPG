let currentEnemy = null;




document.addEventListener(

  "DOMContentLoaded",

  initBattle

);




function initBattle(){


  renderPlayer();


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


  if(!area){

    return;

  }


  area.innerHTML =

    createBattleHTML();




  const button =

    document.getElementById(
      "attackBtn"
    );


  if(button){

    button.onclick =
      attackEnemy;

  }




  startPlayerGauge();


  startEnemyGauge();


}




function createBattleHTML(){


  return `

    <div
      style="
        color:white;
        text-align:center;
        position:relative;
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

      <span id="enemyHpText">

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

        style="
          position:relative;
          z-index:9999;
          pointer-events:auto;
          width:220px;
          height:70px;
          font-size:28px;
        "

      >

        攻撃

      </button>


    </div>

  `;


}
