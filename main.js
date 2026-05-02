function startGame(){


  if(
    typeof renderPlayer ===
    "function"
  ){

    renderPlayer();

  }



  if(
    typeof renderEnemyTab ===
    "function"
  ){

    renderEnemyTab();

  }



  if(
    typeof renderUpgradeTab ===
    "function"
  ){

    renderUpgradeTab();

  }



  if(
    typeof renderSettingTab ===
    "function"
  ){

    renderSettingTab();

  }


}




startGame();




document.addEventListener(

  "DOMContentLoaded",

  startGame

);




window.addEventListener(

  "load",

  startGame

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
