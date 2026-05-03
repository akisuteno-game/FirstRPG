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
          selectEnemy(
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




function selectEnemy(enemyId){


  const enemy =
    enemies.find(
      e=>e.id===enemyId
    );


  if(!enemy){

    return;

  }


  const battleArea =
    document.getElementById(
      "battleArea"
    );


  if(!battleArea){

    return;

  }


  battleArea.innerHTML = `

    <h2>

      ${enemy.name}

    </h2>


    <img

      src="${enemy.img}"

      style="
        width:200px;
      "

    >


    <br><br>


    HP :
    ${enemy.hp}


    <br>


    ATK :
    ${enemy.atk}


  `;


}
