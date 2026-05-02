function renderSettingTab(){


  const tab =
    document.getElementById(
      "settingTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    設定画面
    <br><br>

    音量：
    100%

  `;


}


renderSettingTab();
