function makeEnemyButtons(){

  const list =
    document.getElementById(
      "list"
    );

  if(!list) return;

  list.innerHTML = "";

  // 2列グリッド
  list.style.display =
    "grid";

  list.style.gridTemplateColumns =
    "1fr 1fr";

  list.style.gap =
    "12px";


  for(let e of enemies){

    let btn =
      document.createElement(
        "button"
      );

    btn.style.height =
      "120px";

    btn.style.fontSize =
      "18px";

    btn.innerHTML = `

      <div
        style="
          font-size:48px;
        ">

        ${e.icon}

      </div>

      ${e.name}

    `;

    btn.onclick =
      function(){

        location.href =
          "battle.html?enemy="+e.id;
      };

    list.appendChild(
      btn
    );
  }
}
