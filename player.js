let player = {

  hp:30,

  maxHp:30,

  atk:5,

  crit:5

};




const saved =

  localStorage.getItem(
    "playerData"
  );


if(saved){

  player =

    JSON.parse(
      saved
    );

}




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


  `;


}
