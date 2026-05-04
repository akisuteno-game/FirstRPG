function startBattle(enemyId){

  localStorage.setItem(
    "selectedEnemy",
    enemyId
  );

  location.href =
    "../battle.html";

}




function renderEnemies(){

  let area =

    document.getElementById(
      "enemyArea"
    );




  if(
    !area
  ){

    area =
      document.createElement(
        "div"
      );

    area.id =
      "enemyArea";

    document.body.appendChild(
      area
    );

  }




  area.innerHTML = "";




  enemies.forEach(

    function(enemy){

      area.innerHTML += `

        <div
          onclick="
            startBattle(
              ${enemy.id}
            )
          "
          style="
            cursor:pointer;
            margin:20px;
            text-align:center;
          "
        >

          <img
            src="${enemy.image}"
            style="
              width:120px;
              display:block;
              margin:auto;
            "
          >

          <div
            style="
              color:white;
              margin-top:10px;
            "
          >

            ${enemy.name}

          </div>

        </div>

      `;

    }

  );

}




renderEnemies();
