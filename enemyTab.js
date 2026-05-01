function makeEnemyButtons(){

  const list =
    document.getElementById(
      "list"
    );

  if(!list) return;

  list.innerHTML = "";

  for(let e of enemies){

    let btn =
      document.createElement(
        "button"
      );

    btn.innerText =
      e.name;

    btn.onclick =
      function(){

        location.href =
          "battle.html?enemy="+e.id;
      };

    list.appendChild(
      btn
    );

    list.appendChild(
      document.createElement("br")
    );
  }
}
