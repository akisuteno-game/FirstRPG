function getUpgradeCost(base, current){
  return base + Math.floor(current * 1.5);
}




function renderUpgradeTab(){

  const tab = document.getElementById("upgradeTab");

  if(!tab){
    return;
  }

  const atkCost    = getUpgradeCost(10, player.atk);
  const hpCost     = getUpgradeCost(10, player.maxHp / 5);
  const critCost   = getUpgradeCost(15, player.crit);
  const speedCost  = getUpgradeCost(20, Math.floor((2000 - player.attackSpeed) / 100));
  const potionCost = 20;

  const speedMin = 400;
  const critMax  = 80;

  tab.innerHTML = `
    <div style="padding:20px;color:white;">

      <h2>強化</h2><br>

      <button onclick="upgradeAtk()">
        攻撃 +1<br>
        <span style="font-size:14px;">${atkCost}G</span>
      </button>
      <br><br>

      <button onclick="upgradeHp()">
        最大HP +5<br>
        <span style="font-size:14px;">${hpCost}G</span>
      </button>
      <br><br>

      <button
        onclick="upgradeCrit()"
        ${player.crit >= critMax ? "disabled" : ""}
      >
        クリ率 +1%<br>
        <span style="font-size:14px;">${player.crit >= critMax ? "上限" : critCost + "G"}</span>
      </button>
      <br><br>

      <button
        onclick="upgradeSpeed()"
        ${player.attackSpeed <= speedMin ? "disabled" : ""}
      >
        攻撃速度 +<br>
        <span style="font-size:14px;">${player.attackSpeed <= speedMin ? "上限" : speedCost + "G"}</span>
      </button>
      <br><br>

      <hr style="border-color:#444;margin:10px 0;">
      <br>

      <div style="font-size:14px;margin-bottom:8px;">
        ポーション作成（スライムゼリー×3）
      </div>
      <button onclick="craftPotion()">
        ポーション +1<br>
        <span style="font-size:14px;">素材消費</span>
      </button>

    </div>
  `;

}




function upgradeAtk(){

  const cost = getUpgradeCost(10, player.atk);

  if(player.gold < cost){
    return;
  }

  player.gold -= cost;
  player.atk  += 1;

  savePlayer();
  renderPlayer();
  renderUpgradeTab();

}




function upgradeHp(){

  const cost = getUpgradeCost(10, player.maxHp / 5);

  if(player.gold < cost){
    return;
  }

  player.gold   -= cost;
  player.maxHp  += 5;
  player.hp     += 5;

  savePlayer();
  renderPlayer();
  renderUpgradeTab();

}




function upgradeCrit(){

  const cost = getUpgradeCost(15, player.crit);

  if(player.gold < cost || player.crit >= 80){
    return;
  }

  player.gold -= cost;
  player.crit += 1;

  savePlayer();
  renderPlayer();
  renderUpgradeTab();

}




function upgradeSpeed(){

  const cost = getUpgradeCost(20, Math.floor((2000 - player.attackSpeed) / 100));
  const speedMin = 400;

  if(player.gold < cost || player.attackSpeed <= speedMin){
    return;
  }

  player.gold        -= cost;
  player.attackSpeed -= 100;

  if(player.attackSpeed < speedMin){
    player.attackSpeed = speedMin;
  }

  savePlayer();
  renderPlayer();
  renderUpgradeTab();

}




function craftPotion(){

  const need = "スライムゼリー";
  const cost = 3;

  if(
    !player.materials[need]
    || player.materials[need] < cost
  ){
    alert("スライムゼリーが足りません（3個必要）");
    return;
  }

  player.materials[need] -= cost;
  player.potions         += 1;

  savePlayer();
  renderPlayer();
  renderUpgradeTab();

}
