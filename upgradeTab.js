function upgradeAtk(){


  if(
    player.gold < 10
  ){

    return;

  }




  player.gold -= 10;

  player.atk += 1;




  savePlayer();




  renderPlayer();


  renderUpgradeTab();


}
