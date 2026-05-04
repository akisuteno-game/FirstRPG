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
        text-align:center;
        margin-top:120px;
      "
    >

      RENDER OK

    </h1>

  `;




  console.log(
    "RENDER OK"
  );

}
