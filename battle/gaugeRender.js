function renderGauges(){


  return `

    <div class="gaugeBox">

      <div>
        自分ゲージ
      </div>

      <div class="gaugeBar">

        <div
          id="playerGauge"
          style="
            width:0%;
            height:100%;
            background:lime;
            display:block;
          "
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
          style="
            width:0%;
            height:100%;
            background:red;
            display:block;
          "
        ></div>

      </div>

    </div>

  `;


}
