function getMaterialPath(name){

  const paths = {
    "スライムゼリー": "img/materials/slimeGel.png",
    "キングゼリー":   "img/materials/kingGel.png",
    "ゴブリンの牙":   "img/materials/goblinTooth.png",
    "王族の牙":       "img/materials/kingTooth.png",
    "オークの皮":     "img/materials/orcSkin.png",
    "古代の皮":       "img/materials/ancientSkin.png",
    "竜のウロコ":     "img/materials/dragonScale.png",
    "紅竜の心臓":     "img/materials/dragonHeart.png"
  };

  return paths[name] || null;

}
