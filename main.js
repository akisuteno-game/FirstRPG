function startMain(){

  load();

  makeEnemyButtons();

  loop();
}

// battleでもindexでも両対応
window.addEventListener(
  "load",
  startMain
);

// ===== 敵ボタン =====
function makeEnemyButtons(){

  const list =
    document.getElementById("list");

  if(!list) return;

  list.innerHTML = "";

  for(let e of enemies){

    let btn =
      document.createElement("button");

    btn.innerText = e.name;

    btn.onclick = function(){

      location.href =
        "battle.html?enemy="+e.id;
    };

    list.appendChild(btn);

    list.appendChild(
      document.createElement("br")
    );
  }
}

// ===== 左UI =====
function drawStatus(){

  const status =
    document.getElementById("status");

  if(!status) return;

  let rate =
    player.hp/player.maxHP;

  let color = "lime";

  if(rate < 0.1){
    color = "red";
  }
  else if(rate < 0.5){
    color = "orange";
  }

  let itemsHTML = "";

  for(let name in itemIcons){

    let count =
      player.items[name] || 0;

    itemsHTML += `

      <div class="itemRow">

        <span class="itemIcon">
          ${itemIcons[name]}
        </span>

        ${name} ×${count}

      </div>

    `;
  }

  status.innerHTML = `

    HP

    <div class="bar">

      <div
        class="fill"

        style="
          width:${rate*100}%;
          background:${color};
        ">
      </div>

      <div class="hpText">
        ${player.hp}/${player.maxHP}
      </div>

    </div>

    攻撃:${player.atk}<br>
    クリ率:${player.crit}%<br>

    <hr>

    ${itemsHTML}

  `;
}

// ===== 共通ループ =====
function loop(){

  autoHeal();

  fixHP();

  drawStatus();

  requestAnimationFrame(loop);
}
