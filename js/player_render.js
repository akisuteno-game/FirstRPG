function renderPlayer(){
  const ui = document.getElementById("playerUI");
  if(!ui){ return; }

  const hpPct  = Math.min((player.hp / player.maxHp) * 100, 100);
  const nextExp = expToNextLevel(player.level);
  const expPct  = Math.min((player.exp / nextExp) * 100, 100);
  const count   = player.rebirthCount || 0;
  const freeSp  = (player.skillPoints    || 0) - (player.usedSkillPoints    || 0);
  const freeRp  = (player.rebirthPoints  || 0) - (player.usedRebirthPoints  || 0);
  const hpColor = hpPct > 70 ? "#44ff44" : hpPct > 30 ? "#ffee44" : "#ff4444";

  ui.innerHTML = `
    <div style="font-size:13px;color:#ccc;line-height:1.1;">

      <div style="font-size:15px;color:gold;font-weight:bold;margin-bottom:5px;">
        Lv.${player.level}
        ${count > 0 ? `<span style="color:orange;font-size:11px;margin-left:4px;">転生${count}</span>` : ""}
      </div>

      <div style="color:#555;font-size:10px;margin-bottom:1px;">EXP ${player.exp}/${nextExp}</div>
      <div style="width:100%;height:5px;background:#1a1a1a;border-radius:3px;margin-bottom:6px;overflow:hidden;">
        <div style="width:${expPct}%;height:100%;background:#6666ff;border-radius:3px;"></div>
      </div>

      <div style="color:#555;font-size:10px;margin-bottom:1px;">HP ${player.hp}/${player.maxHp}</div>
      <div style="width:100%;height:5px;background:#1a1a1a;border-radius:3px;margin-bottom:8px;overflow:hidden;">
        <div style="width:${hpPct}%;height:100%;background:${hpColor};border-radius:3px;transition:width 0.2s;"></div>
      </div>

      <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;font-size:12px;">
        <span style="color:#555;">ATK</span>      <span style="color:white;text-align:right;">${player.atk}</span>
        <span style="color:#555;">クリ率</span>   <span style="color:white;text-align:right;">${player.crit}%</span>
        <span style="color:#555;">速度</span>      <span style="color:white;text-align:right;">${(player.attackSpeed/1000).toFixed(1)}s</span>
        <span style="color:#555;">GOLD</span>      <span style="color:#ffcc44;text-align:right;">${player.gold}</span>
        <span style="color:#555;">ポーション</span><span style="color:#44ffaa;text-align:right;">${player.potions}</span>
        <span style="color:#555;">撃破</span>      <span style="color:white;text-align:right;">${player.killCount}</span>
        <span style="color:#555;">SP</span>        <span style="color:#8888ff;text-align:right;">${freeSp}</span>
        <span style="color:#555;">RP</span>        <span style="color:#ff88ff;text-align:right;">${freeRp}</span>
      </div>

      <div style="margin-top:8px;border-top:1px solid #1e1e1e;padding-top:6px;">
        <div style="color:#333;font-size:10px;margin-bottom:4px;">── 素材 ──</div>
        ${createMaterialHTML()}
      </div>

    </div>
  `;
}
