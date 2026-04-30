load();

const list = document.getElementById("list");

// ===== 敵ボタン =====
enemies.forEach(e=>{
  const btn = document.createElement("button");
  btn.textContent = e.name;

  btn.onclick = ()=>{
    save();
    location.href = "battle.html?enemy="+e.id;
  };

  list.appendChild(btn);
  list.appendChild(document.createElement("br"));
});

// ===== 強化 =====
function upgradeAtk(){
  if((player.items["ゼリー"]||0) >= 2){
    player.items["ゼリー"] -= 2;
    player.atk++;
    save();
  }
}

function upgradeCrit(){
  if((player.items["牙"]||0) >= 2){
    player.items["牙"] -= 2;
    player.crit++;
    save();
  }
}

// ===== データ削除 =====
function resetData(){
  localStorage.removeItem("player");
  location.reload();
}

// ===== 回復設定 =====
const healPercentPerSec = 0.10;

let lastTime = performance.now();

// ===== ループ =====
function loop(now){

  let delta = now - lastTime;
  lastTime = now;

  // 🔥 delta暴走防止（超重要）
  if(delta > 100) delta = 100;

  // 回復
  let heal = player.maxHP * healPercentPerSec * (delta/1000);
  player.hp += heal;

  // 🔥 完全防御
  player.hp = Math.max(0, player.hp);

  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }

  update();

  requestAnimationFrame(loop);
}

// ===== UI更新 =====
function update(){

  document.getElementById("hp").innerText =
    Math.max(0, Math.floor(player.hp)) + "/" + player.maxHP;

  document.getElementById("atk").innerText = player.atk;
  document.getElementById("crit").innerText = player.crit;

  let ratio = player.hp/player.maxHP;
  let bar = document.getElementById("hpBar");

  bar.style.width = (ratio*100)+"%";

  if(ratio < 0.1) bar.style.background="red";
  else if(ratio < 0.5) bar.style.background="orange";
  else bar.style.background="lime";

  let html="";
  for(let k in player.items){
    html += k+"："+player.items[k]+"<br>";
  }
  document.getElementById("items").innerHTML = html;
}

// ===== スタート =====
loop(performance.now());
