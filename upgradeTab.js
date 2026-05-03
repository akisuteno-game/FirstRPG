function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
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

        強化画面

      </h2>


      <button
        onclick="
          player.atk++;
          renderPlayer();
          renderUpgradeTab();
        "
      >

        攻撃 +1

      </button>


      <br><br>


      <button
        onclick="
          player.crit++;
          renderPlayer();
          renderUpgradeTab();
        "
      >

        クリ率 +1%

      </button>


      <br><br>


      攻撃力 :

      ${player.atk}


      <br><br>


      クリ率 :

      ${player.crit}%


    </div>

  `;


}
