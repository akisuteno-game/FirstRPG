const player = {

  hp:100,

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


  ui.innerHTML = `

    HP :
    ${player.hp}

    <br><br>

    攻撃 :
    ${player.atk}

    <br><br>

    クリ率 :
    ${player.crit}%

  `;


}
