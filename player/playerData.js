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

  killCount: 0,

  potions: 0,

  materials: {}

};




const player =

  JSON.parse(
    JSON.stringify(defaultPlayer)
  );




// レベルアップに必要な経験値
function expToNextLevel(level){

  return level * 10;

}
