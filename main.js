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

// ===== 回復設定（🔥ここが変更点）=====
const healPercentPerSec = 0.10; // 最大HPの10%/秒

let lastTime = performance.now();

// ===== UI更新 =====
function update(delta){

  // 自動回復
  let heal = player.maxHP * healPercentPerSec * (delta/1000);
  player.hp += heal;

  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }

  // 表示（整数）
  document.getElementById("hp").innerText =
    Math.max(0, Math.floor(player.hp)) + "/" + player.maxHP;

  document.getElementById("atk").innerText = player.atk;
  document.getElementById("crit").innerText = player.crit;

  // HPバー
  let ratio = player.hp/player.maxHP;
  let bar = document.getElementById("hpBar");

  bar.style.width = (ratio*100)+"%";

  if(ratio < 0.1) bar.style.background="red";
  else if(ratio < 0.5) bar.style.background="orange";
  else bar.style.background="lime";

  // 素材
  let html="";
  for(let k in player.items){
    html += k+"："+player.items[k]+"<br>";
  }
  document.getElementById("items").innerHTML = html;
}

// ===== ループ =====
function loop(now){
  let delta = now - lastTime;
  lastTime = now;

  update(delta);
  requestAnimationFrame(loop);
}

loop(performance.now());
