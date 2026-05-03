const defaultPlayer = {

  hp:30,

  maxHp:30,

  atk:5,

  crit:5,

  gold:0

};




const player =

  JSON.parse(

    JSON.stringify(
      defaultPlayer
    )

  );




let healLoop = null;




loadPlayer();




function loadPlayer(){


  const saved =

    localStorage.getItem(
      "playerData"
    );




  if(!saved){

    return;

  }




  Object.assign(

    player,

    JSON.parse(
      saved
    )

  );


}




function savePlayer(){


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


}




function resetPlayer(){


  Object.assign(

    player,

    JSON.parse(

      JSON.stringify(
        defaultPlayer
      )

    )

  );




  savePlayer();


}




function startAutoHeal(){


  if(

    location.pathname.includes(
      "battle"
    )

  ){

    return;

  }




  clearInterval(
    healLoop
  );




  healLoop =

    setInterval(


      function(){


        if(

          player.hp
          >=
          player.maxHp

        ){

          return;

        }




        const heal =

          Math.ceil(

            player.maxHp
            *
            0.1

          );




        player.hp +=
          heal;




        if(

          player.hp
          >
          player.maxHp

        ){

          player.hp =
            player.maxHp;

        }




        savePlayer();




        renderPlayer();


      },


      1000


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




    <div class="bar">

      <div

        id="playerHpFill"

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




    <br><br>




    GOLD :
    ${player.gold}

  `;




  const bar =

    document.getElementById(
      "playerHpFill"
    );




  if(percent > 70){

    bar.style.background =
      "lime";

  }

  else if(percent > 30){

    bar.style.background =
      "yellow";

  }

  else{

    bar.style.background =
      "red";

  }


}




startAutoHeal();
