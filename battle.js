load();

const params = new URLSearchParams(location.search);
let id = parseInt(params.get("enemy"));
if(isNaN(id)) id = 0;

let enemy = {...enemies[id]};
enemy.maxHP = enemy.hp;
enemy.gauge = 0;

let playerGauge = 0;

// ===== UI取得 =====
const enemyName = document.getElementById("enemyName");
const enemyHP = document.getElementById("enemyHP");
const enemyBar = document.getElementById("enemyBar");
const enemyGaugeBar = document.getElementById("enemyGauge");

const playerHP = document.getElementById("playerHP");
const playerHPBar = document.getElementById("playerHPBar");
const playerGaugeBar = document.getElementById("playerGauge");

const text = document.getElementById("text");
const btn = document.getElementById("attackBtn");

enemyName.innerText = enemy.name;

// ===== 攻撃 =====
function attack(){
  if(playerGauge < 100) return;

  playerGauge = 0;

  let dmg = player.atk;

  if(Math.random()*100 < player.crit){
    dmg = Math.floor(dmg * 2);
    text.innerText = "クリティカル！ " + dmg;
  } else {
    text.innerText = "攻撃 " + dmg;
  }

  enemy.hp -= dmg;

  if(enemy.hp <= 0){
    win();
  }
}

// ===== 敵攻撃 =====
function enemyAttack(){
  player.hp -= enemy.atk;
  text.innerText = enemy.name + "の攻撃 " + enemy.atk;

  if(player.hp <= 0){
    text.innerText = "ゲームオーバー";
  }
}

// ===== 勝利 =====
function win(){
  addItem(enemy.drop,1);
  text.innerText = "勝利！";

  save();
}

// ===== ループ =====
function loop(){
  playerGauge += player.speed;
  enemy.gauge += enemy.speed;

  if(playerGauge > 100) playerGauge = 100;

  if(enemy.gauge >= 100){
    enemy.gauge = 0;
    enemyAttack();
  }

  update();
  requestAnimationFrame(loop);
}

// ===== UI更新 =====
function update(){

  // 🔥 小数対策（表示だけ丸める）
  enemyHP.innerText =
    Math.floor(enemy.hp) + "/" + enemy.maxHP;

  enemyBar.style.width =
    (enemy.hp/enemy.maxHP*100) + "%";

  enemyGaugeBar.style.width = enemy.gauge + "%";

  playerHP.innerText =
    Math.floor(player.hp) + "/" + player.maxHP;

  playerHPBar.style.width =
    (player.hp/player.maxHP*100) + "%";

  playerGaugeBar.style.width = playerGauge + "%";

  btn.disabled = playerGauge < 100;

  // HP色変化
  let r = player.hp/player.maxHP;

  if(r < 0.1) playerHPBar.style.background = "red";
  else if(r < 0.5) playerHPBar.style.background = "orange";
  else playerHPBar.style.background = "lime";
}

// ===== その他 =====
function addItem(n,c){
  if(!player.items[n]) player.items[n]=0;
  player.items[n]+=c;
}

function back(){
  save();
  location.href = "index.html";
}

// ===== スタート =====
loop();
