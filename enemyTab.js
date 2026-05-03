console.log("ENEMY TAB OK");


function renderEnemyTab(){


  console.log("renderEnemyTab OK");


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    console.log("listなし");

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

      selectEnemy(
        enemy.id
      );

    };


    list.appendChild(
      card
    );


  });


}




function selectEnemy(enemyId){


  console.log(
    "クリック:",
    enemyId
  );


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
      width="200"
    >


    <br><br>


    HP :
    ${enemy.hp}


    <br>


    ATK :
    ${enemy.atk}

  `;


}
