// 現在装備中の装備
// player.equipment = { weapon: null, armor: null, accessory: null }

function initEquipment(){
  if(!player.equipment){
    player.equipment = { weapon: null, armor: null, accessory: null };
  }
}

// 素材が足りるか
function canCraft(recipe){
  const mats = recipe.materials;
  return Object.keys(mats).every(function(name){
    return (player.materials[name] || 0) >= mats[name];
  });
}

// 装備をクラフトして装備する
function craftEquipment(equipId){

  initEquipment();

  const equip = craftEquipments.find(function(e){ return e.id === equipId; });
  if(!equip){ return; }

  if(!canCraft(equip)){
    alert("素材が足りません");
    return;
  }

  if(!confirm(equip.name + " をクラフトして装備しますか？")){
    return;
  }

  // 素材消費
  Object.keys(equip.materials).forEach(function(name){
    player.materials[name] -= equip.materials[name];
  });

  // 前の装備効果を解除
  unequipSlot(equip.slot);

  // 新しい装備を適用
  player.equipment[equip.slot] = equip.id;
  applyEquipEffect(equip.effect);

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

  alert(equip.name + " を装備しました！");

}

// 装備解除
function unequipSlot(slot){

  initEquipment();

  const currentId = player.equipment[slot];
  if(!currentId){ return; }

  const current = craftEquipments.find(function(e){ return e.id === currentId; });
  if(!current){ return; }

  // 効果を取り消す
  removeEquipEffect(current.effect);

  player.equipment[slot] = null;

}

// 効果を適用
function applyEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk          += effect.atk;         }
  if(effect.maxHp)       { player.maxHp         += effect.maxHp;
                           player.hp = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.crit)        { player.crit          += effect.crit;        }
  if(effect.critMulti)   { player.critMulti     += effect.critMulti;   }
  if(effect.attackSpeed) { player.attackSpeed   += effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus || 0) + effect.goldBonus; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) + effect.rareChance; }
}

// 効果を取り消す
function removeEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk          -= effect.atk;         }
  if(effect.maxHp)       { player.maxHp         -= effect.maxHp;
                           if(player.hp > player.maxHp){ player.hp = player.maxHp; } }
  if(effect.crit)        { player.crit          -= effect.crit;        }
  if(effect.critMulti)   { player.critMulti     -= effect.critMulti;   }
  if(effect.attackSpeed) { player.attackSpeed   -= effect.attackSpeed; }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus || 0) - effect.goldBonus; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) - effect.rareChance; }
}

// アイテムクラフト
function craftItem(itemId){

  const item = craftItems.find(function(i){ return i.id === itemId; });
  if(!item){ return; }

  if(!canCraft(item)){
    alert("素材が足りません");
    return;
  }

  // 素材消費
  Object.keys(item.materials).forEach(function(name){
    player.materials[name] -= item.materials[name];
  });

  // 効果を即時適用
  if(itemId === "potion"){
    player.potions += 1;
  } else if(itemId === "bigPotion"){
    player.potions += 3;
  } else if(itemId === "expScroll"){
    player.exp += 50;
    checkLevelUpSafe();
  } else if(itemId === "goldScroll"){
    player.gold += 200;
  }

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

  alert(item.name + " を作成しました！");

}

function checkLevelUpSafe(){
  if(typeof checkLevelUp === "function"){
    checkLevelUp();
  } else {
    const needed = expToNextLevel(player.level);
    while(player.exp >= needed){
      player.exp   -= needed;
      player.level += 1;
      player.maxHp += 3;
      player.hp     = player.maxHp;
      player.atk   += 1;
      player.skillPoints = (player.skillPoints || 0) + 1;
    }
  }
}
