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




  Object.assign(

    player,

    JSON.parse(
      saved
    )

  );




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




  localStorage.clear();




  player.hp = 30;

  player.maxHp = 30;

  player.atk = 5;

  player.crit = 5;

  player.gold = 0;




  renderPlayer();


  renderUpgradeTab();




  alert(
    "リセットしました"
  );


}
