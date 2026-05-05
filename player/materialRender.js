function createMaterialHTML(){

  if(!player.materials){
    return "なし";
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

  let html = "";

  order.forEach(function(name){

    const amount = player.materials[name];

    if(!amount){
      return;
    }

    const path = getMaterialPath(name);

    let icon = "？";

    if(path){
      icon = `<img src="${path}" width="22" onerror="this.outerHTML='？'">`;
    }

    html += `<div>${icon} × ${amount}</div>`;

  });

  if(html === ""){
    return "なし";
  }

  return html;

}
