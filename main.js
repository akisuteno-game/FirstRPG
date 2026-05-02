window.onload = function(){


  if(
    typeof renderPlayer === "function"
  ){
    renderPlayer();
  }


  if(
    typeof renderEnemyTab === "function"
  ){
    renderEnemyTab();
  }


  if(
    typeof renderUpgradeTab === "function"
  ){
    renderUpgradeTab();
  }


  if(
    typeof renderSettingTab === "function"
  ){
    renderSettingTab();
  }


};




function showTab(tabId){


  document
    .querySelectorAll(
      ".tabPage"
    )
    .forEach(tab=>{

      tab.classList.remove(
        "activePage"
      );

    });


  const target =
    document.getElementById(
      tabId
    );


  if(target){

    target.classList.add(
      "activePage"
    );

  }


}
