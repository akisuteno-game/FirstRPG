function initEquipment(){
  if(!player.equipment)     { player.equipment      = {weapon:null,armor:null,accessory:null}; }
  if(!player.equipStack)    { player.equipStack      = {weapon:[],armor:[],accessory:[]}; }
  if(!player.equippedEffects){ player.equippedEffects = {weapon:null,armor:null,accessory:null}; }
}

function canCraft(recipe){
  return Object.keys(recipe.materials).every(function(name){
    return (player.materials[name]||0) >= recipe.materials[name];
  });
}

function rollEffect(recipe){
  const effect = {};
  Object.keys(recipe.effectRange).forEach(function(stat){
    const range = recipe.effectRange[stat];
    const min = range[0], max = range[1];
    if(Number.isInteger(min) && Number.isInteger(max)){
      effect[stat] = Math.floor(Math.random()*(max-min+1))+min;
    } else {
      effect[stat] = Math.round((Math.random()*(max-min)+min)*100)/100;
    }
  });
  return effect;
}

function getEquipRarity(recipe, effect){
  let total = 0;
  const keys = Object.keys(recipe.effectRange);
  keys.forEach(function(stat){
    const r = recipe.effectRange[stat];
    total += (effect[stat]-r[0])/(r[1]-r[0]);
  });
  const avg = total/keys.length;
  if(avg >= 0.90){ return {label:"🔴 神話",color:"#ff4444"}; }
  if(avg >= 0.70){ return {label:"🟠 英雄",color:"#ff8800"}; }
  if(avg >= 0.50){ return {label:"🟡 優良",color:"#ffee44"}; }
  return {label:"⚪ 普通",color:"#888888"};
}

function craftEquipment(equipId){
  initEquipment();
  const recipe = craftEquipments.find(function(e){ return e.id === equipId; });
  if(!recipe || !canCraft(recipe)){ return; }
  const stack = player.equipStack[recipe.slot];
  if(stack.length >= EQUIP_STACK_MAX){ alert("所持品が満杯です"); return; }

  Object.keys(recipe.materials).forEach(function(name){
    player.materials[name] -= recipe.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  const effect = rollEffect(recipe);
  const rarity = getEquipRarity(recipe, effect);
  stack.push({
    recipeId: recipe.id, name: recipe.name,
    effect: effect, rarity: rarity.label,
    rarityColor: rarity.color, desc: buildEquipDesc(recipe, effect),
    equipped: false
  });
  savePlayer();
}

function equipFromStack(slot, index){
  initEquipment();
  const stack = player.equipStack[slot];
  if(!stack||!stack[index]){ return; }
  unequipCurrent(slot);
  applyEquipEffect(stack[index].effect);
  stack.forEach(function(s){ s.equipped = false; });
  stack[index].equipped = true;
  player.equipment[slot] = {recipeId:stack[index].recipeId, index:index};
  savePlayer();
}

function unequipCurrent(slot){
  initEquipment();
  const stack = player.equipStack[slot];
  if(!stack){ return; }
  const eq = stack.find(function(s){ return s.equipped; });
  if(eq){ removeEquipEffect(eq.effect); eq.equipped = false; }
  player.equipment[slot] = null;
}

function removeFromStack(slot, index){
  initEquipment();
  const stack = player.equipStack[slot];
  if(!stack||!stack[index]){ return; }
  if(stack[index].equipped){ unequipCurrent(slot); }
  stack.splice(index,1);
  savePlayer();
}

function applyEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk         += effect.atk; }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp = Math.min(player.hp+effect.maxHp, player.maxHp); }
  if(effect.crit)        { player.crit         += effect.crit; }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti; }
  if(effect.attackSpeed) { player.attackSpeed  -= effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus||0)   + effect.goldBonus/100; }
  if(effect.rareChance)  { player.equipRareBonus= (player.equipRareBonus||0) + effect.rareChance/100; }
}

function removeEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk         -= effect.atk; }
  if(effect.maxHp)       { player.maxHp        -= effect.maxHp;
                           if(player.hp > player.maxHp){ player.hp = player.maxHp; } }
  if(effect.crit)        { player.crit         -= effect.crit; }
  if(effect.critMulti)   { player.critMulti    -= effect.critMulti; }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed; }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus||0)   - effect.goldBonus/100; }
  if(effect.rareChance)  { player.equipRareBonus= (player.equipRareBonus||0) - effect.rareChance/100; }
}

function craftItem(itemId){
  const item = craftItems.find(function(i){ return i.id === itemId; });
  if(!item||!canCraft(item)){ return; }
  Object.keys(item.materials).forEach(function(name){
    player.materials[name] -= item.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });
  if(itemId === "potion")    { player.potions += 1; }
  else if(itemId === "bigPotion") { player.potions += 3; }
  else if(itemId === "expScroll") { player.exp += 50; checkLevelUpSafe(); }
  else if(itemId === "goldScroll"){ player.gold += 200; }
  savePlayer();
}

function checkLevelUpSafe(){
  let needed = expToNextLevel(player.level);
  while(player.exp >= needed){
    player.exp -= needed; player.level += 1;
    player.maxHp += 3; player.hp = player.maxHp; player.atk += 1;
    player.skillPoints = (player.skillPoints||0)+1;
    needed = expToNextLevel(player.level);
  }
}
