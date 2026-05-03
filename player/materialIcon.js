function getMaterialPath(name){


  const paths = {

    "スライムゼリー":
    "img/materials/slimeGel.png",




    "キングゼリー":
    "img/materials/kingGel.png",




    "ゴブリンの牙":
    "img/materials/goblinTooth.png",




    "王族の牙":
    "img/materials/kingTooth.png"

  };




  return paths[name] || null;


}
