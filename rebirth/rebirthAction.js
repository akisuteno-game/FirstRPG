function canRebirth(){
  return player.level >= REBIRTH_LEVEL;
}

function doRebirth(){

  if(!canRebirth()){
    alert("転生には Lv." + REBIRTH_LEVEL + " が必要です");
    return;
  }

  // 転生専用画面に遷移
  showRebirthScreen();

}

function confirmRebirth(){

  player.rebirthCount     = (player.rebirthCount || 0) + 1;
  player.rebirthPoints    = (player.rebirthPoints || 0) + 3;
  player.usedRebirthPoints = player.usedRebirthPoints || 0;
  if(!player.rebirthSkills){ player.rebirthSkills = {}; }

  // r_coreは最初から取得済み
  player.rebirthSkills["r_core"] = true;

  // ステータスリセット
  player.level        = 1;
  player.exp          = 0;
  player.gold         = 0;
  player.skillPoints  = 0;
  player.usedSkillPoints = 0;
  player.skills       = {};

  player.atk          = defaultPlayer.atk;
  player.maxHp        = defaultPlayer.maxHp;
  player.hp           = defaultPlayer.maxHp;
  player.attackSpeed  = defaultPlayer.attackSpeed;
  player.crit         = defaultPlayer.crit;
  player.critMulti    = defaultPlayer.critMulti;

  // 転生スキル効果を適用
  applyRebirthSkillEffects();

  savePlayer();

  // 転生画面を閉じてメイン画面へ
  const screen = document.getElementById("rebirthScreen");
  if(screen){ screen.remove(); }

  if(typeof renderPlayer      === "function"){ renderPlayer();      }
  if(typeof renderUpgradeTab  === "function"){ renderUpgradeTab();  }
  if(typeof renderRebirthTab  === "function"){ renderRebirthTab();  }
  if(typeof renderEnemyTab    === "function"){ renderEnemyTab();    }

  alert("転生完了！称号：" + getRebirthTitle(player.rebirthCount) + "\n転生ポイント +3");

}

// 転生スキルを取得
function learnRebirthSkill(skillId){

  const skill = rebirthSkillMap.find(function(s){ return s.id === skillId; });
  if(!skill){ return; }

  if(hasRebirthSkill(skillId)){ return; }

  const reqs = skill.requires.every(function(r){ return hasRebirthSkill(r); });
  if(!reqs){ return; }

  const freePoints = (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);
  if(freePoints < skill.cost){ return; }

  if(!player.rebirthSkills){ player.rebirthSkills = {}; }
  player.rebirthSkills[skillId] = true;
  player.usedRebirthPoints = (player.usedRebirthPoints || 0) + skill.cost;

  savePlayer();

  applyRebirthSkillEffects();

  if(typeof renderPlayer === "function"){ renderPlayer(); }

  renderRebirthWebMap();

}

function hasRebirthSkill(id){
  return !!(player.rebirthSkills && player.rebirthSkills[id]);
}

function getFreeRebirthPoints(){
  return (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);
}

// 全転生スキル効果をプレイヤーに適用
function applyRebirthSkillEffects(){

  if(!player.rebirthSkills){ return; }

  // 一旦デフォルト値に戻してから再計算
  let atkMult   = 1;
  let hpMult    = 1;
  let goldMult  = 1;
  let spdMult   = 1;
  let critBonus = 0;
  let dropBonus = 0;
  let critMultiBonus = 0;

  rebirthSkillMap.forEach(function(skill){

    if(!hasRebirthSkill(skill.id)){ return; }
    const e = skill.effect;
    if(!e){ return; }

    if(e.atkPercent)      { atkMult        += e.atkPercent;      }
    if(e.hpPercent)       { hpMult         += e.hpPercent;       }
    if(e.goldPercent)     { goldMult        += e.goldPercent;     }
    if(e.speedPercent)    { spdMult         += e.speedPercent;    }
    if(e.critFlat)        { critBonus       += e.critFlat;        }
    if(e.rareChanceFlat)  { dropBonus       += e.rareChanceFlat;  }
    if(e.critMultiFlat)   { critMultiBonus  += e.critMultiFlat;   }
    if(e.allPercent){
      atkMult  += e.allPercent;
      hpMult   += e.allPercent;
      goldMult += e.allPercent;
      spdMult  += e.allPercent;
    }

  });

  player.rebirthAtkMult    = atkMult;
  player.rebirthHpMult     = hpMult;
  player.rebirthGoldMult   = goldMult;
  player.rebirthSpdMult    = spdMult;
  player.rebirthCritBonus  = critBonus;
  player.rebirthDropBonus  = dropBonus;
  player.rebirthCritMultiBonus = critMultiBonus;

}
