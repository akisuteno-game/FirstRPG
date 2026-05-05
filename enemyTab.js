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

    html += `
      <div style="
        padding:6px 12px;
        background:${unlocked ? "#111827" : "#0d0d0d"};
        border-bottom:1px solid #222;
        color:${unlocked ? "#6688cc" : "#333"};
        font-size:11px;
        display:flex;align-items:center;gap:6px;
      ">
        ${unlocked ? "🔓" : "🔒"} ${label}
        ${!unlocked ? `<span style="color:#222;font-size:10px;">（転生${r}回で解放）</span>` : ""}
      </div>
    `;

    if(!unlocked){
      // ロック中は全部隠す
      html += `
        <div style="
          padding:12px;color:#333;font-size:12px;text-align:center;
        ">🔒 転生${r}回で解放</div>
      `;
      return;
    }

    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px;">`;

    groups[r].forEach(function(enemy, idx){

      // 1つ前の敵を倒したかどうかで次を隠す
      // killCountではなくmaterialsで判定（倒したことがある敵は素材持ってる可能性）
      // シンプルに：同グループ内で最初の敵は常に表示、それ以外はひとつ前が表示済みなら表示
      const prevEnemy = idx > 0 ? groups[r][idx - 1] : null;
      const isRevealed = idx === 0 || isEnemyRevealed(prevEnemy);
      const isNext     = !isRevealed && idx > 0 && isEnemyRevealed(groups[r][idx - 1] ? groups[r][idx - 1] : null);

      if(!isRevealed){
        // まだ解放されていない敵は？？？で表示
        html += `
          <div style="
            background:#0d0d0d;border:1px solid #222;
            padding:12px;text-align:center;color:#333;
          ">
            <div style="font-size:28px;margin-bottom:6px;">？？？</div>
            <div style="font-size:10px;">前の敵を倒すと解放</div>
          </div>
        `;
        return;
      }

      const bossStyle = enemy.isBoss
        ? "border:2px solid gold;background:#0f0a00;"
        : "border:1px solid #2a2a2a;background:#111;";

      html += `
        <div
          class="enemyCard"
          onclick="location.href='battle.html?id=${enemy.id}'"
          style="${bossStyle}cursor:pointer;"
        >
          ${enemy.isBoss
            ? `<div style="color:gold;font-size:10px;margin-bottom:3px;">👑 BOSS</div>`
            : ""}

          <img
            src="${enemy.img}"
            width="70"
            style="display:block;margin:0 auto 4px;"
            onerror="this.style.display='none'"
          >

          <div style="font-size:12px;font-weight:bold;color:${enemy.isBoss ? "gold" : "white"};margin-bottom:4px;">
            ${enemy.name}
          </div>

          <div style="font-size:10px;color:#888;line-height:1.7;">
            HP : ${enemy.hp}<br>
            ATK : ${enemy.atk}<br>
            速度 : ${(enemy.speed/1000).toFixed(1)}秒<br>
            GOLD : ${enemy.drop}<br>
            EXP : ${enemy.exp}<br>
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

// 敵が解放済みかどうか（その敵の素材を1つでも持っているか倒したことがある）
function isEnemyRevealed(enemy){
  if(!enemy){ return false; }
  // 素材かレア素材を持っていれば倒したことあり
  if(enemy.material && player.materials[enemy.material] > 0){ return true; }
  if(enemy.rareMaterial && player.materials[enemy.rareMaterial] > 0){ return true; }
  // killCountをenemy別に記録していないので、素材0でも最初の数体は常に表示
  return false;
}
