function renderEnemy(){


  return `

    <h2>

      ${currentEnemy.name}

    </h2>




    <img

      src="${
        currentEnemy.img
      }"

      width="150"

      onerror="
        this.style.display=
        'none'
      "

    >

  `;


}
