renderPlayer();

renderEnemyTab();

renderUpgradeTab();

renderMaterialTab();

renderSettingTab();




function showTab(id){


  document

    .querySelectorAll(
      ".tabPage"
    )

    .forEach(


      function(tab){


        tab.classList.remove(
          "activePage"
        );


      }


    );




  document

    .getElementById(
      id
    )

    .classList.add(
      "activePage"
    );


}
