function renderRebirthTab(){

  const tab = document.getElementById("rebirthTab");

  if(!tab){ return; }

  const count   = player.rebirthCount || 0;
  const title   = getRebirthTitle(count);
  const canDo   = canRebirth();

  const atkBonus = Math.floor(
    defaultPlayer.atk * (REBIRTH_BONUS.atkPercent / 100) * (count + 1)
  );
  const hpBonus = Math.floor(
    defaultPlayer.maxHp * (REBIRTH_BONUS.hpPercent / 100) * (count + 1)
  );
  const goldBonus = REBIRTH_BONUS.goldPercent * (count + 1);

  tab.innerHTML = `
    <div style="padding:20px;color:white;">

      <h2>転生</h2><br>

      <div style="font-size:14px;color:#aaa;margin-bottom:16px;">
        転生すると Lv・GOLD・スキルがリセットされますが<br>
        永続ボーナスが手に入ります。
      </div>

      <div style="
        background:#1a1a2e;
        border:2px solid #555;
        padding:16px;
        margin-bottom:16px;
        font-size:15px;
        line-height:2;
      ">
        転生回数 : <span style="color:gold;">${count}回</span><br>
        称号 : <span style="color:orange;">${title}</span><br>
        現在のボーナス :<br>
        　ATK +${Math.floor(defaultPlayer.atk * (REBIRTH_BONUS.atkPercent / 100) * count)}<br>
        　MaxHP +${Math.floor(defaultPlayer.maxHp * (REBIRTH_BONUS.hpPercent / 100) * count)}<br>
        　GOLD取得 +${REBIRTH_BONUS.goldPercent * count}%
      </div>

      <div style="
        background:#0d1b2a;
        border:2px solid #336;
        padding:16px;
        margin-bottom:20px;
        font-size:14px;
        color:#88aaff;
        line-height:2;
      ">
        次の転生ボーナス :<br>
        　ATK +${atkBonus}<br>
        　MaxHP +${hpBonus}<br>
        　GOLD取得 +${goldBonus}%
      </div>

      <div style="color:${canDo ? "lime" : "#888"};margin-bottom:12px;">
        ${canDo
          ? "✅ 転生可能！"
          : `🔒 Lv.${REBIRTH_LEVEL}で転生可能（現在 Lv.${player.level}）`
        }
      </div>

      <button
        onclick="doRebirth()"
        ${canDo ? "" : "disabled"}
        style="font-size:20px;"
      >
        転生する
      </button>

    </div>
  `;

}
