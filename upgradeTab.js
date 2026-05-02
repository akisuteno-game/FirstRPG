function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    <h2>
      強化
    </h2>


    HP強化

    <br><br>

    攻撃強化

    <br><br>

    クリ率強化

  `;


}
