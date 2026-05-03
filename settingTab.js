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
          saveGame()
        "
      >

        セーブ

      </button>


      <br><br>


      <button
        onclick="
          loadGame()
        "
      >

        ロード

      </button>


      <br><br>


      <button
        onclick="
          resetGame()
        "
      >

        リセット

      </button>


    </div>

  `;


}




function saveGame(){


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


  alert(
    "セーブしました"
  );


}




function loadGame(){


  const saved =

    localStorage.getItem(
      "playerData"
    );


  if(!saved){

    alert(
      "セーブデータなし"
    );

    return;

  }


  const data =

    JSON.parse(
      saved
    );


  player.hp =
    data.hp;


  player.maxHp =
    data.maxHp;


  player.atk =
    data.atk;


  player.crit =
    data.crit;


  renderPlayer();


  if(
    typeof renderUpgradeTab
    ===
    "function"
  ){

    renderUpgradeTab();

  }


  alert(
    "ロードしました"
  );


}




function resetGame(){


  if(
    !confirm(
      "データを消しますか？"
    )
  ){

    return;

  }




  localStorage.removeItem(
    "playerData"
  );


  localStorage.removeItem(
    "selectedEnemy"
  );




  player.hp = 100;

  player.maxHp = 100;

  player.atk = 10;

  player.crit = 5;




  renderPlayer();


  if(
    typeof renderUpgradeTab
    ===
    "function"
  ){

    renderUpgradeTab();

  }




  alert(
    "リセットしました"
  );


}
