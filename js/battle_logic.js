const RETURN_URL = "https://akisuteno-game.github.io/FirstRPG/";

let playerGauge = 0, enemyGauge = 0;
let playerLoop  = null, enemyLoop = null;

function startPlayerGauge(){
  clearInterval(playerLoop);
  playerGauge = 0;
  const bar    = document.getElementById("playerGauge");
  const button = document.getElementById("attackBtn");
  if(bar)   { bar.style.width   = "0%"; }
  if(button){ button.disabled   = true; }
  playerLoop = setInterval(function(){
    playerGauge += (16 / player.attackSpeed) * 100;
    if(playerGauge >= 100){
      playerGauge = 100;
      clearInterval(playerLoop);
      if(button){ button.disabled = false; }
    }
    if(bar){ bar.style.width = playerGauge + "%"; }
  }, 16);
}

function startEnemyGauge(){
  clearInterval(enemyLoop);
  enemyGauge = 0;
  const bar = document.getElementById("enemyGauge");
  if(bar){ bar.style.width = "0%"; }
  enemyLoop = setInterval(function(){
    enemyGauge += (16 / currentEnemy.speed) * 100;
    if(enemyGauge >= 100){
      enemyGauge = 0;
      enemyAttack();
    }
    if(bar){ bar.style.width = enemyGauge + "%"; }
  }, 16);
}

function attackEnemy(){
  if(!currentEnemy){ return; }
  const button = document.getElementById("attackBtn");
  if(button){ button.disabled = true; }
  playerGauge = 0;
  const gauge = document.getElementById("playerGauge");
  if(gauge){ gauge.style.width = "0%"; }

  const isCrit = Math.random() * 100 < player.crit;
  let dmg = player.atk;
  if(isCrit){ dmg = Math.floor(dmg * player.critMulti); }

  currentEnemy.hp -= dmg;
  if(currentEnemy.hp < 0){ currentEnemy.hp = 0; }

  showDamageNumber(dmg, isCrit, "enemy");
  addLog(isCrit ? "⚡ CRIT! " + dmg + " ダメージ！" : "→ " + dmg + " ダメージ");
  updateEnemyUI();

  if(currentEnemy.hp <= 0){ onEnemyDefeated(); return; }
  startPlayerGauge();
}

function onEnemyDefeated(){
  const rebirthGoldBonus = 0.03 * (player.rebirthCount || 0);
  const goldMult = 1 + (player.goldBonus || 0) + rebirthGoldBonus;
  const goldGain = Math.floor((currentEnemy.drop || 0) * goldMult);

  player.gold      += goldGain;
  player.exp       += currentEnemy.exp || 0;
  player.killCount += 1;

  if(currentEnemy.material){
    if(!player.materials[currentEnemy.material]){ player.materials[currentEnemy.material] = 0; }
    player.materials[currentEnemy.material]++;
  }

  const rareBonus = (typeof getSkillRareBonus === "function") ? getSkillRareBonus() : 0;
  if(currentEnemy.rareMaterial && Math.random() < (currentEnemy.rareChance || 0.1) + rareBonus){
    if(!player.materials[currentEnemy.rareMaterial]){ player.materials[currentEnemy.rareMaterial] = 0; }
    player.materials[currentEnemy.rareMaterial]++;
    addLog("✨ レア素材「" + currentEnemy.rareMaterial + "」を入手！");
  }

  checkLevelUp();
  savePlayer();
  clearInterval(playerLoop);
  clearInterval(enemyLoop);
  addLog("🏆 " + currentEnemy.name + " を倒した！ GOLD +" + goldGain);
  setTimeout(function(){ location.href = RETURN_URL; }, 800);
}

function enemyAttack(){
  const dmg = currentEnemy.atk;
  player.hp -= dmg;
  if(player.hp < 0){ player.hp = 0; }
  showDamageNumber(dmg, false, "player");
  addLog("← " + currentEnemy.name + " の攻撃！ " + dmg + " ダメージ");
  if(player.hp <= 0){
    clearInterval(playerLoop);
    clearInterval(enemyLoop);
    addLog("💀 やられた...");
    savePlayer();
    setTimeout(function(){ location.href = RETURN_URL; }, 1000);
    return;
  }
  updatePlayerHpUI();
}

function usePotion(){
  if(player.potions <= 0){ return; }
  const heal = Math.ceil(player.maxHp * 0.5);
  player.potions -= 1;
  player.hp = Math.min(player.hp + heal, player.maxHp);
  addLog("💊 ポーション使用！ HP +" + heal);
  updatePlayerHpUI();
  const btns = document.querySelectorAll(".battleBtn");
  btns.forEach(function(b){
    if(b.textContent.includes("ポーション")){ b.textContent = "ポーション（" + player.potions + "）"; }
  });
}

function checkLevelUp(){
  const needed = expToNextLevel(player.level);
  if(player.exp >= needed){
    player.exp   -= needed;
    player.level += 1;
    player.maxHp += 3;
    player.hp     = player.maxHp;
    player.atk   += 1;
    player.skillPoints = (player.skillPoints || 0) + 1;
    addLog("🌟 レベルアップ！ Lv." + player.level + " SP +1");
  }
}
