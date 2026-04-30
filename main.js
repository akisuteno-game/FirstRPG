load();

const list = document.getElementById("list");

enemies.forEach(e=>{
  const btn = document.createElement("button");
  btn.textContent = e.name;

  btn.onclick = ()=>{
    location.href = "battle.html?enemy="+e.id;
  };

  list.appendChild(btn);
  list.appendChild(document.createElement("br"));
});
