function renderGauges(){

  return `

    <div>
      自分ゲージ
      <div class="gaugeBox">
        <div id="playerGauge" class="gaugeFill" style="width:0%;background:lime;"></div>
      </div>
    </div>

    <div>
      敵ゲージ
      <div class="gaugeBox">
        <div id="enemyGauge" class="gaugeFill" style="width:0%;background:red;"></div>
      </div>
    </div>

  `;

}
