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

  // 🔥 HPは必ず0以上＆整数
  player.hp = Math.max(0, Math.floor(player.hp));

  // 🔥 念のため上限も守る
  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }

  localStorage.setItem("player", JSON.stringify(player));
}

// ===== 読み込み =====
function load(){
  let d = localStorage.getItem("player");

  if(d){
    player = JSON.parse(d);

    // 🔥 itemsが壊れてる場合の保険
    if(!player.items) player.items = {};

    // 🔥 HP完全補正（ここ超重要）
    player.hp = Math.max(0, Math.floor(player.hp));

    if(player.hp > player.maxHP){
      player.hp = player.maxHP;
    }
  }
}
