// 戦闘ログ
const battleLog = [];




function addLog(text){

  battleLog.unshift(text);

  if(battleLog.length > 5){
    battleLog.pop();
  }

  const box = document.getElementById("battleLog");

  if(box){
    box.innerHTML = battleLog
      .map(function(t){ return `<div>${t}</div>`; })
      .join("");
  }

}




function renderBattle(){

  // battleInit.js で描画するため未使用
  console.log("renderBattle: 未使用");

}
