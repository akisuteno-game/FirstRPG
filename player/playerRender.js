function renderPlayer(){

  const ui = document.getElementById("playerUI");
  if(!ui){ return; }

  const hpPct   = (player.hp / player.maxHp) * 100;
  const nextExp  = expToNextLevel(player.level);
  const expPct   = Math.min((player.exp / nextExp) * 100, 100);
  const count    = player.rebirthCount || 0;
  const freeSp   = (player.skillPoints  || 0) - (player.usedSkillPoints  || 0);
  const freeRp   = (player.rebirthPoints|| 0) - (player.usedRebirthPoints|| 0);

  ui.innerHTML = `
    <div style="font-size:10px;line-height:1.9;color:#bbb;">

      <div style="font-size:12px;color:gold;margin-bottom:1px;font-weight:bold;">
        Lv.${player.level}
        ${count > 0
          ? `<span style="color:orange;font-size:9px;margin-left:4px;">転${count}</span>`
          : ""}
      </div>

      <div style="font-size:9px;color:#555;margin-bottom:1px;">
        EXP ${player.exp} / ${nextExp}
      </div>
      <div style="width:100%;height:3px;background:#222;border-radius:2px;margin-bottom:5px;">
        <div style="width:${expPct}%;height:100%;background:#8888ff;border-radius:2px;"></div>
      </div>

      <div style="font-size:9px;color:#555;margin-bottom:1px;">
        HP ${player.hp} / ${player.maxHp}
      </div>
      <div style="width:100%;height:3px;background:#222;border-radius:2px;margin-bottom:6px;">
        <div id="playerHpFill" style="width:${hpPct}%;height:100%;border-radius:2px;
          background:${hpPct > 70 ? "lime" : hpPct > 30 ? "yellow" : "red"};"></div>
      </div>

      ATK : <b>${player.atk}</b><br>
      クリ : ${player.crit}%<br>
      速度 : ${(player.attackSpeed/1000).toFixed(1)}s<br>
      GOLD : ${player.gold}<br>
      ポーション : ${player.potions}<br>
      撃破数 : ${player.killCount}<br>
      SP : ${freeSp}<br>
      RP : ${freeRp}<br>

    </div>
  `;

}
