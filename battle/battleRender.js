function renderBattle(){

  const area =
    document.getElementById(
      "battleArea"
    );

  if(
    !area
  ){
    return;
  }

  area.innerHTML = `

    <h1
      style="
        color:white;
        font-size:48px;
        text-align:center;
        margin-top:100px;
      "
    >
      BATTLE OK
    </h1>

  `;

}
