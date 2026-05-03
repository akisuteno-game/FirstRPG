const player = {

  hp:30,

  maxHp:30,

  atk:5,

  crit:5,

  gold:0

};




function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );


  if(!ui){

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




    <div
      class="bar"
    >

      <div

        class="fill"

        id="playerHpFill"

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

  `;




  const hpBar =

    document.getElementById(
      "playerHpFill"
    );




  if(
    percent > 70
  ){

    hpBar.style.background =
      "lime";

  }


  else if(
    percent > 30
  ){

    hpBar.style.background =
      "yellow";

  }


  else{

    hpBar.style.background =
      "red";

  }


}
