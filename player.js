function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );


  if(!ui){

    return;

  }


  ui.innerHTML = `

    Lv 1
    <br>
    HP 100
    <br>
    ATK 10
    <br>
    GOLD 0

  `;


}


renderPlayer();
