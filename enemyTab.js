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


    const card =
      document.createElement(
        "div"
      );


    card.className =
      "enemyCard";


    card.innerHTML = `

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

    `;


    card.onclick =
    function(){

      startBattle(
        enemy
      );

    };


    list.appendChild(
      card
    );


  });


}




function startBattle(enemy){


  localStorage.setItem(

    "selectedEnemy",

    JSON.stringify(
      enemy
    )

  );


  location.href =
    "battle.html";


}
