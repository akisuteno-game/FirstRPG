function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
    );


  if(
    !tab
  ){

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

        強化

      </h2>




      <button
        onclick="
          upgradeAtk()
        "
      >

        攻撃 +1
        （10G）

      </button>




      <br><br>




      <button
        onclick="
          upgradeHp()
        "
      >

        HP +5
        （10G）

      </button>




      <br><br>




      <button
        onclick="
          upgradeCrit()
        "
      >

        クリ率 +1%
        （10G）

      </button>




    </div>

  `;


}




function upgradeAtk(){


  if(
    player.gold < 10
  ){

    return;

  }




  player.gold -= 10;

  player.atk += 1;




  savePlayer();




  renderPlayer();


  renderUpgradeTab();


}




function upgradeHp(){


  if(
    player.gold < 10
  ){

    return;

  }




  player.gold -= 10;

  player.maxHp += 5;

  player.hp += 5;




  savePlayer();




  renderPlayer();


  renderUpgradeTab();


}




function upgradeCrit(){


  if(
    player.gold < 10
  ){

    return;

  }




  player.gold -= 10;

  player.crit += 1;




  savePlayer();




  renderPlayer();


  renderUpgradeTab();


}
