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


        <br>


        ${enemy.name}


        <br>


        HP :

        ${enemy.hp}


        <br>


        ATK :

        ${enemy.atk}


      </div>

    `;


  });


}




function startBattle( enemyId ){


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
