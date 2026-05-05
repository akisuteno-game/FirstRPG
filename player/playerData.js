const defaultPlayer = {

  hp: 30,
  maxHp: 30,

  atk: 5,
  attackSpeed: 2000,

  crit: 5,
  critMulti: 1.5,

  gold: 0,
  exp: 0,
  level: 1,

  skillPoints: 0,
  usedSkillPoints: 0,
  skills: {},

  rebirthCount: 0,

  killCount: 0,

  potions: 0,

  goldBonus: 0,

  materials: {}

};




const player =

  JSON.parse(
    JSON.stringify(defaultPlayer)
  );




function expToNextLevel(level){
  return level * 10;
}
