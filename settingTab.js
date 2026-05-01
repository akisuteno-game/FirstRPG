function resetData(){

  if(
    !confirm(
      "データをリセットする？"
    )
  ){
    return;
  }

  localStorage.removeItem(
    "player"
  );

  location.reload();
}


function exportSave(){

  let data =
    JSON.stringify(
      player
    );

  alert(data);
}
