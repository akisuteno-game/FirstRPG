function renderEnemy(){


  return `


    <div class="enemyBox">


      <img

        class="enemyImage"

        src="${currentEnemy.img}"

      >




      <div class="battleInfo">


        <div>

          ${currentEnemy.name}

        </div>




        <div class="hpRow">


          HP :


          <span

            id="enemyHpText"

          >


            ${currentEnemy.hp}


          </span>


        </div>




        <div>


          攻撃速度 :

          ${

            currentEnemy.speed
            /
            1000

          }秒


        </div>




        ${renderGauges()}




      </div>


    </div>


  `;


}
