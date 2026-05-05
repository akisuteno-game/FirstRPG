function debug(text){

  let box = document.getElementById("debugBox");

  if(!box){

    box = document.createElement("div");
    box.id = "debugBox";
    box.style.position = "fixed";
    box.style.top      = "20px";
    box.style.right    = "20px";
    box.style.color    = "lime";
    box.style.zIndex   = "9999";
    box.style.fontSize = "12px";

    document.body.appendChild(box);

  }

  box.textContent = text;

}




debug("DEBUG OK");
