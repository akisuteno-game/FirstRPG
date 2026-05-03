let currentEnemy = null;




document.addEventListener(

  "DOMContentLoaded",

  initBattle

);




function initBattle(){


  loadPlayer();


  renderPlayer();




  const saved =

    localStorage.getItem(
      "selectedEnemy"
    );




  if(!saved){

    return;

  }




  currentEnemy =

    JSON.parse(
      saved
    );




  const area =

    document.getElementById(
      "battleArea"
    );




  if(!area){

    return;

  }




  area.innerHTML =

    createBattleHTML();




  document
    .getElementById(
      "attackBtn"
    )
    .onclick =
      attackEnemy;




  startPlayerGauge();


  startEnemyGauge();


}
