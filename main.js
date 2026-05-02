document.addEventListener(
  "DOMContentLoaded",

  function(){


    renderPlayer();

    renderEnemyTab();

    renderUpgradeTab();

    renderSettingTab();


  }

);




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


  document
    .getElementById(
      tabId
    )
    .classList.add(
      "activePage"
    );


}
