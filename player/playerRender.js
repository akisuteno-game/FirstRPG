function renderPlayer(){

  const ui = document.getElementById("playerUI");
  if(!ui){ return; }

  const hpPct  = Math.min((player.hp / player.maxHp) * 100, 100);
  const nextExp = expToNextLevel(player.level);
  const expPct  = Math.min((player.exp / nextExp) * 100, 100);
  const count   = player.rebirthCount || 0;
  const freeSp  = (player.skillPoints   || 0) - (player.usedSkillPoints   || 0);
  const freeRp  = (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);

  const hpColor  = hpPct > 70 ? "#44ff44" : hpPct > 30 ? "#ffee44" : "#ff4444";

  ui.innerHTML = `
    <div style="font-size:11px;color:#bbb;line-height:1;padding-bottom:6px;">

      <div style="font-size:13px;color:gold;font-weight:bold;margin-bottom:4px;">
        Lv.${player.level}
        ${count > 0 ? `<span style="color:orange;font-size:10px;margin-left:4px;">転生${count}</span>` : ""}
      </div>

      <div style="color:#555;font-size:9px;margin-bottom:1px;">EXP ${player.exp}/${nextExp}</div>
      <div style="width:100%;height:5px;background:#1a1a1a;border-radius:3px;margin-bottom:6px;overflow:hidden;">
        <div style="width:${expPct}%;height:100%;background:#6666ff;border-radius:3px;"></div>
      </div>

      <div style="color:#555;font-size:9px;margin-bottom:1px;">HP ${player.hp}/${player.maxHp}</div>
      <div style="width:100%;height:5px;background:#1a1a1a;border-radius:3px;margin-bottom:8px;overflow:hidden;">
        <div style="width:${hpPct}%;height:100%;background:${hpColor};border-radius:3px;"></div>
      </div>

      <table style="width:100%;border-collapse:collapse;font-size:11px;">
        <tr><td style="color:#666;padding:1px 0;">ATK</td>
            <td style="color:white;text-align:right;">${player.atk}</td></tr>
        <tr><td style="color:#666;padding:1px 0;">クリ率</td>
            <td style="color:white;text-align:right;">${player.crit}%</td></tr>
        <tr><td style="color:#666;padding:1px 0;">速度</td>
            <td style="color:white;text-align:right;">${(player.attackSpeed/1000).toFixed(1)}s</td></tr>
        <tr><td style="color:#666;padding:1px 0;">GOLD</td>
            <td style="color:#ffcc44;text-align:right;">${player.gold}</td></tr>
        <tr><td style="color:#666;padding:1px 0;">ポーション</td>
            <td style="color:#44ffaa;text-align:right;">${player.potions}</td></tr>
        <tr><td style="color:#666;padding:1px 0;">撃破数</td>
            <td style="color:white;text-align:right;">${player.killCount}</td></tr>
        <tr><td style="color:#666;padding:1px 0;">SP残り</td>
            <td style="color:#8888ff;text-align:right;">${freeSp}</td></tr>
        <tr><td style="color:#666;padding:1px 0;">RP残り</td>
            <td style="color:#ff88ff;text-align:right;">${freeRp}</td></tr>
      </table>

      <div style="margin-top:8px;border-top:1px solid #222;padding-top:6px;">
        <div style="color:#555;font-size:9px;margin-bottom:4px;">── 素材 ──</div>
        <div id="materialList">
          ${createMaterialHTML()}
        </div>
      </div>

    </div>
  `;

}
