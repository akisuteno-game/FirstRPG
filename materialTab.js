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




  if(
    !player
    ||
    !player.materials
  ){

    tab.innerHTML =
      "素材なし";

    return;

  }




  const keys =

    Object.keys(
      player.materials
    );




  if(
    keys.length === 0
  ){

    tab.innerHTML =
      "素材なし";

    return;

  }




  let html =
    "";




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

            width="32"

            onerror="
              this.outerHTML='？'
            "

          >

        `;

      }




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




  tab.innerHTML =
    html;


}
