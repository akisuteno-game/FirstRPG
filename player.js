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

  // 🔥 小数完全排除
  player.hp = Math.floor(player.hp);

  localStorage.setItem("player", JSON.stringify(player));
}

// ===== 読み込み =====
function load(){
  let d = localStorage.getItem("player");

  if(d){
    player = JSON.parse(d);

    if(!player.items) player.items = {};

    // 🔥 念のためここでも潰す
    player.hp = Math.floor(player.hp);
  }
}
