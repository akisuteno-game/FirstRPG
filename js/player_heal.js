let healLoop = null;

function startAutoHeal(){
  if(location.pathname.includes("battle")){ return; }
  clearInterval(healLoop);
  healLoop = setInterval(function(){
    if(player.hp >= player.maxHp){ return; }
    const heal = Math.ceil(player.maxHp * 0.1);
    player.hp = Math.min(player.hp + heal, player.maxHp);
    savePlayer();
    if(typeof renderPlayer === "function"){ renderPlayer(); }
  }, 1000);
}

startAutoHeal();
