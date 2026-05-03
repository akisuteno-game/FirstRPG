function renderEnemyTab(){


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    return;

  }


  list.innerHTML = "";


  enemies.forEach(enemy=>{


    list.innerHTML += `

      <div

        class="enemyCard"

        onclick="
          startBattle(
            ${enemy.id}
          )
        "

      >

        <img

          class="enemyImage"

          src="${enemy.img}"

        >


        <br><br>


        ${enemy.name}


        <br><br>


        HP :
        ${enemy.hp}


        <br>


        ATK :
        ${enemy.atk}


        <br>


        SPD :
        ${enemy.speed}ms


      </div>

    `;


  });


}




function startBattle(enemyId){


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


  const enemy =

    JSON.parse(

      JSON.stringify(

        enemies[
          enemyId
        ]

      )

    );


  localStorage.setItem(

    "selectedEnemy",

    JSON.stringify(
      enemy
    )

  );


  location.href =
    "battle.html";


}
