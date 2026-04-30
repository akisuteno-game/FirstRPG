load();

const list = document.getElementById("list");

// ===== 敵ボタン =====
enemies.forEach(e=>{
  const btn = document.createElement("button");
  btn.textContent = e.name;

  btn.onclick = ()=>{
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

// ===== UI更新 =====
function update(){
  document.getElementById("hp").innerText =
    player.hp+"/"+player.maxHP;

  document.getElementById("atk").innerText = player.atk;
  document.getElementById("crit").innerText = player.crit;

  // HPバー
  let r = player.hp/player.maxHP;
  let bar = document.getElementById("hpBar");

  bar.style.width = (r*100)+"%";

  if(r<0.1) bar.style.background="red";
  else if(r<0.5) bar.style.background="orange";
  else bar.style.background="lime";

  // 素材
  let html="";
  for(let k in player.items){
    html += k+"："+player.items[k]+"<br>";
  }
  document.getElementById("items").innerHTML = html;
}

// ===== ループ =====
function loop(){
  update();
  requestAnimationFrame(loop);
}

loop();
