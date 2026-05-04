function renderBattle(){


  const area =

    document.getElementById(
      "battleArea"
    );




  area.innerHTML = `

    <div class="enemyBox">



      <img
        src="${currentEnemy.img}"
        class="enemyImage"
      >




      <div class="battleInfo">



        <h2>
          ${currentEnemy.name}
        </h2>




        <div class="hpRow">

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




        <div class="gaugeBox">

          <div
            id="enemyHpFill"
            class="enemyHpFill"
          ></div>

        </div>




        ${renderGauges()}




        ${renderButtons()}



      </div>



    </div>

  `;


}
