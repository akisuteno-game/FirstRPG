function renderUpgradeTab(){


  const tab =
    document.getElementById(
      "upgradeTab"
    );


  if(!tab){

    return;

  }


  tab.innerHTML = `

    <h2>強化</h2>

    <button>
      攻撃力アップ
    </button>

    <br><br>

    <button>
      HPアップ
    </button>

    <br><br>

    <button>
      クリ率アップ
    </button>

  `;


}
