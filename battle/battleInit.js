document.addEventListener(

  "DOMContentLoaded",

  function(){

    const area =

      document.getElementById(
        "battleArea"
      );




    if(
      !area
    ){

      alert(
        "battleArea none"
      );

      return;

    }




    area.innerHTML = `

      <h1
        style="
          color:white;
          text-align:center;
          margin-top:200px;
        "
      >

        BATTLE INIT OK

      </h1>

    `;




    console.log(
      "BATTLE INIT OK"
    );

  }

);
