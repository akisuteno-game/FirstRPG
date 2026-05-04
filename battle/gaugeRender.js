function renderGauges(){


  return `

    <div style="
      width:260px;
      margin:12px auto;
    ">

      <div>
        自分ゲージ
      </div>

      <div style="
        width:260px;
        height:24px;
        border:2px solid white;
        background:#222;
      ">

        <div
          id="playerGauge"
          style="
            width:0%;
            height:24px;
            background:lime !important;
            display:block !important;
          "
        ></div>

      </div>

    </div>




    <div style="
      width:260px;
      margin:12px auto;
    ">

      <div>
        敵ゲージ
      </div>

      <div style="
        width:260px;
        height:24px;
        border:2px solid white;
        background:#222;
      ">

        <div
          id="enemyGauge"
          style="
            width:0%;
            height:24px;
            background:red !important;
            display:block !important;
          "
        ></div>

      </div>

    </div>

  `;


}
