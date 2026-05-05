function renderPlayer(){

  const ui = document.getElementById("playerUI");

  if(!ui){
    return;
  }

  const hpPercent =
    (player.hp / player.maxHp) * 100;

  const nextExp = expToNextLevel(player.level);
  const expPercent =
    Math.min((player.exp / nextExp) * 100, 100);

  ui.innerHTML = `

    <div class="statusLabel">Lv. ${player.level}</div>

    <div class="statusLabel">EXP</div>
    <div class="bar">
      <div id="playerExpFill" class="fill" style="width:${expPercent}%;background:#88f;"></div>
    </div>
    <div class="statusSub">${player.exp} / ${nextExp}</div>

    <br>

    <div class="statusLabel">HP : ${player.hp} / ${player.maxHp}</div>
    <div class="bar">
      <div id="playerHpFill" class="fill" style="width:${hpPercent}%;"></div>
    </div>

    <br>

    攻撃 : ${player.atk}<br><br>
    クリ率 : ${player.crit}%<br><br>
    攻撃速度 : ${(player.attackSpeed / 1000).toFixed(1)}秒<br><br>
    GOLD : ${player.gold}<br><br>
    ポーション : ${player.potions}個<br><br>
    撃破数 : ${player.killCount}<br><br>

    素材 :<br>
    ${createMaterialHTML()}

  `;

  // HPバー色
  const hpBar = document.getElementById("playerHpFill");
  if(hpBar){
    if(hpPercent > 70){
      hpBar.style.background = "lime";
    } else if(hpPercent > 30){
      hpBar.style.background = "yellow";
    } else {
      hpBar.style.background = "red";
    }
  }

}
