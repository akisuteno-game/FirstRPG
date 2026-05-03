function renderSettingTab(){


  const tab =
    document.getElementById(
      "settingTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    <div
      style="
        padding:20px;
        color:white;
      "
    >

      <h2>
        設定画面
      </h2>


      <button
        onclick="
          location.reload();
        "
      >

        ゲーム再読み込み

      </button>


      <br><br>


      First RPG
      Settings


    </div>

  ";


}
