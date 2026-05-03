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
    typeof enemies
    ===
    "undefined"
  ){

    list.innerHTML =
      "敵データなし";

    return;

  }




  if(
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


      const hp =
        enemy.hp || 0;




      const atk =
        enemy.atk || 0;




      const gold =
        enemy.drop || 0;




      const img =
        enemy.img || "";




      const name =
        enemy.name || "???";




      const normal =
        enemy.material || "なし";




      const rare =
        enemy.rareMaterial || "なし";




      html += `

        <div

          class="
            enemyCard
          "

          onclick="
            location.href=
            'battle.html?enemy='
            + ${index}
          "

        >




          <img

            src="${img}"

            width="100"

            onerror="
              this.style.display=
              'none'
            "

          >

          <br>




          ${name}

          <br>




          HP :
          ${hp}

          <br>




          ATK :
          ${atk}

          <br>




          GOLD :
          ${gold}

          <br><br>




          通常 :
          ${normal}

          <br>




          レア :
          ${rare}




        </div>

      `;


    }

  );




  list.innerHTML =
    html;


}
