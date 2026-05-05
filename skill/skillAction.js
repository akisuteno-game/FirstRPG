// 取得済みスキルを player.skills から確認
function hasSkill(id){
  return !!(player.skills && player.skills[id]);
}

// 前提スキルが全部取得済みか
function requiresMet(skill){
  return skill.requires.every(function(req){
    return hasSkill(req);
  });
}

// スキル取得可能か
function canLearnSkill(skill){
  if(hasSkill(skill.id))       { return false; }
  if(!requiresMet(skill))      { return false; }
  const sp = (player.skillPoints || 0) - (player.usedSkillPoints || 0);
  if(sp < skill.cost)          { return false; }
  return true;
}

// スキルを取得する
function learnSkill(skillId){

  const skill = getSkillById(skillId);

  if(!skill || !canLearnSkill(skill)){ return; }

  if(!player.skills){ player.skills = {}; }

  player.skills[skillId] = true;

  player.usedSkillPoints =
    (player.usedSkillPoints || 0) + skill.cost;

  savePlayer();
  renderPlayer();

  if(typeof renderSkillTab === "function"){
    renderSkillTab();
  }

}

// 全スキル効果をプレイヤーに適用（ロード時・転生後に呼ぶ）
function applyAllSkillEffects(){

  if(!player.skills){ return; }

  Object.keys(player.skills).forEach(function(id){

    const skill = getSkillById(id);

    if(!skill){ return; }

    applySkillEffect(skill.effect);

  });

}

function applySkillEffect(effect){

  if(!effect){ return; }

  if(effect.atk)         { player.atk         += effect.atk;         }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp            = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.crit)        { player.crit         += effect.crit;
                           if(player.crit > 95){ player.crit = 95; } }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti;   }

  // goldBonus・rareChance・potionCostHalf・allPercent はバトル/アクション時に参照

}

// 残りスキルポイントを取得
function getFreeSkillPoints(){
  return (player.skillPoints || 0) - (player.usedSkillPoints || 0);
}
