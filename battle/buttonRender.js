function renderButtons(){

  return `

    <div class="buttonRow">

      <button
        id="attackBtn"
        class="battleBtn"
        onclick="attackEnemy()"
      >
        攻撃
      </button>

      <button
        class="battleBtn"
        onclick="usePotion()"
      >
        ポーション（${player.potions}）
      </button>

      <button
        class="battleBtn"
        onclick="location.href='https://akisuteno-game.github.io/FirstRPG/index.html'"
      >
        戻る
      </button>

    </div>

  `;

}
