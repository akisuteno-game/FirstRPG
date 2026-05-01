function makeEnemyButtons(){

  const list =
    document.getElementById(
      "list"
    );

  if(!list) return;

  list.innerHTML = "";


  for(let e of enemies){

    let hpRate = 100;


    let btn =
      document.createElement(
        "button"
      );

    btn.className =
      "enemyCard";


    btn.innerHTML = `

      <div
        class="enemyIcon">

        ${e.icon || "❓"}

      </div>


      <div
        class="enemyName">

        ${e.name}

      </div>


      HP ${e.hp}


      <div
        class="enemyHPBar">

        <div
          class="enemyHPFill"

          style="
            width:${hpRate}%;
          ">

        </div>

      </div>


      <div
        class="enemyStats">

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
