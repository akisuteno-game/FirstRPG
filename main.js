window.addEventListener(
  "load",
  startMain
);

function startMain(){

  load();

  makeEnemyButtons();

  drawStatus(); // 即表示

  loop();
}


// ===== タブ =====
function showTab(id){

  let tabs =
    document.getElementsByClassName(
      "tabPage"
    );

  for(let t of tabs){

    t.classList.remove(
      "activePage"
    );
  }

  document
    .getElementById(id)
    .classList.add(
      "activePage"
    );
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
