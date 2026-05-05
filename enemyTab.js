function renderEnemyTab(){

  const list = document.getElementById("list");

  if(!list){
    return;
  }

  if(
    typeof enemies === "undefined"
    || enemies.length === 0
  ){
    list.innerHTML = "敵データなし";
    return;
  }

  let html = "";

  enemies.forEach(function(enemy){

    html += `
      <div
        class="enemyCard"
        onclick="location.href='battle.html?id=${enemy.id}'"
      >
        <img
          src="${enemy.img || ""}"
          width="100"
          onerror="this.style.display='none'"
        >
        <br>

        ${enemy.name}
        <br><br>

        HP : ${enemy.hp}<br>
        ATK : ${enemy.atk}<br>
        速度 : ${(enemy.speed / 1000).toFixed(1)}秒<br>
        GOLD : ${enemy.drop}<br>
        EXP : ${enemy.exp}<br><br>

        通常 : ${enemy.material || "なし"}<br>
        レア : ${enemy.rareMaterial || "なし"}
      </div>
    `;

  });

  list.innerHTML = html;

}
