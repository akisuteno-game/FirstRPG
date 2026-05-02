function renderSettingTab(){


  const tab =
    document.getElementById(
      "settingTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    <h2>設定</h2>

    <button>
      セーブ
    </button>

    <br><br>

    <button>
      ロード
    </button>

    <br><br>

    <button>
      リセット
    </button>

  `;


}
