function hasSkill(id){
  return !!(player.skills && player.skills[id]);
}

function requiresMet(skill){
  return skill.requires.every(function(r){ return hasSkill(r); });
}

function canLearnSkill(skill){
  if(hasSkill(skill.id)){ return false; }
  if(!requiresMet(skill)){ return false; }
  const sp = (player.skillPoints||0) - (player.usedSkillPoints||0);
  return sp >= skill.cost;
}

function learnSkill(id){
  const skill = getSkillById(id);
  if(!skill || !canLearnSkill(skill)){ return; }
  if(!player.skills){ player.skills = {}; }
  player.skills[id] = true;
  player.usedSkillPoints = (player.usedSkillPoints||0) + skill.cost;
  applySkillEffect(skill.effect);
}

function applySkillEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk         += effect.atk; }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.crit)        { player.crit         += effect.crit;
                           if(player.crit > 95){ player.crit = 95; } }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti; }
  if(effect.goldBonus)   { player.goldBonus     = (player.goldBonus||0) + effect.goldBonus; }
  if(effect.rareChance)  { player.equipRareBonus= (player.equipRareBonus||0) + effect.rareChance; }
}

function getFreeSkillPoints(){
  return (player.skillPoints||0) - (player.usedSkillPoints||0);
}

function getSkillRareBonus(){
  let bonus = 0;
  if(!player.skills){ return bonus; }
  ["spc1","spc3","spc5","psn1","psn5","psn7","gth1","gth2","gth4","gth6","gth7","gth8"].forEach(function(id){
    if(player.skills[id]){
      const sk = getSkillById(id);
      if(sk && sk.effect && sk.effect.rareChance){ bonus += sk.effect.rareChance; }
    }
  });
  if(player.skills["spc6"]){ bonus += 0.05; }
  return bonus;
}
