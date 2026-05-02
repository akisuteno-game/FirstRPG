const enemies = [

  {
    name:"スライム",
    img:"img/monsters/slime.png"
  },

  {
    name:"ゴブリン",
    img:"img/monsters/goblin.png"
  },

  {
    name:"オーク",
    img:"img/monsters/orc.png"
  },

  {
    name:"ドラゴン",
    img:"img/monsters/dragon.png"
  }

];




function renderEnemyTab(){


  const list =
    document.getElementById(
      "list"
    );


  if(!list){

    return;

  }


  list.innerHTML = "";


  enemies.forEach(enemy=>{


    list.innerHTML += `

      <div
        style="
          margin:20px;
          cursor:pointer;
        "
      >

        <img
          src="${enemy.img}"
          width="120"
        >

        <br>

        ${enemy.name}

      </div>

    `;


  });


}
