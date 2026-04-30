let player = {
  hp:20,
  maxHP:20,
  atk:3,
  crit:10,
  speed:1.2,
  items:{}
};

// ===== HP補正（🔥最重要）=====
function fixHP(){
  // 小数切り捨て
  player.hp = Math.floor(player.hp);

  // 下限・上限
  if(player.hp < 0) player.hp = 0;
  if(player.hp > player.maxHP) player.hp = player.maxHP;
}

// ===== 保存 =====
function save(){
  fixHP(); // 🔥 必ず通す
  localStorage.setItem("player", JSON.stringify(player));
}

// ===== 読み込み =====
function load(){
  let d = localStorage.getItem("player");

  if(d){
    player = JSON.parse(d);

    if(!player.items) player.items = {};

    fixHP(); // 🔥 読み込み時も補正
  }
}
