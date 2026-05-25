const RETURN_URL = "https://akisuteno-game.github.io/FirstRPG/";

let playerGauge  = 0;
let enemyGauge   = 0;
let playerRafId  = null;
let enemyRafId   = null;
let lastPlayerTs = null;
let lastEnemyTs  = null;

// ゲージバーをtransform:scaleXで動かす（widthより高速）
function setGaugeBar(id, pct){
  const bar = document.getElementById(id);
  if(!bar){ return; }
  const scale = Math.min(Math.max(pct / 100, 0), 1);
  bar.style.transform       = "scaleX(" + scale + ")";
  bar.style.transformOrigin = "left center";
}

// ─── プレイヤーゲージ ────────────────────────
function startPlayerGauge(){
  if(playerRafId){ cancelAnimationFrame(playerRafId); playerRafId = null; }
  playerGauge  = 0;
  lastPlayerTs = null;

  const button = document.getElementById("attackBtn");
  if(button){ button.disabled = true; }
  setGaugeBar("playerGauge", 0);

  function step(ts){
    if(lastPlayerTs === null){ lastPlayerTs = ts; }
    const delta  = Math.min(ts - lastPlayerTs, 100); // 最大100msにクランプ
    lastPlayerTs = ts;

    playerGauge += (delta / player.attackSpeed) * 100;

    if(playerGauge >= 100){
      playerGauge = 100;
      setGaugeBar("playerGauge", 100);
      if(button){ button.disabled = false; }
      playerRafId = null;
      return;
    }

    setGaugeBar("playerGauge", playerGauge);
    playerRafId = requestAnimationFrame(step);
  }

  playerRafId = requestAnimationFrame(step);
}

function stopPlayerGauge(){
  if(playerRafId){ cancelAnimationFrame(playerRafId); playerRafId = null; }
}

// ─── 敵ゲージ ────────────────────────────────
function startEnemyGauge(){
  if(enemyRafId){ cancelAnimationFrame(enemyRafId); enemyRafId = null; }
  enemyGauge  = 0;
  lastEnemyTs = null;

  setGaugeBar("enemyGauge", 0);

  function step(ts){
    if(lastEnemyTs === null){ lastEnemyTs = ts; }
    const delta = Math.min(ts - lastEnemyTs, 100);
    lastEnemyTs = ts;

    enemyGauge += (delta / currentEnemy.speed) * 100;

    if(enemyGauge >= 100){
      enemyGauge  = 0;
      lastEnemyTs = null;
      setGaugeBar("enemyGauge", 0);

      enemyAttack();

      if(player.hp > 0){
        enemyRafId = requestAnimationFrame(step);
      }
      return;
    }

    setGaugeBar("enemyGauge", enemyGauge);
    enemyRafId = requestAnimationFrame(step);
  }

  enemyRafId = requestAnimationFrame(step);
}

function stopEnemyGauge(){
  if(enemyRafId){ cancelAnimationFrame(enemyRafId); enemyRafId = null; }
}

// ─── 攻撃 ────────────────────────────────────
function attackEnemy(){
  if(!currentEnemy){ return; }

  const button = document.getElementById("attackBtn");
  if(button){ button.disabled = true; }
  playerGauge = 0;
  setGaugeBar("playerGauge", 0);

  const isCrit = Math.random() * 100 < player.crit;
  var dmg = player.atk;
  if(isCrit){ dmg = Math.floor(dmg * player.critMulti); }

  currentEnemy.hp -= dmg;
  if(currentEnemy.hp < 0){ currentEnemy.hp = 0; }

  showDamageNumber(dmg, isCrit, "enemy");
  addLog(isCrit ? "⚡ CRIT! " + dmg + " ダメージ！" : "→ " + dmg + " ダメージ");
  updateEnemyUI();

  if(currentEnemy.hp <= 0){
    stopPlayerGauge();
    stopEnemyGauge();
    onEnemyDefeated();
    return;
  }

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
  addLog("🏆 " + currentEnemy.name + " を倒した！ GOLD +" + goldGain);
  setTimeout(function(){ location.href = RETURN_URL; }, 800);
}

// ─── 敵攻撃 ──────────────────────────────────
function enemyAttack(){
  if(!currentEnemy){ return; }
  var dmg = currentEnemy.atk;
  player.hp -= dmg;
  if(player.hp < 0){ player.hp = 0; }
  showDamageNumber(dmg, false, "player");
  addLog("← " + currentEnemy.name + " の攻撃！ " + dmg + " ダメージ");

  if(player.hp <= 0){
    stopPlayerGauge();
    stopEnemyGauge();
    addLog("💀 やられた...");
    savePlayer();
    setTimeout(function(){ location.href = RETURN_URL; }, 1000);
    return;
  }
  updatePlayerHpUI();
}

// ─── ポーション ──────────────────────────────
function usePotion(){
  if(player.potions <= 0){ return; }
  var heal = Math.ceil(player.maxHp * 0.5);
  player.potions -= 1;
  player.hp = Math.min(player.hp + heal, player.maxHp);
  addLog("💊 ポーション使用！ HP +" + heal);
  updatePlayerHpUI();
  document.querySelectorAll(".battleBtn").forEach(function(b){
    if(b.textContent.includes("ポーション")){
      b.textContent = "ポーション（" + player.potions + "）";
    }
  });
}

// ─── レベルアップ ────────────────────────────
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
