function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );




  if(
    !ui
  ){

    return;

  }




  const percent =

    (
      player.hp
      /
      player.maxHp
    ) * 100;




  ui.innerHTML = `

    HP :

    ${player.hp}

    /

    ${player.maxHp}




    <div class="bar">

      <div

        id="playerHpFill"

        class="fill"

        style="
          width:${percent}%;
        "

      >
      </div>

    </div>




    <br>




    攻撃 :
    ${player.atk}




    <br><br>




    クリ率 :
    ${player.crit}%




    <br><br>




    GOLD :
    ${player.gold}




    <br><br>




    素材 :

    <br>




    ${createMaterialHTML()}

  `;




  const bar =

    document.getElementById(
      "playerHpFill"
    );




  if(
    !bar
  ){

    return;

  }




  if(
    percent > 70
  ){

    bar.style.background =
      "lime";

  }


  else if(
    percent > 30
  ){

    bar.style.background =
      "yellow";

  }


  else{

    bar.style.background =
      "red";

  }


}
