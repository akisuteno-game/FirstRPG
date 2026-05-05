function canRebirth(){
  return player.level >= REBIRTH_LEVEL;
}

function doRebirth(){

  if(!canRebirth()){
    alert(`転生にはLv.${REBIRTH_LEVEL}が必要です`);
    return;
  }

  if(!confirm(
    `転生しますか？\nレベル・GOLDはリセットされますが\n永続ボーナスが強化されます！`
  )){
    return;
  }

  player.rebirthCount = (player.rebirthCount || 0) + 1;

  // レベル・経験値リセット
  player.level = 1;
  player.exp   = 0;

  // GOLDリセット
  player.gold = 0;

  // スキルポイントリセット
  player.skillPoints    = 0;
  player.usedSkillPoints = 0;
  player.skills         = {};

  // ステータスをデフォルトに戻してからボーナス適用
  player.atk         = defaultPlayer.atk;
  player.maxHp       = defaultPlayer.maxHp;
  player.hp          = defaultPlayer.maxHp;
  player.attackSpeed = defaultPlayer.attackSpeed;
  player.crit        = defaultPlayer.crit;

  applyRebirthBonus();

  savePlayer();

  alert(
    `転生完了！\n称号：${getRebirthTitle(player.rebirthCount)}\n\nATK・HPにボーナスがつきました！`
  );

  renderPlayer();

  if(typeof renderRebirthTab === "function"){
    renderRebirthTab();
  }

  if(typeof renderUpgradeTab === "function"){
    renderUpgradeTab();
  }

}

function applyRebirthBonus(){

  const count = player.rebirthCount || 0;

  if(count === 0){ return; }

  const atkBonus = Math.floor(
    defaultPlayer.atk * (REBIRTH_BONUS.atkPercent / 100) * count
  );

  const hpBonus = Math.floor(
    defaultPlayer.maxHp * (REBIRTH_BONUS.hpPercent / 100) * count
  );

  player.atk   += atkBonus;
  player.maxHp += hpBonus;
  player.hp     = player.maxHp;

}
