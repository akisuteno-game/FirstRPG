function renderEnemyHp(){


  return `

    HP :

    <span
      id="
        enemyHpText
      "
    >

      ${currentEnemy.hp}

    </span>




    <div

      class="
        hpBox
      "

    >




      <div

        id="
          enemyHpFill
        "

        class="
          hpFill
        "

      >
      </div>




    </div>




    <br><br>

  `;


}
