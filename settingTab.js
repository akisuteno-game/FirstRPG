function renderSettingTab(){


  const tab =
    document.getElementById(
      "settingTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    <h2>
      設定
    </h2>


    <button>
      セーブ
    </button>


    <button>
      ロード
    </button>


    <button>
      リセット
    </button>

  `;


}
