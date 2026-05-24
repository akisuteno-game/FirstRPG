// ─── 描画関数 ───────────────────────────────

function renderEnemyHp(){
  return `
    HP : <span id="enemyHpText">${currentEnemy.hp}</span>
    <div class="hpBox">
      <div id="enemyHpFill" class="hpFill"></div>
    </div><br>
  `;
}

function renderGauges(){
  return `
    <div style="margin:6px 0;">
      自分ゲージ
      <div class="gaugeBox">
        <div id="playerGauge" class="gaugeFill" style="width:0%;background:lime;"></div>
      </div>
    </div>
    <div style="margin:6px 0;">
      敵ゲージ
      <div class="gaugeBox">
        <div id="enemyGauge" class="gaugeFill" style="width:0%;background:red;"></div>
      </div>
    </div>
  `;
}

function renderButtons(){
  return `
    <div class="buttonRow">
      <button id="attackBtn" class="battleBtn" onclick="attackEnemy()">攻撃</button>
      <button class="battleBtn" onclick="usePotion()">ポーション（${player.potions}）</button>
      <button class="battleBtn" onclick="location.href='https://akisuteno-game.github.io/FirstRPG/'">戻る</button>
    </div>
  `;
}

function updateEnemyUI(){
  const hpText = document.getElementById("enemyHpText");
  const hpBar  = document.getElementById("enemyHpFill");
  if(!hpText||!hpBar){ return; }
  hpText.innerHTML = currentEnemy.hp;
  const pct = (currentEnemy.hp/currentEnemy.maxHp)*100;
  hpBar.style.width = pct + "%";
  hpBar.style.background = pct>70?"lime":pct>30?"yellow":"red";
}

function updatePlayerHpUI(){
  const bar = document.getElementById("battlePlayerHpFill");
  if(!bar){ return; }
  const pct = (player.hp/player.maxHp)*100;
  bar.style.width = pct + "%";
  bar.style.background = pct>70?"lime":pct>30?"yellow":"red";
  const txt = document.getElementById("battlePlayerHpText");
  if(txt){ txt.textContent = player.hp+" / "+player.maxHp; }
}

function showDamageNumber(dmg, isCrit, target){
  const area = document.getElementById("battleArea");
  if(!area){ return; }
  const el = document.createElement("div");
  el.textContent = isCrit ? "CRIT! "+dmg : "-"+dmg;
  el.style.cssText = `
    position:absolute;font-weight:bold;pointer-events:none;z-index:100;
    transition:all 0.8s ease;
    color:${isCrit?"orange":"white"};
    font-size:${isCrit?"28px":"20px"};
    left:${target==="enemy"?"55%":"20%"};
    top:${target==="enemy"?"30%":"60%"};
  `;
  area.appendChild(el);
  setTimeout(function(){
    el.style.top    = target==="enemy"?"15%":"45%";
    el.style.opacity= "0";
  }, 50);
  setTimeout(function(){
    if(area.contains(el)){ area.removeChild(el); }
  }, 900);
}

// ─── バトルログ ──────────────────────────────

const battleLog = [];

function addLog(text){
  battleLog.unshift(text);
  if(battleLog.length > 5){ battleLog.pop(); }
  const box = document.getElementById("battleLog");
  if(box){ box.innerHTML = battleLog.map(function(t){ return "<div>"+t+"</div>"; }).join(""); }
}

// ─── 初期化 ──────────────────────────────────

document.addEventListener("DOMContentLoaded", function(){
  const area = document.getElementById("battleArea");
  if(!area){ return; }

  const params  = new URLSearchParams(location.search);
  const urlId   = params.get("id");
  const savedId = urlId !== null
    ? parseInt(urlId)
    : parseInt(localStorage.getItem("selectedEnemy"));

  const found = enemies.find(function(e){ return e.id === savedId; });
  if(!found){
    area.innerHTML = "<p style='color:white;margin-top:40px;text-align:center;'>敵データが見つかりません</p>";
    return;
  }

  window.currentEnemy        = Object.assign({}, found);
  window.currentEnemy.maxHp  = found.hp;

  if(typeof loadPlayer === "function"){ loadPlayer(); }

  area.innerHTML = `
    <div class="battleWrap">
      <div style="font-size:18px;margin-bottom:6px;color:${found.isBoss?"gold":"white"};">
        ${found.isBoss?"👑 ":""}${currentEnemy.name}
      </div>
      <img src="${currentEnemy.img}" class="enemyImg" onerror="this.style.display='none'">
      <br><br>
      ${renderEnemyHp()}
      <div style="margin:8px 0;font-size:13px;">
        自分 HP :
        <span id="battlePlayerHpText">${player.hp} / ${player.maxHp}</span>
        <div class="hpBox">
          <div id="battlePlayerHpFill" class="hpFill"
            style="width:${(player.hp/player.maxHp)*100}%;"></div>
        </div>
      </div>
      ${renderGauges()}
      ${renderButtons()}
      <div id="battleLog" style="
        margin-top:14px;font-size:12px;color:#888;
        min-height:70px;text-align:left;width:260px;margin-left:auto;margin-right:auto;
      "></div>
    </div>
  `;

  startPlayerGauge();
  startEnemyGauge();
  addLog("⚔️ " + currentEnemy.name + " との戦闘開始！");
});
