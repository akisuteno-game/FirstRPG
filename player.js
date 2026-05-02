let player={

  hp:100,
  maxHp:100,

  atk:10,

  gold:0

};



function renderPlayer(){

  document
    .getElementById(
      "playerUI"
    )
    .innerHTML=

    `
    HP :
    ${player.hp}
    <br><br>

    ATK :
    ${player.atk}
    <br><br>

    GOLD :
    ${player.gold}
    `;

}
