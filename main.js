window.onload = function(){

  load(); // プレイヤー読み込み

  const list = document.getElementById("list");

  for(let i=0;i<enemies.length;i++){
    let e = enemies[i];

    let btn = document.createElement("button");
    btn.innerText = e.name;

    btn.onclick = function(){
      location.href = "battle.html?enemy="+e.id;
    };

    list.appendChild(btn);
    list.appendChild(document.createElement("br"));
  }

};
