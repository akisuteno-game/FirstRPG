function showTab(tabId){


  const pages =

    document.querySelectorAll(
      ".tabPage"
    );




  pages.forEach(

    function(page){

      page.classList.remove(
        "activePage"
      );

    }

  );




  const tab =

    document.getElementById(
      tabId
    );




  if(
    tab
  ){

      tab.classList.add(
        "activePage"
      );

  }


}





if(
  typeof renderEnemyTab
  ===
  "function"
){

  renderEnemyTab();

}




if(
  typeof renderUpgradeTab
  ===
  "function"
){

  renderUpgradeTab();

}




if(
  typeof renderMaterialTab
  ===
  "function"
){

  renderMaterialTab();

}




if(
  typeof renderSettingTab
  ===
  "function"
){

  renderSettingTab();

}




if(
  typeof renderPlayer
  ===
  "function"
){

  renderPlayer();

}
