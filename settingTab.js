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




      <button onclick="saveGame()">

        セーブ

      </button>




      <br><br>




      <button onclick="loadGame()">

        ロード

      </button>




      <br><br>




      <button onclick="resetGame()">

        リセット

      </button>




    </div>

  `;


}




function saveGame(){


  savePlayer();


  alert(
    "セーブしました"
  );


}




function loadGame(){


  loadPlayer();


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




  resetPlayer();




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
