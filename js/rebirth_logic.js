function canRebirth(){ return player.level >= REBIRTH_LEVEL; }

function hasRebirthSkill(id){
  return !!(player.rebirthSkills && player.rebirthSkills[id]);
}

function getFreeRebirthPoints(){
  return (player.rebirthPoints||0) - (player.usedRebirthPoints||0);
}

function learnRebirthSkill(id){
  const skill = rebirthSkillMap.find(function(s){ return s.id === id; });
  if(!skill){ return; }
  if(hasRebirthSkill(id)){ return; }
  if(!skill.requires.every(function(r){ return hasRebirthSkill(r); })){ return; }
  if(getFreeRebirthPoints() < skill.cost){ return; }
  if(!player.rebirthSkills){ player.rebirthSkills = {}; }
  player.rebirthSkills[id] = true;
  player.usedRebirthPoints = (player.usedRebirthPoints||0) + skill.cost;
  applyRebirthSkillEffects();
}

function applyRebirthSkillEffects(){
  let atkMult=1, hpMult=1, goldMult=1, spdMult=1;
  let critBonus=0, dropBonus=0, critMultiBonus=0;

  rebirthSkillMap.forEach(function(skill){
    if(!hasRebirthSkill(skill.id)){ return; }
    const e = skill.effect;
    if(!e){ return; }
    if(e.atkPercent)     { atkMult        += e.atkPercent;      }
    if(e.hpPercent)      { hpMult         += e.hpPercent;       }
    if(e.goldPercent)    { goldMult        += e.goldPercent;     }
    if(e.speedPercent)   { spdMult         += e.speedPercent;   }
    if(e.critFlat)       { critBonus       += e.critFlat;        }
    if(e.rareChanceFlat) { dropBonus       += e.rareChanceFlat; }
    if(e.critMultiFlat)  { critMultiBonus  += e.critMultiFlat;  }
    if(e.allPercent){
      atkMult += e.allPercent; hpMult += e.allPercent;
      goldMult+= e.allPercent; spdMult+= e.allPercent;
    }
  });

  player.rebirthAtkMult        = atkMult;
  player.rebirthHpMult         = hpMult;
  player.rebirthGoldMult       = goldMult;
  player.rebirthSpdMult        = spdMult;
  player.rebirthCritBonus      = critBonus;
  player.rebirthDropBonus      = dropBonus;
  player.rebirthCritMultiBonus = critMultiBonus;
}

function doConfirmRebirth(){
  player.rebirthCount      = (player.rebirthCount || 0) + 1;
  player.rebirthPoints     = (player.rebirthPoints || 0) + 3;
  player.usedRebirthPoints = player.usedRebirthPoints || 0;
  if(!player.rebirthSkills){ player.rebirthSkills = {}; }
  player.rebirthSkills["r_core"] = true;

  player.level = 1; player.exp = 0; player.gold = 0;
  player.skillPoints = 0; player.usedSkillPoints = 0; player.skills = {};

  player.atk         = defaultPlayer.atk;
  player.maxHp       = defaultPlayer.maxHp;
  player.hp          = defaultPlayer.maxHp;
  player.attackSpeed = defaultPlayer.attackSpeed;
  player.crit        = defaultPlayer.crit;
  player.critMulti   = defaultPlayer.critMulti;

  applyRebirthSkillEffects();
  savePlayer();
}
