window.addEventListener(
  "load",
  startMain
);

async function startMain(){

  load();

  await showTab(
    "enemyTab",
    "enemyTab.html"
  );

  drawStatus();

  loop();
}


// ===== タブ =====
async function showTab(
  id,
  file
){

  let tabs =
    document.getElementsByClassName(
      "tabPage"
    );

  for(let t of tabs){

    t.classList.remove(
      "activePage"
    );
  }

  let page =
    document.getElementById(
      id
    );

  page.innerHTML =
    await fetch(file)
    .then(
      r=>r.text()
    );

  page.classList.add(
    "activePage"
  );

  if(
    id==="enemyTab"
  ){
    makeEnemyButtons();
  }
}


// ===== 左UI =====
function drawStatus(){

  const status =
    document.getElementById(
      "status"
    );

  if(!status) return;

  let rate =
    player.hp/player.maxHP;

  let color =
    "lime";

  if(rate<0.1){
    color="red";
  }
  else if(rate<0.5){
    color="orange";
  }

  let itemsHTML =
    "";

  for(
    let name
    in itemIcons
  ){

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


// ===== ループ =====
function loop(){

  autoHeal();

  fixHP();

  drawStatus();

  requestAnimationFrame(
    loop
  );
}
