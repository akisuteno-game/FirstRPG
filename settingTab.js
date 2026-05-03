function renderSettingTab(){


  const tab =
    document.getElementById(
      "settingTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML =

    "<h2>設定画面</h2>" +

    "<button onclick='location.reload()'>" +

    "リロード" +

    "</button>";


}
