const player = {

  hp:30,

  maxHp:30,

  atk:5,

  crit:5,

  gold:0

};




const defaultPlayer =

  JSON.parse(

    JSON.stringify(
      player
    )

  );




function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );


  if(!ui){

    return;

  }




  ui.innerHTML = `

    HP :
    ${player.hp}
    /
    ${player.maxHp}

    <br><br>

    攻撃 :
    ${player.atk}

    <br><br>

    クリ率 :
    ${player.crit}%

    <br><br>

    GOLD :
    ${player.gold}

  `;


}
