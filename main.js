function showTab(tabId){

  document
    .querySelectorAll(".tabPage")
    .forEach(tab=>{

      tab.classList.remove(
        "activePage"
      );

    });

  document
    .getElementById(tabId)
    .classList.add(
      "activePage"
    );

}



function initGame(){

  if(
    typeof renderPlayer === "function"
  ){
    renderPlayer();
  }


  if(
    typeof createEnemyTab === "function"
  ){
    createEnemyTab();
  }


  if(
    typeof createUpgradeTab === "function"
  ){
    createUpgradeTab();
  }


  if(
    typeof createSettingTab === "function"
  ){
    createSettingTab();
  }

}


window.onload = initGame;
