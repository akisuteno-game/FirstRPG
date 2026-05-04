function renderBattle(){


  const area =

    document.getElementById(
      "battleArea"
    );




  if(
    !area
  ){

    return;

  }




  if(
    !currentEnemy
  ){

    area.innerHTML =
      "敵がいません";

    return;

  }




  area.innerHTML =

    renderEnemy()

    +

    renderEnemyHp()

    +

    renderGauges()

    +

    renderButtons();


}
