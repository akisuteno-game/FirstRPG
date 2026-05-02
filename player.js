const player = {

  hp: 100,

  atk: 10,

  crit: 5,

  materials: {

    jelly: 0,

    fang: 0,

    bone: 0,

    scale: 0

  }

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

    <div>HP : ${player.hp}</div>

    <div>攻撃 : ${player.atk}</div>

    <div>クリ率 : ${player.crit}%</div>

    <br>

    <div>ゼリー : ${player.materials.jelly}</div>

    <div>牙 : ${player.materials.fang}</div>

    <div>骨 : ${player.materials.bone}</div>

    <div>鱗 : ${player.materials.scale}</div>

  `;


}
