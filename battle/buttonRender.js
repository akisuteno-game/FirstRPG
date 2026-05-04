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
        onclick="location.href='../index.html'"
      >

        戻る

      </button>

    </div>

  `;


}
