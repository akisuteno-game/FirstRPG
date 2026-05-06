// スタック上限
const EQUIP_STACK_MAX = 5;

function initEquipment(){
  if(!player.equipment){
    player.equipment = { weapon: null, armor: null, accessory: null };
  }
  if(!player.equipStack){
    player.equipStack = { weapon: [], armor: [], accessory: [] };
  }
}

function canCraft(recipe){
  return Object.keys(recipe.materials).every(function(name){
    return (player.materials[name] || 0) >= recipe.materials[name];
  });
}

// ランダム効果生成
function rollEffect(recipe){
  const effect = {};
  Object.keys(recipe.effectRange).forEach(function(stat){
    const range = recipe.effectRange[stat];
    const min = range[0], max = range[1];
    if(Number.isInteger(min) && Number.isInteger(max)){
      effect[stat] = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      const val = Math.random() * (max - min) + min;
      effect[stat] = Math.round(val * 100) / 100;
    }
  });
  return effect;
}

// レア度計算
function getEquipRarity(recipe, effect){
  let total = 0;
  const keys = Object.keys(recipe.effectRange);
  keys.forEach(function(stat){
    const range = recipe.effectRange[stat];
    const ratio = (effect[stat] - range[0]) / (range[1] - range[0]);
    total += ratio;
  });
  const avg = total / keys.length;
  if(avg >= 0.90) return { label: "🔴 神話", color: "#ff4444", score: avg };
  if(avg >= 0.70) return { label: "🟠 英雄", color: "#ff8800", score: avg };
  if(avg >= 0.50) return { label: "🟡 優良", color: "#ffee44", score: avg };
  return { label: "⚪ 普通", color: "#888888", score: avg };
}

// クラフトしてスタックに追加
function craftEquipment(equipId){

  initEquipment();

  const recipe = craftEquipments.find(function(e){ return e.id === equipId; });
  if(!recipe){ return; }

  if(!canCraft(recipe)){
    alert("素材が足りません");
    return;
  }

  const stack = player.equipStack[recipe.slot];

  if(stack.length >= EQUIP_STACK_MAX){
    alert("スタックが満杯です（最大" + EQUIP_STACK_MAX + "個）\n装備か削除をしてください");
    return;
  }

  // 素材消費
  Object.keys(recipe.materials).forEach(function(name){
    player.materials[name] -= recipe.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  // ランダム効果生成
  const effect = rollEffect(recipe);
  const rarity = getEquipRarity(recipe, effect);
  const desc   = buildEquipDesc(recipe, effect);

  // スタックに追加
  stack.push({
    recipeId: recipe.id,
    name:     recipe.name,
    effect:   effect,
    rarity:   rarity.label,
    rarityColor: rarity.color,
    desc:     desc
  });

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

  alert("✅ " + recipe.name + " を作成！\n\nレア度：" + rarity.label + "\n" + desc + "\n\n「所持品」から装備できます");

}

// スタックの装備を装備する
function equipFromStack(slot, index){

  initEquipment();

  const stack = player.equipStack[slot];
  if(!stack || !stack[index]){ return; }

  const item = stack[index];

  // 現在の装備を外す
  unequipCurrent(slot);

  // 装備する
  player.equipment[slot] = { recipeId: item.recipeId, index: index };
  applyEquipEffect(item.effect);

  // スタック内で装備中フラグ
  stack.forEach(function(s){ s.equipped = false; });
  stack[index].equipped = true;

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

// 現在の装備を外す
function unequipCurrent(slot){

  initEquipment();

  const cur = player.equipment[slot];
  if(!cur){ return; }

  const stack = player.equipStack[slot];
  const equipped = stack.find(function(s){ return s.equipped; });

  if(equipped){
    removeEquipEffect(equipped.effect);
    equipped.equipped = false;
  }

  player.equipment[slot] = null;

}

// スタックから削除
function removeFromStack(slot, index){

  initEquipment();

  const stack = player.equipStack[slot];
  if(!stack || !stack[index]){ return; }

  if(stack[index].equipped){
    unequipCurrent(slot);
  }

  stack.splice(index, 1);

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

function applyEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk        += effect.atk;        }
  if(effect.maxHp)       { player.maxHp       += effect.maxHp;
                           player.hp = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.crit)        { player.crit        += effect.crit;       }
  if(effect.critMulti)   { player.critMulti   += effect.critMulti;  }
  if(effect.attackSpeed) { player.attackSpeed -= effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.goldBonus)   { player.goldBonus    = (player.goldBonus    || 0) + effect.goldBonus / 100; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) + effect.rareChance / 100; }
}

function removeEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk        -= effect.atk;        }
  if(effect.maxHp)       { player.maxHp       -= effect.maxHp;
                           if(player.hp > player.maxHp){ player.hp = player.maxHp; } }
  if(effect.crit)        { player.crit        -= effect.crit;       }
  if(effect.critMulti)   { player.critMulti   -= effect.critMulti;  }
  if(effect.attackSpeed) { player.attackSpeed += effect.attackSpeed; }
  if(effect.goldBonus)   { player.goldBonus    = (player.goldBonus    || 0) - effect.goldBonus / 100; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) - effect.rareChance / 100; }
}

// アイテムクラフト
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

  if(itemId === "potion")     { player.potions += 1;  alert("回復ポーション ×1 作成！"); }
  else if(itemId === "bigPotion"){ player.potions += 3;  alert("大回復ポーション ×3 作成！"); }
  else if(itemId === "expScroll"){ player.exp += 50; checkLevelUpSafe(); alert("EXP +50！"); }
  else if(itemId === "goldScroll"){ player.gold += 200; alert("GOLD +200！"); }

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
