const defaultPlayer = {
  hp: 30, maxHp: 30,
  atk: 5, attackSpeed: 2000,
  crit: 5, critMulti: 1.5,
  gold: 0, exp: 0, level: 1,
  skillPoints: 0, usedSkillPoints: 0, skills: {},
  rebirthCount: 0, rebirthPoints: 0, usedRebirthPoints: 0, rebirthSkills: {},
  killCount: 0, potions: 0,
  goldBonus: 0, equipRareBonus: 0,
  equipment: { weapon: null, armor: null, accessory: null },
  equipStack: { weapon: [], armor: [], accessory: [] },
  equippedEffects: { weapon: null, armor: null, accessory: null },
  materials: {}
};

const player = JSON.parse(JSON.stringify(defaultPlayer));

function expToNextLevel(level){ return level * 10; }

function loadPlayer(){
  const saved = localStorage.getItem("playerData");
  if(!saved){ return; }
  const data = JSON.parse(saved);
  Object.assign(player, data);
  if(!player.equipment)    { player.equipment     = { weapon:null, armor:null, accessory:null }; }
  if(!player.equipStack)   { player.equipStack     = { weapon:[],  armor:[],   accessory:[] };   }
  if(!player.equippedEffects){ player.equippedEffects = { weapon:null, armor:null, accessory:null }; }
  if(!player.rebirthSkills){ player.rebirthSkills  = {}; }
  if(!player.materials)    { player.materials      = {}; }
}

function savePlayer(){
  localStorage.setItem("playerData", JSON.stringify(player));
}

function resetPlayer(){
  const fresh = JSON.parse(JSON.stringify(defaultPlayer));
  Object.keys(player).forEach(function(k){ delete player[k]; });
  Object.assign(player, fresh);
  savePlayer();
}

loadPlayer();
