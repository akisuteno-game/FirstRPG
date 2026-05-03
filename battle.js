let currentEnemy = null;




window.onload =
function(){


  renderPlayer();


  const area =
    document.getElementById(
      "battleArea"
    );


  if(!area){

    return;

  }


  const savedEnemy =

    localStorage.getItem(
      "selectedEnemy"
    );


  if(!savedEnemy){

    area.innerHTML =

      "<h1>敵が選ばれていません</h1>";

    return;

  }


  currentEnemy =

    JSON.parse(
      savedEnemy
    );


  area.innerHTML =

    "<div>" +

    "<h1>" +

    currentEnemy.name +

    "</h1>" +

    "<img src='" +

    currentEnemy.img +

    "' width='220'>" +

    "<br><br>" +

    "敵HP : " +

    "<span id='enemyHpText'>" +

    currentEnemy.hp +

    "</span>" +

    "<br><br>" +

    "<button onclick='attackEnemy()'>" +

    "攻撃" +

    "</button>" +

    "<br><br>" +

    "<button onclick=\"location.href='index.html'\">" +

    "戻る" +

    "</button>" +

    "</div>";


};




function attackEnemy(){


  currentEnemy.hp -=
    player.atk;


  if(
    currentEnemy.hp < 0
  ){

    currentEnemy.hp = 0;

  }


  document
    .getElementById(
      "enemyHpText"
    )
    .innerHTML =

      currentEnemy.hp;


  if(
    currentEnemy.hp <= 0
  ){

    alert(
      currentEnemy.name
      +
      " を倒した！"
    );

  }


}
