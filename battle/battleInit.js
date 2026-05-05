document.addEventListener(

  "DOMContentLoaded",

  function(){

    const area =

      document.getElementById(
        "battleArea"
      );




    if(
      !area
    ){

      alert(
        "battleArea none"
      );

      return;

    }




    // localStorageから選択した敵IDを取得
    const savedId =

      parseInt(
        localStorage.getItem(
          "selectedEnemy"
        )
      );




    // enemiesから該当する敵を探す
    const found =

      enemies.find(

        function(e){

          return e.id === savedId;

        }

      );




    if(
      !found
    ){

      alert(
        "敵データが見つかりません"
      );

      return;

    }




    // currentEnemyをグローバルに設定
    window.currentEnemy =

      Object.assign(
        {},
        found
      );




    window.currentEnemy.maxHp =
      found.hp;




    // バトル画面を描画
    area.innerHTML = `

      <div class="battleWrap">

        <img
          src="${currentEnemy.img}"
          class="enemyImg"
        >

        <br><br>

        ${renderEnemyHp()}

        ${renderGauges()}

        ${renderButtons()}

      </div>

    `;




    // ゲージ開始
    startPlayerGauge();

    startEnemyGauge();




    console.log(
      "BATTLE INIT OK",
      currentEnemy.name
    );

  }

);
