let player = {
  hp:20,
  maxHP:20,
  atk:3,
  crit:10,
  speed:1.2,
  items:{}
};

let lastHealTime = Date.now();

function fixHP(){

  if(!player.items){
    player.items = {};
  }

  player.hp = Math.floor(player.hp);

  if(player.hp < 0){
    player.hp = 0;
  }

  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }
}

// ===== 非戦闘回復 =====
function autoHeal(){

  let now = Date.now();

  if(now - lastHealTime < 1000){
    return;
  }

  lastHealTime = now;

  if(player.hp >= player.maxHP){
    return;
  }

  let heal =
    player.maxHP * 0.1;

  player.hp += heal;

  fixHP();

  save();
}

function save(){

  fixHP();

  localStorage.setItem(
    "player",
    JSON.stringify(player)
  );
}

function load(){

  let d =
    localStorage.getItem("player");

  if(d){
    player = JSON.parse(d);
  }

  fixHP();

  lastHealTime = Date.now();
}
