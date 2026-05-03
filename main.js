window.onload =
function(){


  safeRender(
    renderPlayer
  );


  safeRender(
    renderEnemyTab
  );


  safeRender(
    renderUpgradeTab
  );


  safeRender(
    renderSettingTab
  );


};




function safeRender(fn){


  if(
    typeof fn
    !==
    "function"
  ){

    return;

  }


  try{

    fn();

  }

  catch(error){

    console.log(
      error
    );

  }


}




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
