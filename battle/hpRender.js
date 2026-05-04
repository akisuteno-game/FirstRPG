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

      style="
        width:200px;
        height:20px;
        border:1px solid white;
        margin:auto;
      "

    >




      <div

        id="
          enemyHpFill
        "

        style="
          width:100%;
          height:100%;
          background:lime;
        "

      >
      </div>




    </div>

  `;


}
