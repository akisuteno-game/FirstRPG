function renderEnemyTab(){

  const list = document.getElementById("list");
  if(!list){ return; }

  if(typeof enemies === "undefined" || enemies.length === 0){
    list.innerHTML = "<div style='color:white;padding:20px;'>敵データなし</div>";
    return;
  }

  const rebirthCount = player.rebirthCount || 0;

  const groups = {};
  enemies.forEach(function(enemy){
    const r = enemy.rebirthRequired || 0;
    if(!groups[r]){ groups[r] = []; }
    groups[r].push(enemy);
  });

  let html = "";

  Object.keys(groups).map(Number).sort(function(a,b){ return a-b; })
  .forEach(function(r){

    const unlocked = rebirthCount >= r;
    const label    = r === 0 ? "はじまりの地" : "転生" + r + "回 解放エリア";

    // ─── エリアヘッダー（小さく） ───
    html += `
      <div style="
        padding:3px 10px;
        background:${unlocked ? "#0f1520" : "#0a0a0a"};
        border-bottom:1px solid #1a1a2a;
        border-top:1px solid #1a1a2a;
        color:${unlocked ? "#4466aa" : "#2a2a2a"};
        font-size:10px;
        display:flex;align-items:center;gap:5px;
      ">
        ${unlocked ? "🔓" : "🔒"}
        <span>${label}</span>
        ${!unlocked
          ? `<span style="color:#222;margin-left:auto;font-size:9px;">転生${r}回で解放</span>`
          : ""}
      </div>
    `;

    if(!unlocked){
      html += `
        <div style="padding:8px 10px;color:#2a2a2a;font-size:10px;text-align:center;">
          🔒 転生${r}回で解放されます
        </div>
      `;
      return;
    }

    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:6px;">`;

    groups[r].forEach(function(enemy, idx){

      const revealed = idx === 0 || isEnemyRevealed(groups[r][idx - 1]);

      if(!revealed){
        html += `
          <div style="
            background:#0a0a0a;border:1px solid #1a1a1a;
            padding:10px;text-align:center;color:#2a2a2a;
            font-size:11px;
          ">
            <div style="font-size:22px;margin-bottom:4px;">？</div>
            <div style="font-size:9px;">前の敵を倒すと解放</div>
          </div>
        `;
        return;
      }

      const bossStyle = enemy.isBoss
        ? "border:1px solid #554400;background:#0d0900;"
        : "border:1px solid #1e1e1e;background:#0d0d0d;";

      html += `
        <div
          onclick="location.href='battle.html?id=${enemy.id}'"
          style="${bossStyle}padding:8px;cursor:pointer;text-align:center;"
        >
          ${enemy.isBoss
            ? `<div style="color:gold;font-size:9px;margin-bottom:2px;">👑 BOSS</div>`
            : ""}

          <img
            src="${enemy.img}"
            width="60"
            style="display:block;margin:0 auto 4px;"
            onerror="this.style.display='none'"
          >

          <div style="font-size:11px;font-weight:bold;
            color:${enemy.isBoss ? "gold" : "white"};margin-bottom:3px;">
            ${enemy.name}
          </div>

          <div style="font-size:9px;color:#666;line-height:1.6;text-align:left;">
            HP:${enemy.hp} ATK:${enemy.atk}<br>
            速:${(enemy.speed/1000).toFixed(1)}s G:${enemy.drop}<br>
            通:${enemy.material || "なし"}<br>
            レア:${enemy.rareMaterial || "なし"}
          </div>
        </div>
      `;

    });

    html += `</div>`;

  });

  list.innerHTML = html;

}

function isEnemyRevealed(enemy){
  if(!enemy){ return false; }
  if(enemy.material    && (player.materials[enemy.material]    || 0) > 0){ return true; }
  if(enemy.rareMaterial&& (player.materials[enemy.rareMaterial]|| 0) > 0){ return true; }
  return false;
}
