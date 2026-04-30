load();

// ===== 敵データ（🔥ここ追加）=====
const enemies = [
  {id:0,name:"スライム",hp:20,atk:2,speed:1,drop:"ゼリー"},
  {id:1,name:"ゴブリン",hp:35,atk:4,speed:1.2,drop:"牙"},
  {id:2,name:"オーク",hp:60,atk:7,speed:0.8,drop:"骨"},
  {id:3,name:"ドラゴン",hp:120,atk:12,speed:1,drop:"鱗"}
];

// ===== URLから敵取得 =====
const params = new URLSearchParams(location.search);
let id = parseInt(params.get("enemy"));
if(isNaN(id)) id = 0;

// 🔥 安全取得
let enemyData = enemies[id];

if(!enemyData){
  alert("このモンスターは未実装！");
  location.href = "index.html";
}

let enemy = {...enemyData};
enemy.maxHP = enemy.hp;
enemy.gauge = 0;

let playerGauge = 0;
let battleEnd = false;

// ===== 表示用 =====
function hp(v){
  return Math.max(0, Math.floor(v));
}

// ===== UI =====
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
  if(battleEnd) return;

  playerGauge = 0;

  let dmg = player.atk;

  if(Math.random()*100 < player.crit){
    dmg = Math.floor(dmg * 2);
    text.innerText = "クリティカル！ " + dmg;
  } else {
    text.innerText = "攻撃 " + dmg;
  }

  if(enemy.hp - dmg <= 0){
    enemy.hp = 0;
    win();
    return;
  }

  enemy.hp -= dmg;
}

// ===== 敵攻撃 =====
function enemyAttack(){
  if(player.hp <= 0 || battleEnd) return;

  if(player.hp - enemy.atk <= 0){
    player.hp = 0;

    text.innerText = "ゲームオーバー";
    btn.disabled = true;
    battleEnd = true;

    save();

    setTimeout(()=>{
      location.href = "index.html";
    }, 1000);

    return;
  }

  player.hp -= enemy.atk;
  text.innerText = enemy.name + "の攻撃 " + enemy.atk;
}

// ===== 勝利 =====
function win(){
  battleEnd = true;

  addItem(enemy.drop,1);

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

  if(!battleEnd){
    if(player.hp > 0 && enemy.hp > 0){
      playerGauge += player.speed;
      enemy.gauge += enemy.speed;
    }

    playerGauge = Math.min(100, playerGauge);

    if(enemy.gauge >= 100){
      enemy.gauge = 0;
      enemyAttack();
    }
  }

  player.hp = Math.max(0, player.hp);
  enemy.hp = Math.max(0, enemy.hp);

  update();
  requestAnimationFrame(loop);
}

// ===== UI更新 =====
function update(){

  enemyHP.innerText = hp(enemy.hp) + "/" + enemy.maxHP;
  playerHP.innerText = hp(player.hp) + "/" + player.maxHP;

  enemyBar.style.width =
    Math.max(0, enemy.hp/enemy.maxHP*100) + "%";

  playerHPBar.style.width =
    Math.max(0, player.hp/player.maxHP*100) + "%";

  enemyGaugeBar.style.width = enemy.gauge + "%";
  playerGaugeBar.style.width = playerGauge + "%";

  btn.disabled = playerGauge < 100 || player.hp <= 0 || battleEnd;

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
