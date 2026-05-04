function attackEnemy(){


  if(
    !currentEnemy
  ){

    return;

  }




  if(
    playerGauge < 100
  ){

    return;

  }




  playerGauge = 0;




  const gauge =

    document.getElementById(
      "playerGauge"
    );




  if(
    gauge
  ){

    gauge.style.width =
      "0%";

  }




  currentEnemy.hp -=
    player.atk;




  if(
    currentEnemy.hp < 0
  ){

    currentEnemy.hp = 0;

  }




  updateEnemyUI();




  if(
    currentEnemy.hp <= 0
  ){


      player.gold +=
        currentEnemy.drop;




      if(
        Math.random() < 0.5
      ){

        const material =

          currentEnemy.material;




        if(
          !player.materials[
            material
          ]
        ){

          player.materials[
            material
          ] = 0;

        }




        player.materials[
          material
        ]++;

      }




      if(
        Math.random() < 0.1
      ){

        const rareMaterial =

          currentEnemy.rareMaterial;




        if(
          !player.materials[
            rareMaterial
          ]
        ){

          player.materials[
            rareMaterial
          ] = 0;

        }




        player.materials[
          rareMaterial
        ]++;

      }




      savePlayer();




      localStorage.removeItem(
        "selectedEnemy"
      );




      setTimeout(

        function(){

          location.href =
            "index.html";

        },

        500

      );




      return;

  }




  startPlayerGauge();


}
