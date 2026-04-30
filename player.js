let player = {
  hp:20,
  maxHP:20,
  atk:3,
  crit:10,
  speed:1.2,
  items:{}
};

// ===== 保存 =====
function save(){

  // 🔥 保存前に整数化（これが最重要）
  player.hp = Math.floor(player.hp);

  localStorage.setItem("player", JSON.stringify(player));
}

// ===== 読み込み =====
function load(){
  let d = localStorage.getItem("player");

  if(d){
    player = JSON.parse(d);

    if(!player.items) player.items = {};

    // 🔥 読み込み時も安全に整数化
    player.hp = Math.floor(player.hp);
  }
}
