const params =

  new URLSearchParams(
    location.search
  );




const enemyId =

  Number(

    params.get(
      "id"
    )

  );




const currentEnemy =

  enemies.find(

    function(enemy){

      return (
        enemy.id
        ===
        enemyId
      );

    }

  );




function renderBattle(){


  const area =

    document.getElementById(
      "battleArea"
    );




  if(
    !area
  ){

    return;

  }




  if(
    !currentEnemy
  ){

    area.innerHTML =
      "敵がいません";

    return;

  }




  area.innerHTML = `

    <div

      style="
        width:100%;
        text-align:center;
      "

    >




      <h2>

        ${currentEnemy.name}

      </h2>




      <img

        src="${
          currentEnemy.img
        }"

        width="150"

        onerror="
          this.style.display=
          'none'
        "

      >




      <br><br>




      HP :

      <span
        id="enemyHpText"
      >

        ${currentEnemy.hp}

      </span>




      <div

        style="
          width:200px;
          height:20px;
          border:1px solid white;
          margin:auto;
          margin-top:10px;
        "

      >




        <div

          id="enemyHpFill"

          style="
            width:100%;
            height:100%;
            background:lime;
          "

        >
        </div>




      </div>




      <br><br>




      自分ゲージ




      <div

        style="
          width:300px;
          height:20px;
          border:1px solid white;
          margin:auto;
        "

      >




        <div

          id="playerGauge"

          style="
            width:0%;
            height:100%;
            background:cyan;
          "

        >
        </div>




      </div>




      <br><br>




      敵ゲージ




      <div

        style="
          width:300px;
          height:20px;
          border:1px solid white;
          margin:auto;
        "

      >




        <div

          id="enemyGauge"

          style="
            width:0%;
            height:100%;
            background:red;
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

        disabled

      >

        攻撃

      </button>




      <br><br>




      <button

        onclick="
          location.href=
          'index.html'
        "

      >

        戻る

      </button>




    </div>

  `;




  if(
    typeof renderPlayer
    ===
    "function"
  ){

    renderPlayer();

  }




  if(
    typeof startPlayerGauge
    ===
    "function"
  ){

    startPlayerGauge();

  }




  if(
    typeof startEnemyGauge
    ===
    "function"
  ){

    startEnemyGauge();

  }


}




renderBattle();
