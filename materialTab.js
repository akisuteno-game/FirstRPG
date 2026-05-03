const materialIcons = {

  "スライムゼリー":"🟢",

  "キングゼリー":"💎",

  "ゴブリンの牙":"🦷",

  "王族の牙":"👑",

  "オークの皮":"🟤",

  "古代の皮":"✨",

  "竜のウロコ":"🐉",

  "紅竜の心臓":"❤️"

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


      const icon =

        materialIcons[name]
        ||
        "📦";




      html += `

        <div>

          ${icon}

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
