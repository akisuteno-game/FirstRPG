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
        onclick="location.href='/FirstRPG/'"
      >
        戻る
      </button>

    </div>

  `;

}
