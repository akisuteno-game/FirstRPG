function startGame(){


  try{

    renderPlayer();

    renderEnemyTab();

    renderUpgradeTab();

    renderSettingTab();

  }


  catch(error){

    alert(
      error.message
    );

  }


}




document.addEventListener(

  "DOMContentLoaded",

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
