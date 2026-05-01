let player = {
  hp:20,
  maxHP:20,
  atk:3,
  crit:10,
  speed:1.2,
  items:{}
};

function fixHP(){

  if(!player.items){
    player.items = {};
  }

  player.hp = Math.floor(player.hp);

  if(player.hp < 0){
    player.hp = 0;
  }

  if(player.hp > player.maxHP){
    player.hp = player.maxHP;
  }
}

function save(){

  fixHP();

  localStorage.setItem(
    "player",
    JSON.stringify(player)
  );
}

function load(){

  let d =
    localStorage.getItem("player");

  if(d){

    player = JSON.parse(d);

    if(!player.items){
      player.items = {};
    }
  }

  fixHP();
}
