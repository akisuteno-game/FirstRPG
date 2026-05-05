const RETURN_URL = "https://akisuteno-game.github.io/FirstRPG/index.html";

function attackEnemy(){

  if(!currentEnemy){ return; }

  const button = document.getElementById("attackBtn");
  if(button){ button.disabled = true; }

  playerGauge = 0;
  const gauge = document.getElementById("playerGauge");
  if(gauge){ gauge.style.width = "0%"; }

  // クリティカル判定
  const isCrit = Math.random() * 100 < player.crit;
  let dmg = player.atk;
  if(isCrit){ dmg = Math.floor(dmg * player.critMulti); }

  currentEnemy.hp -= dmg;
  if(currentEnemy.hp < 0){ currentEnemy.hp = 0; }

  showDamageNumber(dmg, isCrit, "enemy");

  if(isCrit){
    addLog("⚡ クリティカル！ " + dmg + " ダメージ！");
  } else {
    addLog("→ " + currentEnemy.name + " に " + dmg + " ダメージ");
  }

  updateEnemyUI();

  if(currentEnemy.hp <= 0){

    // GOLDボーナス（転生ボーナス）
    const rebirthGoldBonus = 0.03 * (player.rebirthCount || 0);
    const goldMult = 1 + (player.goldBonus || 0) + rebirthGoldBonus;
    const goldGain = Math.floor((currentEnemy.drop || 0) * goldMult);

    player.gold      += goldGain;
    player.exp       += currentEnemy.exp || 0;
    player.killCount += 1;

    // 通常素材
    if(currentEnemy.material){
      if(!player.materials[currentEnemy.material]){
        player.materials[currentEnemy.material] = 0;
      }
      player.materials[currentEnemy.material]++;
    }

    // レア素材
    const rareBonus = getSkillRareBonus();
    if(
      currentEnemy.rareMaterial
      && Math.random() < (currentEnemy.rareChance || 0.1) + rareBonus
    ){
      if(!player.materials[currentEnemy.rareMaterial]){
        player.materials[currentEnemy.rareMaterial] = 0;
      }
      player.materials[currentEnemy.rareMaterial]++;
      addLog("✨ レア素材「" + currentEnemy.rareMaterial + "」を入手！");
    }

    checkLevelUp();
    savePlayer();

    clearInterval(playerLoop);
    clearInterval(enemyLoop);

    addLog("🏆 " + currentEnemy.name + " を倒した！ GOLD +" + goldGain);

    setTimeout(function(){
      location.href = RETURN_URL;
    }, 800);

    return;

  }

  startPlayerGauge();

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

    setTimeout(function(){
      location.href = RETURN_URL;
    }, 1000);

    return;

  }

  updatePlayerHpUI();

}




function usePotion(){

  if(player.potions <= 0){ return; }

  const heal = Math.ceil(player.maxHp * 0.5);

  player.potions -= 1;
  player.hp      += heal;
  if(player.hp > player.maxHp){ player.hp = player.maxHp; }

  addLog("💊 ポーションを使った！ HP +" + heal);

  updatePlayerHpUI();
  refreshPotionButton();

}




function refreshPotionButton(){

  const btns = document.querySelectorAll(".battleBtn");

  btns.forEach(function(btn){
    if(btn.textContent.includes("ポーション")){
      btn.textContent = "ポーション（" + player.potions + "）";
    }
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




function updateEnemyUI(){

  const hpText = document.getElementById("enemyHpText");
  const hpBar  = document.getElementById("enemyHpFill");

  if(!hpText || !hpBar){ return; }

  hpText.innerHTML = currentEnemy.hp;

  const percent = (currentEnemy.hp / currentEnemy.maxHp) * 100;

  hpBar.style.width = percent + "%";

  if(percent > 70){
    hpBar.style.background = "lime";
  } else if(percent > 30){
    hpBar.style.background = "yellow";
  } else {
    hpBar.style.background = "red";
  }

}




function updatePlayerHpUI(){

  const bar = document.getElementById("battlePlayerHpFill");
  if(!bar){ return; }

  const percent = (player.hp / player.maxHp) * 100;

  bar.style.width = percent + "%";

  if(percent > 70){
    bar.style.background = "lime";
  } else if(percent > 30){
    bar.style.background = "yellow";
  } else {
    bar.style.background = "red";
  }

  const txt = document.getElementById("battlePlayerHpText");
  if(txt){ txt.textContent = player.hp + " / " + player.maxHp; }

}




function showDamageNumber(dmg, isCrit, target){

  const area = document.getElementById("battleArea");
  if(!area){ return; }

  const el = document.createElement("div");

  el.textContent = isCrit ? "CRIT! " + dmg : "-" + dmg;

  el.style.position      = "absolute";
  el.style.color         = isCrit ? "orange" : "white";
  el.style.fontSize      = isCrit ? "28px" : "20px";
  el.style.fontWeight    = "bold";
  el.style.pointerEvents = "none";
  el.style.zIndex        = "100";
  el.style.transition    = "all 0.8s ease";

  if(target === "enemy"){
    el.style.left = "55%";
    el.style.top  = "30%";
  } else {
    el.style.left = "20%";
    el.style.top  = "60%";
  }

  area.appendChild(el);

  setTimeout(function(){
    el.style.top     = target === "enemy" ? "15%" : "45%";
    el.style.opacity = "0";
  }, 50);

  setTimeout(function(){
    if(area.contains(el)){ area.removeChild(el); }
  }, 900);

}




function getSkillRareBonus(){

  let bonus = 0;

  if(!player.skills || typeof getSkillById !== "function"){ return bonus; }

  ["spc1","spc3","spc5"].forEach(function(id){
    if(player.skills[id]){
      const sk = getSkillById(id);
      if(sk && sk.effect && sk.effect.rareChance){
        bonus += sk.effect.rareChance;
      }
    }
  });

  if(player.skills["spc6"]){ bonus += 0.05; }

  return bonus;

}
