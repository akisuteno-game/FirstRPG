load();

const params = new URLSearchParams(location.search);
let id = parseInt(params.get("enemy"));
if(isNaN(id)) id = 0;

let enemy = {...enemies[id]};
enemy.maxHP = enemy.hp;
enemy.gauge = 0;

let playerGauge = 0;
let battleEnd = false;

// ===== UI =====
const enemyName = document.getElementById("enemyName");
const enemyHP = document.getElementById("enemyHP");
const enemyBar = document.getElementById("enemyBar");
const enemyGauge = document.getElementById("enemyGauge");

const playerHP = document.getElementById("playerHP");
const playerBar = document.getElementById("playerBar");
const playerGaugeBar = document.getElementById("playerGauge");

const atk = document.getElementById("atk");
const crit = document.getElementById("crit");

const text = document.getElementById("text");
const btn = document.getElementById("attackBtn");

enemyName.innerText = enemy.name;

// ===== 攻撃 =====
function attack(){
  if(playerGauge < 100 || battleEnd) return;

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
  if(battleEnd) return;

  if(player.hp - enemy.atk <= 0){
    player.hp = 0;
    text.innerText = "ゲームオーバー";
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
  text.innerText = "勝利！ " + enemy.drop + "ゲット";

  save();
}

// ===== 強化 =====
function upgrade(){
  if((player.items["ゼリー"]||0) >= 2){
    player.items["ゼリー"] -= 2;
    player.atk++;
    text.innerText = "攻撃アップ！";
  }
}

// ===== ループ =====
function loop(){

  if(!battleEnd){
    playerGauge += player.speed;
    enemy.gauge += enemy.speed;

    if(playerGauge > 100) playerGauge = 100;

    if(enemy.gauge >= 100){
      enemy.gauge = 0;
      enemyAttack();
    }
  }

  fixHP();
  enemy.hp = Math.max(0, Math.floor(enemy.hp));

  update();
  requestAnimationFrame(loop);
}

// ===== UI更新 =====
function update(){

  enemyHP.innerText = enemy.hp + "/" + enemy.maxHP;
  playerHP.innerText = player.hp + "/" + player.maxHP;

  let pr = player.hp / player.maxHP;
  let er = enemy.hp / enemy.maxHP;

  playerBar.style.width = (pr * 100) + "%";
  enemyBar.style.width = (er * 100) + "%";

  playerGaugeBar.style.width = playerGauge + "%";
  enemyGauge.style.width = enemy.gauge + "%";

  atk.innerText = player.atk;
  crit.innerText = player.crit;

  btn.disabled = playerGauge < 100 || battleEnd;

  if(pr < 0.1) playerBar.style.background = "red";
  else if(pr < 0.5) playerBar.style.background = "orange";
  else playerBar.style.background = "lime";

  if(er < 0.1) enemyBar.style.background = "red";
  else if(er < 0.5) enemyBar.style.background = "orange";
  else enemyBar.style.background = "lime";
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
