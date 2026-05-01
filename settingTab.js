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
