function renderEnemy(){


  return `

    <h2>

      ${currentEnemy.name}

    </h2>




    <img

      class="
        enemyImg
      "

      src="${
        currentEnemy.img
      }"

      onerror="
        this.style.display=
        'none'
      "

    >

  `;


}
