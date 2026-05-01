window.onload = function(){

  load();

  makeEnemyButtons();

  loop();
};

// ===== 敵ボタン =====
function makeEnemyButtons(){

  const list =
    document.getElementById("list");

  if(!list) return;

  list.innerHTML = "";

  for(let i=0;i<enemies.length;i++){

    let e = enemies[i];

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

  let hp =
    Math.floor(player.hp);

  let max =
    player.maxHP;

  let rate =
    hp/max;

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

      <div class="fill"
        style="
          width:${rate*100}%;
          background:${color};
        ">
      </div>

      <div class="hpText">
        ${hp}/${max}
      </div>

    </div>

    攻撃: ${player.atk}<br>
    クリ率: ${player.crit}%<br>

    <hr>

    素材

    ${itemsHTML}

  `;
}

// ===== 共通ループ =====
function loop(){

  fixHP();

  drawStatus();

  requestAnimationFrame(loop);
}
