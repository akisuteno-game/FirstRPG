let currentEnemy = null;




function initBattle(){

  try{

    console.log(
      "INIT START"
    );




    const enemyId =

      localStorage.getItem(
        "selectedEnemy"
      );




    console.log(
      "enemyId = ",
      enemyId
    );




    if(
      enemyId === null
    ){
      return;
    }




    currentEnemy =

      enemies.find(

        function(enemy){

          return (

            Number(
              enemy.id
            )

            ===

            Number(
              enemyId
            )

          );

        }

      );




    console.log(
      "FOUND = ",
      currentEnemy
    );




    if(
      !currentEnemy
    ){

      document
        .getElementById(
          "battleArea"
        )
        .innerHTML =

        "<h1 style='color:white'>enemy not found</h1>";

      return;

    }




    currentEnemy.maxHp =

      currentEnemy.hp;




    renderBattle();

    console.log(
      "renderBattle OK"
    );




    if(
      typeof renderPlayer
      ===
      "function"
    ){

      renderPlayer();

      console.log(
        "renderPlayer OK"
      );

    }




    if(
      typeof startPlayerGauge
      ===
      "function"
    ){

      startPlayerGauge();

      console.log(
        "startPlayerGauge OK"
      );

    }




    if(
      typeof startEnemyGauge
      ===
      "function"
    ){

      startEnemyGauge();

      console.log(
        "startEnemyGauge OK"
      );

    }

  }

  catch(error){

    document
      .getElementById(
        "battleArea"
      )
      .innerHTML =

      `
      <h1 style="color:red">

        ERROR

      </h1>

      <pre style="color:white">

        ${error}

      </pre>
      `;




    console.error(
      error
    );

  }

}




initBattle();
