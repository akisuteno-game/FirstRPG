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
        "
      >

        攻撃 +1

      </button>


      <button
        onclick="
          player.crit++;
          renderPlayer();
        "
      >

        クリ率 +1%

      </button>


      <br><br>


      現在の攻撃力 :
      ${player.atk}


      <br><br>


      現在のクリ率 :
      ${player.crit}%


    </div>

  ";


}
