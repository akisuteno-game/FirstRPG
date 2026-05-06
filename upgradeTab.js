function getUpgradeCost(base, level){
  return base + Math.floor(level * 1.5);
}

function renderUpgradeTab(){

  const tab = document.getElementById("upgradeTab");
  if(!tab){ return; }

  const atkCost   = getUpgradeCost(10, player.atk);
  const hpCost    = getUpgradeCost(10, Math.floor(player.maxHp / 5));
  const critCost  = getUpgradeCost(15, player.crit);
  const speedLevel = Math.floor((2000 - player.attackSpeed) / 100);
  const speedCost = getUpgradeCost(20, speedLevel);

  const critMax  = 80;
  const speedMin = 400;

  tab.innerHTML = `
    <div style="padding:16px;color:white;">

      <h2 style="font-size:16px;margin-bottom:14px;">強化</h2>

      <button onclick="upgradeAtk()" style="
        display:block;width:100%;min-width:unset;min-height:unset;
        height:52px;font-size:15px;margin-bottom:10px;
        background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
      ">
        ⚔️ 攻撃 +1
        <span style="float:right;color:#ffcc44;">${atkCost}G</span>
      </button>

      <button onclick="upgradeHp()" style="
        display:block;width:100%;min-width:unset;min-height:unset;
        height:52px;font-size:15px;margin-bottom:10px;
        background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
      ">
        ❤️ 最大HP +5
        <span style="float:right;color:#ffcc44;">${hpCost}G</span>
      </button>

      <button onclick="upgradeCrit()"
        ${player.crit >= critMax ? "disabled" : ""}
        style="
          display:block;width:100%;min-width:unset;min-height:unset;
          height:52px;font-size:15px;margin-bottom:10px;
          background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
          ${player.crit >= critMax ? "opacity:0.4;" : ""}
      ">
        💥 クリ率 +1%
        <span style="float:right;color:${player.crit >= critMax ? "#555" : "#ffcc44"};">
          ${player.crit >= critMax ? "上限(80%)" : critCost + "G"}
        </span>
      </button>

      <button onclick="upgradeSpeed()"
        ${player.attackSpeed <= speedMin ? "disabled" : ""}
        style="
          display:block;width:100%;min-width:unset;min-height:unset;
          height:52px;font-size:15px;margin-bottom:10px;
          background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
          ${player.attackSpeed <= speedMin ? "opacity:0.4;" : ""}
      ">
        ⚡ 攻撃速度 -100ms
        <span style="float:right;color:${player.attackSpeed <= speedMin ? "#555" : "#ffcc44"};">
          ${player.attackSpeed <= speedMin ? "上限" : speedCost + "G"}
        </span>
      </button>

    </div>
  `;

}

function upgradeAtk(){
  const cost = getUpgradeCost(10, player.atk);
  if(player.gold < cost){ return; }
  player.gold -= cost;
  player.atk  += 1;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeHp(){
  const cost = getUpgradeCost(10, Math.floor(player.maxHp / 5));
  if(player.gold < cost){ return; }
  player.gold   -= cost;
  player.maxHp  += 5;
  player.hp     += 5;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeCrit(){
  const cost = getUpgradeCost(15, player.crit);
  if(player.gold < cost || player.crit >= 80){ return; }
  player.gold -= cost;
  player.crit += 1;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeSpeed(){
  const speedLevel = Math.floor((2000 - player.attackSpeed) / 100);
  const cost = getUpgradeCost(20, speedLevel);
  if(player.gold < cost || player.attackSpeed <= 400){ return; }
  player.gold        -= cost;
  player.attackSpeed -= 100;
  if(player.attackSpeed < 400){ player.attackSpeed = 400; }
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}
