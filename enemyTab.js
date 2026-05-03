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




  let html =
    "";




  enemies.forEach(

    function(enemy){


      html += `

        <div

          class="
            enemyCard
          "

          onclick="
            location.href=
            'battle.html?id='
            + ${enemy.id}
          "

        >




          <img

            src="${enemy.img}"

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
          ${enemy.hp}

          <br>




          ATK :
          ${enemy.atk}

          <br>




          GOLD :
          ${enemy.drop}




        </div>

      `;


    }

  );




  list.innerHTML =
    html;


}
