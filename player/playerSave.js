loadPlayer();




function loadPlayer(){


  const saved =

    localStorage.getItem(
      "playerData"
    );




  if(!saved){

    return;

  }




  Object.assign(

    player,

    JSON.parse(
      saved
    )

  );


}




function savePlayer(){


  localStorage.setItem(

    "playerData",

    JSON.stringify(
      player
    )

  );


}




function resetPlayer(){


  Object.assign(

    player,

    JSON.parse(

      JSON.stringify(
        defaultPlayer
      )

    )

  );




  savePlayer();


}
