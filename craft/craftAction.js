function initEquipment(){
  if(!player.equipment){
    player.equipment = { weapon: null, armor: null, accessory: null };
  }
  if(!player.equippedEffects){
    player.equippedEffects = {};
  }
}

function canCraft(recipe){
  return Object.keys(recipe.materials).every(function(name){
    return (player.materials[name] || 0) >= recipe.materials[name];
  });
}

// ランダム効果を生成
function rollEffect(recipe){
  const effect = {};
  Object.keys(recipe.effectRange).forEach(function(stat){
    const range = recipe.effectRange[stat];
    const min   = range[0];
    const max   = range[1];
    if(Number.isInteger(min) && Number.isInteger(max)){
      effect[stat] = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      const val = Math.random() * (max - min) + min;
      effect[stat] = Math.round(val * 100) / 100;
    }
  });
  return effect;
}

// 装備のレア度判定（効果合計が高いほどレア）
function getEquipRarity(recipe, effect){
  let score = 0;
  Object.keys(recipe.effectRange).forEach(function(stat){
    const range = recipe.effectRange[stat];
    const val   = effect[stat];
    const ratio = (val - range[0]) / (range[1] - range[0]);
    score += ratio;
  });
  const avg = score / Object.keys(recipe.effectRange).length;

  if(avg >= 0.9) return { label: "★★★ 神話", color: "#ff4444" };
  if(avg >= 0.7) return { label: "★★☆ 英雄", color: "#ff8800" };
  if(avg >= 0.5) return { label: "★☆☆ 優良", color: "#ffee44" };
  return { label: "☆☆☆ 普通", color: "#aaaaaa" };
}

function craftEquipment(equipId){

  initEquipment();

  const recipe = craftEquipments.find(function(e){ return e.id === equipId; });
  if(!recipe){ return; }

  if(!canCraft(recipe)){
    alert("素材が足りません");
    return;
  }

  // ランダム効果を生成
  const effect   = rollEffect(recipe);
  const rarity   = getEquipRarity(recipe, effect);
  const desc     = buildEquipDesc(recipe, effect);

  if(!confirm(
    recipe.name + " をクラフトしますか？\n\n" +
    "レア度：" + rarity.label + "\n" + desc
  )){ return; }

  // 素材消費
  Object.keys(recipe.materials).forEach(function(name){
    player.materials[name] -= recipe.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  // 前の装備を外す
  unequipSlot(recipe.slot);

  // 装備セット
  player.equipment[recipe.slot]      = recipe.id;
  player.equippedEffects[recipe.slot] = effect;

  applyEquipEffect(effect);

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }
  if(typeof renderEnemyTab === "function"){ renderEnemyTab(); }

  alert(
    "✅ " + recipe.name + " を装備！\n\n" +
    "レア度：" + rarity.label + "\n" + desc
  );

}

function unequipSlot(slot){

  initEquipment();

  const effect = player.equippedEffects[slot];
  if(effect){ removeEquipEffect(effect); }

  player.equipment[slot]       = null;
  player.equippedEffects[slot] = null;

}

function applyEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk         += effect.atk; }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.crit)        { player.crit         += effect.crit; }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti; }
  if(effect.attackSpeed) { player.attackSpeed  -= effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus || 0) + effect.goldBonus; }
  if(effect.rareChance)  { player.equipRareBonus= (player.equipRareBonus || 0) + effect.rareChance; }
}

function removeEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk         -= effect.atk; }
  if(effect.maxHp)       { player.maxHp        -= effect.maxHp;
                           if(player.hp > player.maxHp){ player.hp = player.maxHp; } }
  if(effect.crit)        { player.crit         -= effect.crit; }
  if(effect.critMulti)   { player.critMulti    -= effect.critMulti; }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed; }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus || 0) - effect.goldBonus; }
  if(effect.rareChance)  { player.equipRareBonus= (player.equipRareBonus || 0) - effect.rareChance; }
}

function craftItem(itemId){

  const item = craftItems.find(function(i){ return i.id === itemId; });
  if(!item){ return; }

  if(!canCraft(item)){
    alert("素材が足りません");
    return;
  }

  Object.keys(item.materials).forEach(function(name){
    player.materials[name] -= item.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  if(itemId === "potion"){
    player.potions += 1;
    alert("回復ポーションを作成しました！");
  } else if(itemId === "bigPotion"){
    player.potions += 3;
    alert("大回復ポーションを作成しました！（ポーション×3）");
  } else if(itemId === "expScroll"){
    player.exp += 50;
    checkLevelUpSafe();
    alert("経験値 +50！");
  } else if(itemId === "goldScroll"){
    player.gold += 200;
    alert("GOLD +200！");
  }

  savePlayer();
  renderPlayer();
  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

function checkLevelUpSafe(){
  let needed = expToNextLevel(player.level);
  while(player.exp >= needed){
    player.exp   -= needed;
    player.level += 1;
    player.maxHp += 3;
    player.hp     = player.maxHp;
    player.atk   += 1;
    player.skillPoints = (player.skillPoints || 0) + 1;
    needed = expToNextLevel(player.level);
  }
}
