function startBattle(enemyId){

  console.log(
    "CLICK = ",
    enemyId
  );

  localStorage.setItem(
    "selectedEnemy",
    String(enemyId)
  );

  console.log(
    "SAVE = ",
    localStorage.getItem(
      "selectedEnemy"
    )
  );

  window.location.href =
    "../battle.html";

}




function renderEnemies(){

  const area =

    document.getElementById(
      "enemyArea"
    );




  if(
    !area
  ){
    return;
  }




  area.innerHTML = "";




  enemies.forEach(

    function(enemy){

      const div =

        document.createElement(
          "div"
        );




      div.style.cursor =
        "pointer";

      div.style.margin =
        "20px";

      div.style.textAlign =
        "center";




      div.onclick = function(){

        startBattle(
          enemy.id
        );

      };




      div.innerHTML = `

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

      `;




      area.appendChild(
        div
      );

    }

  );

}




renderEnemies();
