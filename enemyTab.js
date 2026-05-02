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
