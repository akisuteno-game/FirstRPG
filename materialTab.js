function renderMaterialTab(){

  const tab = document.getElementById("materialTab");

  if(!tab){
    return;
  }

  const order = [
    "スライムゼリー",
    "キングゼリー",
    "ゴブリンの牙",
    "王族の牙",
    "オークの皮",
    "古代の皮",
    "竜のウロコ",
    "紅竜の心臓"
  ];

  let html = `<div class="materialArea">`;

  let hasAny = false;

  order.forEach(function(name){

    const amount = player.materials[name];

    if(!amount){
      return;
    }

    hasAny = true;

    const path = getMaterialPath(name);

    let icon = "？";

    if(path){
      icon = `<img src="${path}" onerror="this.outerHTML='？'">`;
    }

    html += `
      <div class="materialCard">
        ${icon}
        <br><br>
        ${name}
        <br><br>
        × ${amount}
      </div>
    `;

  });

  if(!hasAny){
    html += `<div style="color:white;padding:20px;">素材なし</div>`;
  }

  html += `</div>`;

  tab.innerHTML = html;

}
