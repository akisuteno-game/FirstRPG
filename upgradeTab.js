function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML =

    "<h2>強化画面</h2>" +

    "<button onclick='upgradeAtk()'>" +

    "攻撃+1" +

    "</button>";


}




function upgradeAtk(){


  player.atk++;


  renderPlayer();


}
