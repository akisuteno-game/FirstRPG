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


    <button>
      HP強化
    </button>


    <button>
      攻撃強化
    </button>


    <button>
      クリ率強化
    </button>

  `;


}
