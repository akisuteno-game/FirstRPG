function upgradeAtk(){

  let cost = 2;

  if(
    (player.items["ゼリー"]||0)
    < cost
  ){
    alert(
      "ゼリーが足りない"
    );
    return;
  }

  player.items["ゼリー"]
    -= cost;

  player.atk++;

  save();

  drawStatus();

  alert(
    "攻撃アップ！"
  );
}
