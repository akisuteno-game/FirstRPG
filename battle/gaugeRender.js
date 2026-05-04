function renderGauges(){


  return `

    <div class="gaugeBox">

      <div>
        自分ゲージ
      </div>

      <div class="gaugeBar">

        <div
          id="playerGauge"
          class="gaugeFill"
        ></div>

      </div>

    </div>




    <div class="gaugeBox">

      <div>
        敵ゲージ
      </div>

      <div class="gaugeBar">

        <div
          id="enemyGauge"
          class="gaugeFill"
        ></div>

      </div>

    </div>

  `;


}
