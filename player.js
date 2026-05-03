console.log("PLAYER JS OK");


const player = {

  hp:100,

  maxHp:100,

  atk:10,

  crit:5

};




function renderPlayer(){


  console.log("renderPlayer OK");


  const ui =
    document.getElementById(
      "playerUI"
    );


  if(!ui){

    console.log("playerUIなし");

    return;

  }


  ui.innerHTML = `

    <div>

      HP :
      <span id="hpText">

        ${player.hp}
        /
        ${player.maxHp}

      </span>

    </div>


    <div class="bar">

      <div
        id="hpFill"
        class="fill"
        style="width:100%;"
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
