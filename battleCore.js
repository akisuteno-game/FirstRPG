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

        display:flex;
        align-items:center;
        gap:50px;
        justify-content:center;
        width:100%;

      "

    >




      <div

        style="
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
            margin-top:10px;
          "

        >




          <div

            id="
              enemyHpFill
            "

            style="
              width:100%;
              height:100%;
              background:lime;
            "

          >
          </div>




        </div>




      </div>




      <div>




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
            location.href=
            'index.html'
          "

        >

          戻る

        </button>




      </div>




    </div>

  `;


}




renderBattle();




renderPlayer();
