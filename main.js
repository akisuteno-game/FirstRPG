window.addEventListener(
  "load",
  startMain
);


// ===== 起動 =====
function startMain(){

  load();

  if(
    typeof makeEnemyButtons
    === "function"
  ){
    makeEnemyButtons();
  }

  drawStatus();

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

  let page =
    document.getElementById(
      id
    );

  if(page){

    page.classList.add(
      "activePage"
    );
  }
}


// ===== 左ステータス =====
function drawStatus(){

  const status =
    document.getElementById(
      "status"
    );

  if(!status) return;


  let rate =
    player.hp /
    player.maxHP;


  let color =
    "lime";


  if(rate < 0.1){

    color = "red";
  }

  else if(
    rate < 0.5
  ){

    color = "orange";
  }


  let itemsHTML =
    "";


  if(
    typeof itemIcons
    !== "undefined"
  ){

    for(
      let name
      in itemIcons
    ){

      let count =
        player.items[name]
        || 0;


      itemsHTML += `

        <div class="itemRow">

          <span class="itemIcon">

            ${itemIcons[name]}

          </span>

          ${name} ×${count}

        </div>

      `;
    }
  }


  status.innerHTML = `

    <h3>
      ステータス
    </h3>


    HP


    <div class="bar">

      <div
        class="fill"

        style="
          width:${rate*100}%;
          background:${color};
        ">
      </div>


      <div
        class="hpText">

        ${Math.floor(
          player.hp
        )}


        /


        ${player.maxHP}

      </div>

    </div>


    攻撃:
    ${player.atk}

    <br>


    クリ率:
    ${player.crit}%


    <hr>


    ${itemsHTML}

  `;
}


// ===== ループ =====
function loop(){

  if(
    typeof autoHeal
    === "function"
  ){
    autoHeal();
  }


  if(
    typeof fixHP
    === "function"
  ){
    fixHP();
  }


  drawStatus();


  requestAnimationFrame(
    loop
  );
}
