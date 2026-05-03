function getMaterialPath(name){


  if(
    name ===
    "スライムゼリー"
  ){

    return
      "img/materials/slimeGel.png";

  }




  if(
    name ===
    "キングゼリー"
  ){

    return
      "img/materials/kingGel.png";

  }




  if(
    name ===
    "ゴブリンの牙"
  ){

    return
      "img/materials/goblinTooth.png";

  }




  if(
    name ===
    "王族の牙"
  ){

    return
      "img/materials/kingTooth.png";

  }




  if(
    name ===
    "オークの皮"
  ){

    return
      "img/materials/orcSkin.png";

  }




  if(
    name ===
    "古代の皮"
  ){

    return
      "img/materials/ancientSkin.png";

  }




  if(
    name ===
    "竜のウロコ"
  ){

    return
      "img/materials/dragonScale.png";

  }




  if(
    name ===
    "紅竜の心臓"
  ){

    return
      "img/materials/dragonHeart.png";

  }




  return null;


}




function renderPlayer(){


  const ui =
    document.getElementById(
      "playerUI"
    );




  if(
    !ui
  ){

    return;

  }




  const percent =

    (
      player.hp
      /
      player.maxHp
    ) * 100;




  let materialHTML =
    "";




  const keys =

    Object.keys(

      player.materials

    );




  if(
    keys.length === 0
  ){

    materialHTML =
      "なし";

  }




  keys.forEach(

    function(name){


      const path =

        getMaterialPath(
          name
        );




      let icon =
        "？";




      if(
        path
      ){

        icon = `

          <img

            src="${path}"

            width="22"

            onerror="
              this.outerHTML='？';
            "

          >

        `;

      }




      materialHTML += `

        <div>

          ${icon}

          ×

          ${player.materials[name]}

        </div>

      `;


    }

  );




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




    <br><br>




    素材 :

    <br>




    ${materialHTML}

  `;




  const bar =

    document.getElementById(
      "playerHpFill"
    );




  if(
    percent > 70
  ){

    bar.style.background =
      "lime";

  }


  else if(
    percent > 30
  ){

    bar.style.background =
      "yellow";

  }


  else{

    bar.style.background =
      "red";

  }


}
