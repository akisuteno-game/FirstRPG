function makeEnemyButtons(){

  const list =
    document.getElementById(
      "list"
    );

  if(!list) return;

  list.innerHTML = "";


  for(let e of enemies){

    let btn =
      document.createElement(
        "button"
      );

    btn.className =
      "enemyCard";


    btn.style.height =
      "220px";

    btn.style.fontSize =
      "18px";


    btn.innerHTML = `

      <div
        class="enemyIcon"

        style="
          font-size:64px;
          margin-bottom:10px;
        ">

        ${e.icon || "❓"}

      </div>


      <b>

        ${e.name}

      </b>


      <br><br>


      HP :
      ${e.hp}


      <br>


      ATK :
      ${e.atk}


      <br>


      SPD :
      ${e.speed}

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
