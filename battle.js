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
  if(player.hp <= 0) return;

  playerGauge = 0;

  let dmg = player.atk;

  if(Math.random()*100 < player.crit){
    dmg = Math.floor(dmg * 2);
    text.innerText = "クリティカル！ " + dmg;
  } else {
    text.innerText = "攻撃 " + dmg;
  }

  enemy.hp -= dmg;

  // 🔥 下限0
  if(enemy.hp < 0) enemy.hp = 0;

  if(enemy.hp <= 0){
    win();
  }
}

// ===== 敵攻撃 =====
function enemyAttack(){
  if(player.hp <= 0) return;

  player.hp -= enemy.atk;

  // 🔥 下限0
  if(player.hp < 0) player.hp = 0;

  text.innerText = enemy.name + "の攻撃 " + enemy.atk;

  if(player.hp <= 0){
    text.innerText = "ゲームオーバー";
    btn.disabled = true;
  }
}

// ===== 勝利 =====
function win(){

  addItem(enemy.drop,1);

  // 戦闘後回復（10%）
  let heal = player.maxHP * 0.1;
  player.hp += heal;

  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }

  text.innerText = "勝利！ HP回復 +" + Math.floor(heal);

  save();
}

// ===== ループ =====
function loop(){
  if(player.hp > 0 && enemy.hp > 0){
    playerGauge += player.speed;
    enemy.gauge += enemy.speed;
  }

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

  enemyHP.innerText =
    Math.max(0, Math.floor(enemy.hp)) + "/" + enemy.maxHP;

  enemyBar.style.width =
    (enemy.hp/enemy.maxHP*100) + "%";

  enemyGaugeBar.style.width = enemy.gauge + "%";

  playerHP.innerText =
    Math.max(0, Math.floor(player.hp)) + "/" + player.maxHP;

  playerHPBar.style.width =
    (player.hp/player.maxHP*100) + "%";

  playerGaugeBar.style.width = playerGauge + "%";

  btn.disabled = playerGauge < 100 || player.hp <= 0;

  // HP色
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
