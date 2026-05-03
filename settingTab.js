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


  const data =

    localStorage.getItem(
      "playerData"
    );


  if(!data){

    alert(
      "セーブデータなし"
    );

    return;

  }


  const saved =

    JSON.parse(
      data
    );


  player.hp =
    saved.hp;


  player.maxHp =
    saved.maxHp;


  player.atk =
    saved.atk;


  player.crit =
    saved.crit;


  renderPlayer();


  renderUpgradeTab();


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


  player.hp = 100;

  player.maxHp = 100;

  player.atk = 10;

  player.crit = 5;


  renderPlayer();


  renderUpgradeTab();


  alert(
    "リセットしました"
  );


}
