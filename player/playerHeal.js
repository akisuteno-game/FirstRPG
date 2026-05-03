let healLoop = null;




function startAutoHeal(){


  if(

    location.pathname.includes(
      "battle"
    )

  ){

    return;

  }




  clearInterval(
    healLoop
  );




  healLoop =

    setInterval(


      function(){


        if(

          player.hp
          >=
          player.maxHp

        ){

          return;

        }




        const heal =

          Math.ceil(

            player.maxHp
            *
            0.1

          );




        player.hp +=
          heal;




        if(

          player.hp
          >
          player.maxHp

        ){

          player.hp =
            player.maxHp;

        }




        savePlayer();




        renderPlayer();


      },


      1000


    );


}




startAutoHeal();
