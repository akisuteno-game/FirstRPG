function renderEnemy(){


  return `

    <div class="enemyBox">


      <img

        class="enemyImage"

        src="${currentEnemy.img}"

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

        ${currentEnemy.speed / 1000}秒


      </div>


    </div>

  `;


}
