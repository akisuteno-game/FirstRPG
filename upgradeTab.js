function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    攻撃力強化
    <br><br>

    <button>

      強化する

    </button>

  `;


}


renderUpgradeTab();
