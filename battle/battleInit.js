document.addEventListener(

  "DOMContentLoaded",

  function(){

    const area = document.getElementById("battleArea");

    if(!area){
      alert("battleArea none");
      return;
    }


    // URLパラメータ ?id= を優先、なければ localStorage
    const params  = new URLSearchParams(location.search);
    const urlId   = params.get("id");
    const savedId = urlId !== null
      ? parseInt(urlId)
      : parseInt(localStorage.getItem("selectedEnemy"));


    // 敵データを検索
    const found = enemies.find(function(e){
      return e.id === savedId;
    });

    if(!found){
      area.innerHTML =
        "<p style='color:white;margin-top:40px;'>敵データが見つかりません</p>";
      return;
    }


    // currentEnemy をグローバルに設定
    window.currentEnemy        = Object.assign({}, found);
    window.currentEnemy.maxHp  = found.hp;


    // playerData をロード
    if(typeof loadPlayer === "function"){
      loadPlayer();
    }


    // バトル画面を描画
    area.innerHTML = `

      <div class="battleWrap">

        <div style="font-size:20px;margin-bottom:8px;">
          ${currentEnemy.name}
        </div>

        <img
          src="${currentEnemy.img}"
          class="enemyImg"
          onerror="this.style.display='none'"
        >

        <br><br>

        ${renderEnemyHp()}

        <div style="margin:10px 0;font-size:14px;">
          自分 HP :
          <span id="battlePlayerHpText">
            ${player.hp} / ${player.maxHp}
          </span>
          <div class="hpBox">
            <div
              id="battlePlayerHpFill"
              class="hpFill"
              style="width:${(player.hp/player.maxHp)*100}%;"
            ></div>
          </div>
        </div>

        ${renderGauges()}

        ${renderButtons()}

        <div
          id="battleLog"
          style="
            margin-top:16px;
            font-size:13px;
            color:#aaa;
            min-height:80px;
            text-align:left;
            width:260px;
            margin-left:auto;
            margin-right:auto;
          "
        ></div>

      </div>

    `;


    // ゲージ開始
    startPlayerGauge();
    startEnemyGauge();

    addLog(`⚔️ ${currentEnemy.name} との戦闘開始！`);

    console.log("BATTLE INIT OK", currentEnemy.name);

  }

);
