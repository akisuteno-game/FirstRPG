const defaultPlayer = {

  hp:30,

  maxHp:30,

  atk:5,

  crit:5,

  gold:0,

  materials:{}

};




const player =

  JSON.parse(

    JSON.stringify(
      defaultPlayer
    )

  );
