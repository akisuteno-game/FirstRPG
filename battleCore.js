const params =

  new URLSearchParams(
    location.search
  );




const enemyId =

  Number(

    params.get(
      "enemy"
    )

  );




const currentEnemy =

  JSON.parse(

    JSON.stringify(

      enemies[
        enemyId
      ]

    )

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




    <br><br>




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

  `;


}




renderBattle();




if(
  typeof renderPlayer
  ===
  "function"
){

  renderPlayer();

}
