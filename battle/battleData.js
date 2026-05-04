const params =

  new URLSearchParams(
    location.search
  );




const enemyId =

  Number(

    params.get(
      "id"
    )

  );




const currentEnemy =

  enemies.find(

    function(enemy){

      return (
        enemy.id
        ===
        enemyId
      );

    }

  );
