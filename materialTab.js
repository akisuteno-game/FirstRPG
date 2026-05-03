const materialIcons = {

  "スライムゼリー":
  "img/materials/slimeGel.png",

  "キングゼリー":
  "img/materials/kingGel.png",

  "ゴブリンの牙":
  "img/materials/goblinTooth.png",

  "王族の牙":
  "img/materials/kingTooth.png",

  "オークの皮":
  "img/materials/orcSkin.png",

  "古代の皮":
  "img/materials/ancientSkin.png",

  "竜のウロコ":
  "img/materials/dragonScale.png",

  "紅竜の心臓":
  "img/materials/dragonHeart.png"

};




function renderMaterialTab(){


  const tab =
    document.getElementById(
      "materialTab"
    );




  if(
    !tab
  ){

    return;

  }




  let html = `

    <div
      style="
        padding:20px;
        color:white;
      "
    >

      <h2>

        素材一覧

      </h2>

  `;




  const keys =

    Object.keys(

      player.materials

    );




  if(
    keys.length === 0
  ){

    html += `

      素材なし

    `;

  }




  keys.forEach(

    function(name){


      html += `

        <div>

          <img

            src="${
              materialIcons[name]
            }"

            width="28"

          >




          ${name}

          ×

          ${player.materials[name]}

        </div>

        <br>

      `;


    }

  );




  html += `

    </div>

  `;




  tab.innerHTML =
    html;


}
