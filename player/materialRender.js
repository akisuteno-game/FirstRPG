function createMaterialHTML(){


  let html =
    "";




  const keys =

    Object.keys(

      player.materials

    );




  if(
    keys.length === 0
  ){

    return
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




      html += `

        <div>

          ${icon}

          ×

          ${player.materials[name]}

        </div>

      `;


    }

  );




  return html;


}
