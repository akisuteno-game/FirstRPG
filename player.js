const player = {

  hp:100,

  maxHp:100,

  atk:10,

  crit:5

};




function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );


  if(!ui){

    return;

  }


  const hpPercent =
    (
      player.hp
      /
      player.maxHp
    ) * 100;


  ui.innerHTML = `

    HP :
    <span id="hpText">

      ${player.hp}
      /
      ${player.maxHp}

    </span>


    <div class="bar">

      <div
        id="hpFill"
        class="fill"

        style="
          width:${hpPercent}%;
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


  `;


}




function updateHP(){


  const hpFill =
    document.getElementById(
      "hpFill"
    );


  const hpText =
    document.getElementById(
      "hpText"
    );


  if(!hpFill){

    return;

  }


  const hpPercent =
    (
      player.hp
      /
      player.maxHp
    ) * 100;


  hpFill.style.width =
    hpPercent + "%";


  hpText.innerHTML =

    player.hp

    +

    "/"

    +

    player.maxHp;


}
