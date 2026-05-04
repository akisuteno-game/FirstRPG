function renderBattle(){


  const area =

    document.getElementById(
      "battleArea"
    );




  area.innerHTML = `

    <img
      src="${currentEnemy.img}"
      class="enemyImage"
    >


    <h2>
      ${currentEnemy.name}
    </h2>


    <div>

      HP :
      <span id="enemyHpText">
        ${currentEnemy.hp}
      </span>

    </div>


    <div>
      攻撃速度 :
      ${currentEnemy.speed}ms
      (
      ${currentEnemy.speed / 1000}秒
      )
    </div>


    <div class="hpBar">

      <div
        id="enemyHpFill"
        class="hpFill"
        style="
          width:100%;
          background:lime;
        "
      ></div>

    </div>


    <div id="gaugeArea">

      ${renderGauges()}

    </div>




    <div id="buttonArea">

      ${renderButtons()}

    </div>

  `;


}
