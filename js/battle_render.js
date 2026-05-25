function updateEnemyUI(){
  const hpText = document.getElementById("enemyHpText");
  const hpBar  = document.getElementById("enemyHpFill");
  if(!hpText || !hpBar){ return; }
  hpText.textContent = currentEnemy.hp;
  const pct = (currentEnemy.hp / currentEnemy.maxHp) * 100;
  hpBar.style.width      = pct + "%";
  hpBar.style.background = pct > 70 ? "lime" : pct > 30 ? "yellow" : "red";
}

function updatePlayerHpUI(){
  const bar = document.getElementById("battlePlayerHpFill");
  if(!bar){ return; }
  const pct = (player.hp / player.maxHp) * 100;
  bar.style.width      = pct + "%";
  bar.style.background = pct > 70 ? "lime" : pct > 30 ? "yellow" : "red";
  const txt = document.getElementById("battlePlayerHpText");
  if(txt){ txt.textContent = player.hp + " / " + player.maxHp; }
}

function showDamageNumber(dmg, isCrit, target){
  const area = document.getElementById("battleArea");
  if(!area){ return; }
  const el = document.createElement("div");
  el.textContent = isCrit ? "CRIT! " + dmg : "-" + dmg;
  el.style.position      = "absolute";
  el.style.fontWeight    = "bold";
  el.style.pointerEvents = "none";
  el.style.zIndex        = "100";
  el.style.transition    = "all 0.8s ease";
  el.style.color         = isCrit ? "orange" : "white";
  el.style.fontSize      = isCrit ? "32px" : "24px";
  el.style.left          = target === "enemy" ? "55%" : "10%";
  el.style.top           = target === "enemy" ? "30%" : "55%";
  area.appendChild(el);
  setTimeout(function(){
    el.style.top     = target === "enemy" ? "10%" : "40%";
    el.style.opacity = "0";
  }, 50);
  setTimeout(function(){
    if(area.contains(el)){ area.removeChild(el); }
  }, 900);
}

const battleLog = [];

function addLog(text){
  battleLog.unshift(text);
  if(battleLog.length > 6){ battleLog.pop(); }
  const box = document.getElementById("battleLog");
  if(box){
    box.innerHTML = battleLog.map(function(t){
      return "<div>" + t + "</div>";
    }).join("");
  }
}

function initBattle(){
  const area = document.getElementById("battleArea");
  if(!area){ return; }

  const params  = new URLSearchParams(location.search);
  const urlId   = params.get("id");
  const savedId = urlId !== null
    ? parseInt(urlId)
    : parseInt(localStorage.getItem("selectedEnemy"));

  const found = enemies.find(function(e){ return e.id === savedId; });

  if(!found){
    area.innerHTML = "<p style='color:white;margin-top:60px;text-align:center;font-size:18px;'>敵データが見つかりません</p>";
    return;
  }

  window.currentEnemy       = Object.assign({}, found);
  window.currentEnemy.maxHp = found.hp;

  loadPlayer();

  area.innerHTML =
    '<div class="battleWrap">' +

      '<div style="font-size:22px;font-weight:bold;margin-bottom:10px;color:' + (found.isBoss ? "gold" : "white") + ';">' +
        (found.isBoss ? "👑 " : "") + currentEnemy.name +
      '</div>' +

      '<img src="' + currentEnemy.img + '" class="enemyImg"' +
        ' onerror="this.style.display=\'none\'"' +
        ' style="width:160px;image-rendering:pixelated;display:block;margin:0 auto 14px;">' +

      '<div style="font-size:16px;margin-bottom:4px;">' +
        'HP : <span id="enemyHpText" style="color:lime;">' + currentEnemy.hp + '</span>' +
        '<span style="color:#444;font-size:13px;"> / ' + currentEnemy.maxHp + '</span>' +
      '</div>' +
      '<div class="hpBox">' +
        '<div id="enemyHpFill" class="hpFill" style="background:lime;"></div>' +
      '</div>' +

      '<div style="margin:12px 0;font-size:15px;color:#ccc;">' +
        '自分 HP : <span id="battlePlayerHpText" style="color:lime;">' + player.hp + ' / ' + player.maxHp + '</span>' +
        '<div class="hpBox" style="margin-top:5px;">' +
          '<div id="battlePlayerHpFill" class="hpFill"' +
          ' style="width:' + Math.min((player.hp / player.maxHp) * 100, 100) + '%;background:lime;"></div>' +
        '</div>' +
      '</div>' +

      '<div style="margin:8px 0;font-size:14px;color:#888;">自分ゲージ' +
        '<div class="gaugeBox"><div id="playerGauge" class="gaugeFill" style="width:0%;background:lime;"></div></div>' +
      '</div>' +
      '<div style="margin:8px 0;font-size:14px;color:#888;">敵ゲージ' +
        '<div class="gaugeBox"><div id="enemyGauge" class="gaugeFill" style="width:0%;background:red;"></div></div>' +
      '</div>' +

      '<div class="buttonRow">' +
        '<button id="attackBtn" class="battleBtn" onclick="attackEnemy()" disabled>攻撃</button>' +
        '<button class="battleBtn" onclick="usePotion()">ポーション（' + player.potions + '）</button>' +
        '<button class="battleBtn" onclick="location.href=\'' + RETURN_URL + '\'">戻る</button>' +
      '</div>' +

      '<div id="battleLog" style="margin-top:18px;font-size:13px;color:#888;min-height:96px;text-align:left;width:280px;margin-left:auto;margin-right:auto;line-height:1.7;"></div>' +

    '</div>';

  startPlayerGauge();
  startEnemyGauge();
  addLog("⚔️ " + currentEnemy.name + " との戦闘開始！");
}

initBattle();
