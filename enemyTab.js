function renderEnemyTab(){


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    return;

  }




  list.innerHTML = "";




  enemies.forEach(

    enemy=>{


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




          <br>




          SPD :
          ${enemy.speed}ms




          <br>




          DROP :
          ${enemy.drop}G




        </div>

      `;


    }

  );


}




function startBattle(id){


  const enemy =

    JSON.parse(

      JSON.stringify(

        enemies[id]

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
