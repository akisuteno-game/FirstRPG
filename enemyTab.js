function renderEnemyTab(){


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    return;

  }


  list.innerHTML = "";


  for(let e of enemies){


    const btn =
      document.createElement(
        "button"
      );


    btn.className =
      "enemyCard";


    btn.innerHTML = `

      <img
        class="enemyImage"

        src="${e.img}"
      >


      <div
        class="enemyName">

        ${e.name}

      </div>


      <div
        class="enemyHPBar">

        <div
          class="enemyHPFill">

        </div>

      </div>


      <div
        class="enemyStats">

        HP ${e.hp}

        <br>

        ATK ${e.atk}

        <br>

        SPD ${e.speed}

      </div>

    `;


    btn.onclick =
      function(){

        location.href =
          "battle.html?enemy="+e.id;
      };


    list.appendChild(
      btn
    );

  }


}
