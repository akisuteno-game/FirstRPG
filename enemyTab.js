function renderEnemyTab(){

  const list = document.getElementById("list");
  if(!list){ return; }

  if(typeof enemies === "undefined" || enemies.length === 0){
    list.innerHTML = "<div style='color:white;padding:20px;'>敵データなし</div>";
    return;
  }

  const rebirthCount = player.rebirthCount || 0;

  // 転生回数ごとにグループ分け
  const groups = {};

  enemies.forEach(function(enemy){
    const r = enemy.rebirthRequired || 0;
    if(!groups[r]){ groups[r] = []; }
    groups[r].push(enemy);
  });

  let html = "";

  Object.keys(groups).map(Number).sort(function(a,b){ return a - b; })
  .forEach(function(r){

    const unlocked = rebirthCount >= r;
    const label    = r === 0
      ? "はじまりの地"
      : "転生" + r + "回解放エリア";

    html += `
      <div style="
        padding:8px 16px;
        background:${unlocked ? "#1a1a2e" : "#111"};
        border-bottom:1px solid #333;
        color:${unlocked ? "#88aaff" : "#444"};
        font-size:13px;
        display:flex;align-items:center;gap:8px;
      ">
        ${unlocked ? "🔓" : "🔒"} ${label}
        ${!unlocked ? `<span style="color:#333;font-size:11px;">（転生${r}回で解放）</span>` : ""}
      </div>
    `;

    if(!unlocked){
      html += `
        <div style="
          display:grid;grid-template-columns:1fr 1fr;
          gap:10px;padding:10px;opacity:0.3;pointer-events:none;
        ">
      `;
    } else {
      html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px;">`;
    }

    groups[r].forEach(function(enemy){

      const bossStyle = enemy.isBoss
        ? "border:2px solid gold;background:#1a1500;"
        : "border:1px solid #333;background:#161616;";

      html += `
        <div
          class="enemyCard"
          onclick="${unlocked ? "location.href='battle.html?id=" + enemy.id + "'" : ""}"
          style="${bossStyle}${!unlocked ? "cursor:default;" : ""}"
        >
          ${enemy.isBoss
            ? `<div style="color:gold;font-size:11px;margin-bottom:4px;">👑 BOSS</div>`
            : ""}

          <img
            src="${enemy.img}"
            width="80"
            onerror="this.style.display='none'"
          ><br>

          <div style="font-size:13px;font-weight:bold;color:${enemy.isBoss ? "gold" : "white"};">
            ${enemy.name}
          </div>
          <br>

          <div style="font-size:11px;color:#aaa;line-height:1.6;">
            HP : ${enemy.hp}<br>
            ATK : ${enemy.atk}<br>
            速度 : ${(enemy.speed/1000).toFixed(1)}秒<br>
            GOLD : ${enemy.drop}<br>
            EXP : ${enemy.exp}<br>
            <br>
            通常 : ${enemy.material || "なし"}<br>
            レア : ${enemy.rareMaterial || "なし"}
          </div>
        </div>
      `;

    });

    html += `</div>`;

  });

  list.innerHTML = html;

}
