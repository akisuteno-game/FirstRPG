let player = {
  hp:20,maxHP:20,atk:3,
  critRate:10,critDmg:1.5,
  speed:1.2,
  items:{}
};

function save(){
  localStorage.setItem("player",JSON.stringify(player));
}

function load(){
  let d = localStorage.getItem("player");
  if(d){
    player = JSON.parse(d);
    if(!player.items) player.items = {};
  }
}
