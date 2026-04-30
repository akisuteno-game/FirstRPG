const params = new URLSearchParams(location.search);
const id = params.get("enemy");

let enemy = {...enemies[id]};
enemy.maxHP = enemy.hp;

const enemyName = document.getElementById("enemyName");
const enemyHP = document.getElementById("enemyHP");
const enemyBar = document.getElementById("enemyBar");
const text = document.getElementById("text");

enemyName.innerText = enemy.name;

function update(){
  enemyHP.innerText = enemy.hp+"/"+enemy.maxHP;
  enemyBar.style.width = (enemy.hp/enemy.maxHP*100)+"%";
}

function attack(){
  enemy.hp -= 3;
  text.innerText = "攻撃！";

  if(enemy.hp <= 0){
    text.innerText = "勝利！";
  }

  update();
}

function back(){
  location.href = "index.html";
}

update();
