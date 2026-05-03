window.onload =
function(){


  try{

    renderPlayer();

  }catch(e){

    console.log(e);

  }


  try{

    renderEnemyTab();

  }catch(e){

    console.log(e);

  }


  try{

    renderUpgradeTab();

  }catch(e){

    console.log(e);

  }


  try{

    renderSettingTab();

  }catch(e){

    console.log(e);

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
