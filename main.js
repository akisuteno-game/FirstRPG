window.onload =
function(){


  renderPlayer();


  renderEnemyTab();


  renderUpgradeTab();


  renderSettingTab();


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
