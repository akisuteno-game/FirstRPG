function renderEnemyTab(){


  const list =

    document.getElementById(
      "list"
    );




  if(
    !list
  ){

    return;

  }




  if(
    !window.enemies
    ||
    enemies.length === 0
  ){

    list.innerHTML =
      "敵データなし";

    return;

  }




  let html =
    "";




  enemies.forEach(

    function(enemy,index){


      html += `

        <div
          class="enemyCard"
          onclick="
            location.href=
            'battle.html?enemy='
            + ${index}
          "
        >


          <img

            src="${
              enemy.img
              ||
              ''
            }"

            width="100"

            onerror="
              this.style.display=
              'none'
            "

          >


          <br>


          ${enemy.name}


          <br>


          HP :
          ${enemy.maxHp}


          <br>


          ATK :
          ${enemy.atk}


          <br>


          GOLD :
          ${enemy.gold}


        </div>

      `;


    }

  );




  list.innerHTML =
    html;


}
