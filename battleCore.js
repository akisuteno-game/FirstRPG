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




function renderBattle(){


  const area =

    document.getElementById(
      "battleArea"
    );




  if(
    !area
  ){

    return;

  }




  if(
    !currentEnemy
  ){

    area.innerHTML =
      "敵がいません";

    return;

  }




  area.innerHTML = `

    <div

      style="

        display:flex;
        align-items:center;
        gap:40px;

      "

    >




      <div

        style="
          text-align:center;
        "

      >




        <
