const defaultPlayer = {

  hp: 30,
  maxHp: 30,

  atk: 5,
  attackSpeed: 2000,

  crit: 5,
  critMulti: 1.5,

  gold: 0,
  exp: 0,
  level: 1,

  skillPoints: 0,
  usedSkillPoints: 0,
  skills: {},

  rebirthCount: 0,

  killCount: 0,

  potions: 0,

  goldBonus: 0,

  materials: {}

};




const player =

  JSON.parse(
    JSON.stringify(defaultPlayer)
  );




function expToNextLevel(level){
  return level * 10;
}
loadPlayer();




function loadPlayer(){

  const saved =
    localStorage.getItem("playerData");

  if(!saved){
    return;
  }

  Object.assign(
    player,
    JSON.parse(saved)
  );

}




function savePlayer(){

  localStorage.setItem(
    "playerData",
    JSON.stringify(player)
  );

}




function resetPlayer(){

  Object.assign(
    player,
    JSON.parse(
      JSON.stringify(defaultPlayer)
    )
  );

  savePlayer();

}
let healLoop = null;




function startAutoHeal(){

  if(
    location.pathname.includes("battle")
  ){
    return;
  }

  clearInterval(healLoop);

  healLoop = setInterval(

    function(){

      if(player.hp >= player.maxHp){
        return;
      }

      const heal =
        Math.ceil(player.maxHp * 0.1);

      player.hp += heal;

      if(player.hp > player.maxHp){
        player.hp = player.maxHp;
      }

      savePlayer();
      renderPlayer();

    },

    1000

  );

}




startAutoHeal();
function getMaterialPath(name){
  const paths = {
    "スライムゼリー": "img/materials/slimeGel.png",
    "キングゼリー": "img/materials/kingGel.png",
    "ゴブリンの牙": "img/materials/goblinTooth.png",
    "王族の牙": "img/materials/kingTooth.png",
    "オークの皮": "img/materials/orcSkin.png",
    "古代の皮": "img/materials/ancientSkin.png",
    "竜のウロコ": "img/materials/dragonScale.png",
    "紅竜の心臓": "img/materials/dragonHeart.png",
    "狼の毛皮": "img/materials/wolfFur.png",
    "銀の牙": "img/materials/silverFang.png",
    "骨のかけら": "img/materials/boneShard.png",
    "呪われた骨": "img/materials/cursedBone.png",
    "コウモリの羽": "img/materials/batWing.png",
    "漆黒の羽": "img/materials/darkWing.png",
    "毒の鱗": "img/materials/poisonScale.png",
    "猛毒の結晶": "img/materials/poisonCrystal.png",
    "腐った肉": "img/materials/rottenMeat.png",
    "呪いの心臓": "img/materials/cursedHeart.png",
    "王の印章": "img/materials/kingSeal.png",
    "黄金の王冠": "img/materials/goldenCrown.png",
    "氷の毛皮": "img/materials/iceFur.png",
    "極寒の牙": "img/materials/frostFang.png",
    "闇のエルフ耳": "img/materials/darkElfEar.png",
    "呪われた弓": "img/materials/cursedBow.png",
    "石の欠片": "img/materials/stoneShard.png",
    "魔法石": "img/materials/magicStone.png",
    "巨人の目玉": "img/materials/giantEye.png",
    "魔眼の結晶": "img/materials/magicEye.png",
    "ハーピーの羽": "img/materials/harpyWing.png",
    "嵐の羽根": "img/materials/stormFeather.png",
    "包帯の切れ端": "img/materials/bandage.png",
    "呪いの包帯": "img/materials/cursedBandage.png",
    "炎の結晶": "img/materials/flameCrystal.png",
    "業火の核": "img/materials/infernoCore.png",
    "錆びた鎧": "img/materials/rustedArmor.png",
    "呪いの剣": "img/materials/cursedSword.png",
    "海蛇の鱗": "img/materials/seaScale.png",
    "深海の宝石": "img/materials/deepGem.png",
    "氷竜のウロコ": "img/materials/iceScale.png",
    "氷竜の心臓": "img/materials/iceHeart.png",
    "闇の鎧片": "img/materials/darkArmorShard.png",
    "闇の剣": "img/materials/darkSword.png",
    "石化の鱗": "img/materials/petrifyScale.png",
    "石化の瞳": "img/materials/petrifyEye.png",
    "獣人の爪": "img/materials/beastClaw.png",
    "月の牙": "img/materials/moonFang.png",
    "幽霊の布": "img/materials/ghostCloth.png",
    "魂の結晶": "img/materials/soulCrystal.png",
    "炎の皮": "img/materials/flameSkin.png",
    "炎帝の核": "img/materials/infernoEmperorCore.png",
    "牛の角": "img/materials/bullHorn.png",
    "黄金の角": "img/materials/goldenHorn.png",
    "蛇の髪": "img/materials/snakeHair.png",
    "石化の眼": "img/materials/petrifyGaze.png",
    "吸血鬼の牙": "img/materials/vampireFang.png",
    "血の宝石": "img/materials/bloodGem.png",
    "鉄の欠片": "img/materials/ironShard.png",
    "魔鉄の核": "img/materials/magicIronCore.png",
    "雷鳥の羽": "img/materials/thunderFeather.png",
    "不死鳥の核": "img/materials/phoenixCore.png",
    "影の短剣": "img/materials/shadowDagger.png",
    "虚無の刃": "img/materials/voidBlade.png",
    "悪魔の角": "img/materials/demonHorn.png",
    "魔王の核": "img/materials/demonKingCore.png",
    "水晶の鱗": "img/materials/crystalScale.png",
    "虹色の結晶": "img/materials/rainbowCrystal.png",
    "巨神の骨": "img/materials/titanBone.png",
    "神話の石": "img/materials/mythStone.png",
    "魔女の杖": "img/materials/witchStaff.png",
    "禁忌の魔書": "img/materials/forbiddenBook.png",
    "死霊の指": "img/materials/undeadFinger.png",
    "魂の宝珠": "img/materials/soulOrb.png",
    "地獄犬の牙": "img/materials/hellhoundFang.png",
    "冥府の炎": "img/materials/infernoFlame.png",
    "グリフィンの羽": "img/materials/griffinWing.png",
    "聖なる羽根": "img/materials/holyFeather.png",
    "死霊術の書": "img/materials/necromancyBook.png",
    "禁断の魔法陣": "img/materials/forbiddenCircle.png",
    "魔神の核": "img/materials/demonCore.png",
    "魔神の心臓": "img/materials/demonHeart.png",
    "混沌の鱗": "img/materials/chaosScale.png",
    "混沌の核": "img/materials/chaosCore.png",
    "虚無の欠片": "img/materials/voidShard.png",
    "虚空の結晶": "img/materials/voidCrystal.png",
    "魂の破片": "img/materials/soulShard.png",
    "魂喰いの宝珠": "img/materials/soulEaterOrb.png",
    "世界蛇の鱗": "img/materials/worldScale.png",
    "神代の牙": "img/materials/divFang.png",
    "堕天使の羽": "img/materials/fallenWing.png",
    "聖なる涙": "img/materials/holyTear.png",
    "時の砂": "img/materials/timeSand.png",
    "時空の結晶": "img/materials/spacetimeCrystal.png",
    "古代の呪符": "img/materials/ancientCharm.png",
    "封印の宝珠": "img/materials/sealedOrb.png",
    "魔鋼の欠片": "img/materials/demonicSteelShard.png",
    "悪魔の核": "img/materials/demonCoreB.png",
    "深淵の結晶": "img/materials/abyssCrystal.png",
    "奈落の核": "img/materials/abyssCore.png",
    "神滅の鱗": "img/materials/godSlayerScale.png",
    "神滅龍の心臓": "img/materials/godSlayerHeart.png"
  };
  return paths[name] || null;
}
const materialEmoji = {
  "スライムゼリー": "🟢", "キングゼリー": "💛",
  "ゴブリンの牙": "🦷", "王族の牙": "👑",
  "オークの皮": "🟤", "古代の皮": "📜",
  "竜のウロコ": "🐉", "紅竜の心臓": "❤️",
  "狼の毛皮": "🐺", "銀の牙": "⚪",
  "骨のかけら": "🦴", "呪われた骨": "💀",
  "コウモリの羽": "🦇", "漆黒の羽": "🖤",
  "毒の鱗": "🟩", "猛毒の結晶": "💚",
  "腐った肉": "🍖", "呪いの心臓": "🖤",
  "王の印章": "📛", "黄金の王冠": "👑",
  "氷の毛皮": "🧊", "極寒の牙": "❄️",
  "闇のエルフ耳": "👂", "呪われた弓": "🏹",
  "石の欠片": "🪨", "魔法石": "💎",
  "巨人の目玉": "👁️", "魔眼の結晶": "🔮",
  "ハーピーの羽": "🪶", "嵐の羽根": "⚡",
  "包帯の切れ端": "🩹", "呪いの包帯": "⚫",
  "炎の結晶": "🔴", "業火の核": "🔥",
  "錆びた鎧": "🛡️", "呪いの剣": "⚔️",
  "海蛇の鱗": "🌊", "深海の宝石": "💠",
  "氷竜のウロコ": "🧊", "氷竜の心臓": "💙",
  "闇の鎧片": "⬛", "闇の剣": "🗡️",
  "石化の鱗": "🪨", "石化の瞳": "👁️",
  "獣人の爪": "🦡", "月の牙": "🌙",
  "幽霊の布": "👻", "魂の結晶": "✨",
  "炎の皮": "🔥", "炎帝の核": "☀️",
  "牛の角": "🐂", "黄金の角": "🌟",
  "蛇の髪": "🐍", "石化の眼": "😶",
  "吸血鬼の牙": "🧛", "血の宝石": "💔",
  "鉄の欠片": "⚙️", "魔鉄の核": "🔩",
  "雷鳥の羽": "⚡", "不死鳥の核": "🦅",
  "影の短剣": "🗡️", "虚無の刃": "🌑",
  "悪魔の角": "😈", "魔王の核": "💜",
  "水晶の鱗": "💎", "虹色の結晶": "🌈",
  "巨神の骨": "🦴", "神話の石": "🗿",
  "魔女の杖": "🪄", "禁忌の魔書": "📕",
  "死霊の指": "☠️", "魂の宝珠": "🔵",
  "地獄犬の牙": "🐕", "冥府の炎": "🟣",
  "グリフィンの羽": "🦅", "聖なる羽根": "🕊️",
  "死霊術の書": "📖", "禁断の魔法陣": "🔯",
  "魔神の核": "⭐", "魔神の心臓": "💗",
  "混沌の鱗": "🌀", "混沌の核": "🌀",
  "虚無の欠片": "⬜", "虚空の結晶": "🔲",
  "魂の破片": "💫", "魂喰いの宝珠": "🟣",
  "世界蛇の鱗": "🌍", "神代の牙": "🌠",
  "堕天使の羽": "🖤", "聖なる涙": "💧",
  "時の砂": "⏳", "時空の結晶": "🕰️",
  "古代の呪符": "📜", "封印の宝珠": "🔴",
  "魔鋼の欠片": "⚙️", "悪魔の核": "🟥",
  "深淵の結晶": "🌑", "奈落の核": "⚫",
  "神滅の鱗": "🌟", "神滅龍の心臓": "💖"
};

function getMaterialEmoji(name){
  return materialEmoji[name] || "❓";
}

function createMaterialHTML(){
  if(!player.materials){ return "なし"; }

  let html = "";
  let count = 0;

  Object.keys(materialEmoji).forEach(function(name){
    const amount = player.materials[name];
    if(!amount || amount <= 0){ return; }

    count++;
    const path  = (typeof getMaterialPath === "function") ? getMaterialPath(name) : null;
    const emoji = getMaterialEmoji(name);

    const icon = path
      ? `<img src="${path}" width="16" style="vertical-align:middle;" onerror="this.outerHTML='<span style=\\"font-size:14px;\\">${emoji}</span>'">`
      : `<span style="font-size:14px;">${emoji}</span>`;

    html += `
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:2px;">
        ${icon}
        <span style="font-size:10px;color:#bbb;">${name}</span>
        <span style="font-size:10px;color:#888;margin-left:auto;">×${amount}</span>
      </div>
    `;
  });

  return count > 0 ? html : "<span style='color:#444;font-size:10px;'>なし</span>";
}
function renderPlayer(){

  const ui = document.getElementById("playerUI");
  if(!ui){ return; }

  const hpPct   = Math.min((player.hp / player.maxHp) * 100, 100);
  const nextExp  = expToNextLevel(player.level);
  const expPct   = Math.min((player.exp / nextExp) * 100, 100);
  const count    = player.rebirthCount || 0;
  const freeSp   = (player.skillPoints   || 0) - (player.usedSkillPoints   || 0);
  const freeRp   = (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);
  const hpColor  = hpPct > 70 ? "#44ff44" : hpPct > 30 ? "#ffee44" : "#ff4444";

  ui.innerHTML = `
    <div style="font-size:13px;color:#ccc;line-height:1.1;">

      <div style="font-size:15px;color:gold;font-weight:bold;margin-bottom:5px;">
        Lv.${player.level}
        ${count > 0
          ? `<span style="color:orange;font-size:11px;margin-left:4px;">転生${count}</span>`
          : ""}
      </div>

      <div style="color:#666;font-size:11px;margin-bottom:2px;">EXP ${player.exp}/${nextExp}</div>
      <div style="width:100%;height:6px;background:#1a1a1a;border-radius:3px;margin-bottom:7px;overflow:hidden;">
        <div style="width:${expPct}%;height:100%;background:#6666ff;border-radius:3px;"></div>
      </div>

      <div style="color:#666;font-size:11px;margin-bottom:2px;">HP ${player.hp}/${player.maxHp}</div>
      <div style="width:100%;height:6px;background:#1a1a1a;border-radius:3px;margin-bottom:10px;overflow:hidden;">
        <div style="width:${hpPct}%;height:100%;background:${hpColor};border-radius:3px;transition:width 0.2s;"></div>
      </div>

      <div style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;font-size:13px;">
        <span style="color:#555;">ATK</span>    <span style="color:white;text-align:right;">${player.atk}</span>
        <span style="color:#555;">クリ率</span> <span style="color:white;text-align:right;">${player.crit}%</span>
        <span style="color:#555;">速度</span>   <span style="color:white;text-align:right;">${(player.attackSpeed/1000).toFixed(1)}s</span>
        <span style="color:#555;">GOLD</span>   <span style="color:#ffcc44;text-align:right;">${player.gold}</span>
        <span style="color:#555;">ポーション</span><span style="color:#44ffaa;text-align:right;">${player.potions}</span>
        <span style="color:#555;">撃破</span>   <span style="color:white;text-align:right;">${player.killCount}</span>
        <span style="color:#555;">SP</span>     <span style="color:#8888ff;text-align:right;">${freeSp}</span>
        <span style="color:#555;">RP</span>     <span style="color:#ff88ff;text-align:right;">${freeRp}</span>
      </div>

      <div style="margin-top:10px;border-top:1px solid #1e1e1e;padding-top:8px;">
        <div style="color:#444;font-size:11px;margin-bottom:5px;">── 素材 ──</div>
        ${createMaterialHTML()}
      </div>

    </div>
  `;

}
const REBIRTH_LEVEL = 20;

const REBIRTH_TITLES = [
  "初心者","冒険者","勇者","英雄","伝説",
  "神話","覚醒者","超越者","神","????"
];

function getRebirthTitle(count){
  return REBIRTH_TITLES[Math.min(count, REBIRTH_TITLES.length - 1)];
}

// 蜘蛛の巣スキルマップ（転生ポイントで取得、完全独立）
// angle: 中心からの角度(度), radius: 中心からの距離(px)
const rebirthSkillMap = [

  // 中心（必ず解放済み）
  {
    id: "r_core",
    name: "転生の核",
    desc: "全ての始まり",
    cost: 0,
    requires: [],
    angle: 0, radius: 0,
    effect: {}
  },

  // 第1リング（radius=120）
  {
    id: "r_atk1",
    name: "力の覚醒",
    desc: "ATK永続 +5%",
    cost: 1, requires: ["r_core"],
    angle: 0, radius: 120,
    effect: { atkPercent: 0.05 }
  },
  {
    id: "r_hp1",
    name: "生命の拡張",
    desc: "MaxHP永続 +5%",
    cost: 1, requires: ["r_core"],
    angle: 60, radius: 120,
    effect: { hpPercent: 0.05 }
  },
  {
    id: "r_gold1",
    name: "金運の芽",
    desc: "GOLD永続 +8%",
    cost: 1, requires: ["r_core"],
    angle: 120, radius: 120,
    effect: { goldPercent: 0.08 }
  },
  {
    id: "r_spd1",
    name: "速度の目覚め",
    desc: "攻撃速度永続 -5%",
    cost: 1, requires: ["r_core"],
    angle: 180, radius: 120,
    effect: { speedPercent: -0.05 }
  },
  {
    id: "r_crit1",
    name: "天眼の開眼",
    desc: "クリ率永続 +3%",
    cost: 1, requires: ["r_core"],
    angle: 240, radius: 120,
    effect: { critFlat: 3 }
  },
  {
    id: "r_drop1",
    name: "幸運の種",
    desc: "レアドロップ率 +5%",
    cost: 1, requires: ["r_core"],
    angle: 300, radius: 120,
    effect: { rareChanceFlat: 0.05 }
  },

  // 第2リング（radius=240）
  {
    id: "r_atk2",
    name: "破壊の覚醒",
    desc: "ATK永続 +10%",
    cost: 2, requires: ["r_atk1"],
    angle: 0, radius: 240,
    effect: { atkPercent: 0.10 }
  },
  {
    id: "r_atk2b",
    name: "剛力の血統",
    desc: "ATK永続 +8%、HP +3%",
    cost: 2, requires: ["r_atk1", "r_hp1"],
    angle: 30, radius: 240,
    effect: { atkPercent: 0.08, hpPercent: 0.03 }
  },
  {
    id: "r_hp2",
    name: "不滅の命",
    desc: "MaxHP永続 +10%",
    cost: 2, requires: ["r_hp1"],
    angle: 60, radius: 240,
    effect: { hpPercent: 0.10 }
  },
  {
    id: "r_hp2b",
    name: "黄金の体",
    desc: "HP +8%、GOLD +5%",
    cost: 2, requires: ["r_hp1", "r_gold1"],
    angle: 90, radius: 240,
    effect: { hpPercent: 0.08, goldPercent: 0.05 }
  },
  {
    id: "r_gold2",
    name: "財宝の加護",
    desc: "GOLD永続 +15%",
    cost: 2, requires: ["r_gold1"],
    angle: 120, radius: 240,
    effect: { goldPercent: 0.15 }
  },
  {
    id: "r_gold2b",
    name: "商人の才",
    desc: "GOLD +10%、速度 -3%",
    cost: 2, requires: ["r_gold1", "r_spd1"],
    angle: 150, radius: 240,
    effect: { goldPercent: 0.10, speedPercent: -0.03 }
  },
  {
    id: "r_spd2",
    name: "疾風の血",
    desc: "攻撃速度永続 -10%",
    cost: 2, requires: ["r_spd1"],
    angle: 180, radius: 240,
    effect: { speedPercent: -0.10 }
  },
  {
    id: "r_spd2b",
    name: "神速の一閃",
    desc: "速度 -8%、クリ率 +2%",
    cost: 2, requires: ["r_spd1", "r_crit1"],
    angle: 210, radius: 240,
    effect: { speedPercent: -0.08, critFlat: 2 }
  },
  {
    id: "r_crit2",
    name: "必中の瞳",
    desc: "クリ率永続 +6%",
    cost: 2, requires: ["r_crit1"],
    angle: 240, radius: 240,
    effect: { critFlat: 6 }
  },
  {
    id: "r_crit2b",
    name: "運命の一撃",
    desc: "クリ率 +4%、ドロップ +3%",
    cost: 2, requires: ["r_crit1", "r_drop1"],
    angle: 270, radius: 240,
    effect: { critFlat: 4, rareChanceFlat: 0.03 }
  },
  {
    id: "r_drop2",
    name: "大地の恵み",
    desc: "レアドロップ率永続 +10%",
    cost: 2, requires: ["r_drop1"],
    angle: 300, radius: 240,
    effect: { rareChanceFlat: 0.10 }
  },
  {
    id: "r_drop2b",
    name: "収穫の祝福",
    desc: "ドロップ +8%、ATK +3%",
    cost: 2, requires: ["r_drop1", "r_atk1"],
    angle: 330, radius: 240,
    effect: { rareChanceFlat: 0.08, atkPercent: 0.03 }
  },

  // 第3リング（radius=370）
  {
    id: "r_atk3",
    name: "神の拳",
    desc: "ATK永続 +20%",
    cost: 3, requires: ["r_atk2"],
    angle: 0, radius: 370,
    effect: { atkPercent: 0.20 }
  },
  {
    id: "r_hp3",
    name: "永遠の命",
    desc: "MaxHP永続 +20%",
    cost: 3, requires: ["r_hp2"],
    angle: 60, radius: 370,
    effect: { hpPercent: 0.20 }
  },
  {
    id: "r_gold3",
    name: "黄金の王国",
    desc: "GOLD永続 +30%",
    cost: 3, requires: ["r_gold2"],
    angle: 120, radius: 370,
    effect: { goldPercent: 0.30 }
  },
  {
    id: "r_spd3",
    name: "時を超える速さ",
    desc: "攻撃速度永続 -20%",
    cost: 3, requires: ["r_spd2"],
    angle: 180, radius: 370,
    effect: { speedPercent: -0.20 }
  },
  {
    id: "r_crit3",
    name: "神眼の覚醒",
    desc: "クリ率永続 +12%、クリダメ +0.3倍",
    cost: 3, requires: ["r_crit2"],
    angle: 240, radius: 370,
    effect: { critFlat: 12, critMultiFlat: 0.3 }
  },
  {
    id: "r_drop3",
    name: "伝説の収穫者",
    desc: "レアドロップ率永続 +20%",
    cost: 3, requires: ["r_drop2"],
    angle: 300, radius: 370,
    effect: { rareChanceFlat: 0.20 }
  },

  // 最外リング（radius=500）
  {
    id: "r_omega",
    name: "Ω 全能の覚醒",
    desc: "全永続ステ +15%",
    cost: 5, requires: ["r_atk3","r_hp3","r_gold3","r_spd3","r_crit3","r_drop3"],
    angle: 0, radius: 500,
    effect: { allPercent: 0.15 }
  }

];
function canRebirth(){
  return player.level >= REBIRTH_LEVEL;
}

function doRebirth(){

  if(!canRebirth()){
    alert("転生には Lv." + REBIRTH_LEVEL + " が必要です");
    return;
  }

  // 転生専用画面に遷移
  showRebirthScreen();

}

function confirmRebirth(){

  player.rebirthCount     = (player.rebirthCount || 0) + 1;
  player.rebirthPoints    = (player.rebirthPoints || 0) + 3;
  player.usedRebirthPoints = player.usedRebirthPoints || 0;
  if(!player.rebirthSkills){ player.rebirthSkills = {}; }

  // r_coreは最初から取得済み
  player.rebirthSkills["r_core"] = true;

  // ステータスリセット
  player.level        = 1;
  player.exp          = 0;
  player.gold         = 0;
  player.skillPoints  = 0;
  player.usedSkillPoints = 0;
  player.skills       = {};

  player.atk          = defaultPlayer.atk;
  player.maxHp        = defaultPlayer.maxHp;
  player.hp           = defaultPlayer.maxHp;
  player.attackSpeed  = defaultPlayer.attackSpeed;
  player.crit         = defaultPlayer.crit;
  player.critMulti    = defaultPlayer.critMulti;

  // 転生スキル効果を適用
  applyRebirthSkillEffects();

  savePlayer();

  // 転生画面を閉じてメイン画面へ
  const screen = document.getElementById("rebirthScreen");
  if(screen){ screen.remove(); }

  if(typeof renderPlayer      === "function"){ renderPlayer();      }
  if(typeof renderUpgradeTab  === "function"){ renderUpgradeTab();  }
  if(typeof renderRebirthTab  === "function"){ renderRebirthTab();  }
  if(typeof renderEnemyTab    === "function"){ renderEnemyTab();    }

  alert("転生完了！称号：" + getRebirthTitle(player.rebirthCount) + "\n転生ポイント +3");

}

// 転生スキルを取得
function learnRebirthSkill(skillId){

  const skill = rebirthSkillMap.find(function(s){ return s.id === skillId; });
  if(!skill){ return; }

  if(hasRebirthSkill(skillId)){ return; }

  const reqs = skill.requires.every(function(r){ return hasRebirthSkill(r); });
  if(!reqs){ return; }

  const freePoints = (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);
  if(freePoints < skill.cost){ return; }

  if(!player.rebirthSkills){ player.rebirthSkills = {}; }
  player.rebirthSkills[skillId] = true;
  player.usedRebirthPoints = (player.usedRebirthPoints || 0) + skill.cost;

  savePlayer();

  applyRebirthSkillEffects();

  if(typeof renderPlayer === "function"){ renderPlayer(); }

  renderRebirthWebMap();

}

function hasRebirthSkill(id){
  return !!(player.rebirthSkills && player.rebirthSkills[id]);
}

function getFreeRebirthPoints(){
  return (player.rebirthPoints || 0) - (player.usedRebirthPoints || 0);
}

// 全転生スキル効果をプレイヤーに適用
function applyRebirthSkillEffects(){

  if(!player.rebirthSkills){ return; }

  // 一旦デフォルト値に戻してから再計算
  let atkMult   = 1;
  let hpMult    = 1;
  let goldMult  = 1;
  let spdMult   = 1;
  let critBonus = 0;
  let dropBonus = 0;
  let critMultiBonus = 0;

  rebirthSkillMap.forEach(function(skill){

    if(!hasRebirthSkill(skill.id)){ return; }
    const e = skill.effect;
    if(!e){ return; }

    if(e.atkPercent)      { atkMult        += e.atkPercent;      }
    if(e.hpPercent)       { hpMult         += e.hpPercent;       }
    if(e.goldPercent)     { goldMult        += e.goldPercent;     }
    if(e.speedPercent)    { spdMult         += e.speedPercent;    }
    if(e.critFlat)        { critBonus       += e.critFlat;        }
    if(e.rareChanceFlat)  { dropBonus       += e.rareChanceFlat;  }
    if(e.critMultiFlat)   { critMultiBonus  += e.critMultiFlat;   }
    if(e.allPercent){
      atkMult  += e.allPercent;
      hpMult   += e.allPercent;
      goldMult += e.allPercent;
      spdMult  += e.allPercent;
    }

  });

  player.rebirthAtkMult    = atkMult;
  player.rebirthHpMult     = hpMult;
  player.rebirthGoldMult   = goldMult;
  player.rebirthSpdMult    = spdMult;
  player.rebirthCritBonus  = critBonus;
  player.rebirthDropBonus  = dropBonus;
  player.rebirthCritMultiBonus = critMultiBonus;

}
function renderRebirthTab(){

  const tab = document.getElementById("rebirthTab");
  if(!tab){ return; }

  const count    = player.rebirthCount || 0;
  const title    = getRebirthTitle(count);
  const canDo    = canRebirth();
  const freeRp   = getFreeRebirthPoints();

  tab.innerHTML = `
    <div style="padding:16px;color:white;">

      <h2>転生</h2><br>

      <div style="
        background:#1a1a2e;border:2px solid #555;
        padding:14px;margin-bottom:14px;font-size:14px;line-height:2;
      ">
        転生回数 : <span style="color:gold;">${count}回</span><br>
        称号 : <span style="color:orange;">${title}</span><br>
        転生ポイント : <span style="color:#88f;">${freeRp} / ${player.rebirthPoints || 0}</span>
      </div>

      <div style="color:${canDo ? "lime" : "#888"};margin-bottom:12px;font-size:14px;">
        ${canDo
          ? "✅ Lv.20達成！転生可能！"
          : "🔒 Lv." + REBIRTH_LEVEL + "で転生可能（現在 Lv." + player.level + "）"
        }
      </div>

      <button
        onclick="doRebirth()"
        ${canDo ? "" : "disabled"}
        style="font-size:18px;margin-bottom:20px;"
      >転生する</button>

      <hr style="border-color:#333;margin-bottom:16px;">

      <div style="
        display:flex;justify-content:space-between;
        align-items:center;margin-bottom:8px;
      ">
        <h3>転生スキルマップ</h3>
        <span style="color:#88f;font-size:13px;">残りRP: ${freeRp}</span>
      </div>

      <div style="font-size:12px;color:#666;margin-bottom:12px;">
        ノードをタップして詳細確認・取得
      </div>

      <div id="rebirthMapWrap" style="
        overflow:auto;background:#050510;
        border:1px solid #333;
      ">
      </div>

      <div id="rebirthNodeDetail" style="
        margin-top:12px;min-height:60px;
        font-size:13px;color:white;
      ">
        ノードをタップしてください
      </div>

    </div>
  `;

  renderRebirthWebMap();

}

// 蜘蛛の巣マップ描画
function renderRebirthWebMap(){

  const wrap = document.getElementById("rebirthMapWrap");
  if(!wrap){ return; }

  const CX  = 560;
  const CY  = 560;
  const W   = CX * 2;
  const H   = CY * 2;
  const R   = 22;

  // エッジ
  let edges = "";
  rebirthSkillMap.forEach(function(skill){
    skill.requires.forEach(function(rid){
      const parent = rebirthSkillMap.find(function(s){ return s.id === rid; });
      if(!parent){ return; }

      const px = CX + Math.cos(parent.angle * Math.PI / 180) * parent.radius;
      const py = CY + Math.sin(parent.angle * Math.PI / 180) * parent.radius;
      const cx = CX + Math.cos(skill.angle  * Math.PI / 180) * skill.radius;
      const cy = CY + Math.sin(skill.angle  * Math.PI / 180) * skill.radius;

      const both = hasRebirthSkill(skill.id) && hasRebirthSkill(rid);
      edges += `
        <line
          x1="${px}" y1="${py}" x2="${cx}" y2="${cy}"
          stroke="${both ? "#4488ff" : "#223"}"
          stroke-width="${both ? 2 : 1}"
        />
      `;
    });
  });

  // ノード
  let nodes = "";
  rebirthSkillMap.forEach(function(skill){

    const nx = CX + Math.cos(skill.angle * Math.PI / 180) * skill.radius;
    const ny = CY + Math.sin(skill.angle * Math.PI / 180) * skill.radius;

    const learned   = hasRebirthSkill(skill.id);
    const reqMet    = skill.requires.every(function(r){ return hasRebirthSkill(r); });
    const freeRp    = getFreeRebirthPoints();
    const available = !learned && reqMet && freeRp >= skill.cost;

    let fill   = "#111";
    let stroke = "#333";
    let glow   = "";

    if(skill.id === "r_core"){
      fill = "#2a1a4a"; stroke = "#aa66ff";
      glow = `filter="url(#glow)"`;
    } else if(learned){
      fill = "#0a2a0a"; stroke = "#44ff44";
    } else if(available){
      fill = "#1a1a3a"; stroke = "#4488ff";
      glow = `filter="url(#glow)"`;
    } else if(!reqMet){
      fill = "#0a0a0a"; stroke = "#222";
    }

    // 名前を短縮（7文字まで）
    const shortName = skill.name.length > 7
      ? skill.name.slice(0, 6) + "…"
      : skill.name;

    nodes += `
      <g onclick="selectRebirthNode('${skill.id}')" style="cursor:pointer;">
        <circle
          cx="${nx}" cy="${ny}" r="${skill.id === "r_core" ? 30 : R}"
          fill="${fill}" stroke="${stroke}" stroke-width="2"
          ${glow}
        />
        <text
          x="${nx}" y="${ny + 1}"
          text-anchor="middle" dominant-baseline="middle"
          font-size="9" fill="white" font-family="monospace"
        >${shortName}</text>
        ${learned
          ? `<text x="${nx + (skill.id === "r_core" ? 30 : R) - 2}" y="${ny - (skill.id === "r_core" ? 30 : R) + 2}"
               font-size="10" fill="lime">✓</text>`
          : ""}
      </g>
    `;

  });

  wrap.innerHTML = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      ${edges}
      ${nodes}
    </svg>
  `;

}

// ノードタップで詳細表示
function selectRebirthNode(skillId){

  const skill = rebirthSkillMap.find(function(s){ return s.id === skillId; });
  if(!skill){ return; }

  const detail  = document.getElementById("rebirthNodeDetail");
  if(!detail){ return; }

  const learned   = hasRebirthSkill(skill.id);
  const reqMet    = skill.requires.every(function(r){ return hasRebirthSkill(r); });
  const freeRp    = getFreeRebirthPoints();
  const available = !learned && reqMet && freeRp >= skill.cost;

  const reqNames = skill.requires.map(function(id){
    const s = rebirthSkillMap.find(function(x){ return x.id === id; });
    return s ? s.name : id;
  }).join("、");

  let btn = "";
  if(skill.id === "r_core"){
    btn = `<span style="color:#aa66ff;">★ コアノード</span>`;
  } else if(learned){
    btn = `<span style="color:lime;">✅ 取得済み</span>`;
  } else if(available){
    btn = `
      <button
        onclick="learnRebirthSkill('${skill.id}')"
        style="
          min-width:unset;min-height:unset;
          padding:6px 18px;font-size:13px;
          background:#333;color:white;border:1px solid #4488ff;
        "
      >取得する（RP: ${skill.cost}）</button>
    `;
  } else if(!reqMet){
    btn = `<span style="color:#666;">前提ノードを取得してください</span>`;
  } else {
    btn = `<span style="color:#888;">RPが足りません（必要: ${skill.cost} / 残り: ${freeRp}）</span>`;
  }

  detail.innerHTML = `
    <div style="
      background:#111;border:1px solid #333;
      padding:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;
    ">
      <div>
        <div style="font-size:14px;font-weight:bold;color:#88aaff;margin-bottom:4px;">
          ${skill.name}
        </div>
        <div style="color:#ccc;margin-bottom:4px;">${skill.desc}</div>
        ${reqNames ? `<div style="font-size:11px;color:#555;">前提: ${reqNames}</div>` : ""}
      </div>
      <div style="margin-left:auto;">${btn}</div>
    </div>
  `;

}

// 転生専用フルスクリーン演出
function showRebirthScreen(){

  const existing = document.getElementById("rebirthScreen");
  if(existing){ existing.remove(); }

  const screen = document.createElement("div");
  screen.id = "rebirthScreen";
  screen.style.cssText = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;
    background:#000;z-index:9999;display:flex;
    flex-direction:column;justify-content:center;align-items:center;
    color:white;font-family:monospace;
  `;

  const nextCount = (player.rebirthCount || 0) + 1;
  const nextTitle = getRebirthTitle(nextCount);

  screen.innerHTML = `
    <div style="text-align:center;animation:fadeIn 1s ease;">

      <div style="font-size:13px;color:#888;margin-bottom:8px;">
        転生 ${nextCount}回目
      </div>

      <div id="rebirthStarField" style="
        position:relative;width:300px;height:300px;margin:0 auto 20px;
      ">
        <canvas id="rebirthCanvas" width="300" height="300"></canvas>
      </div>

      <div style="font-size:28px;color:gold;margin-bottom:8px;letter-spacing:4px;">
        ${nextTitle}
      </div>

      <div style="font-size:14px;color:#aaa;margin-bottom:4px;">
        転生ポイント +3 獲得
      </div>

      <div style="font-size:12px;color:#555;margin-bottom:30px;">
        Lv・GOLD・スキルはリセットされます
      </div>

      <div style="display:flex;gap:16px;justify-content:center;">
        <button
          onclick="confirmRebirth()"
          style="
            min-width:unset;min-height:unset;
            padding:12px 30px;font-size:18px;
            background:#2a0a4a;color:white;
            border:2px solid #aa66ff;
          "
        >転生する</button>

        <button
          onclick="document.getElementById('rebirthScreen').remove()"
          style="
            min-width:unset;min-height:unset;
            padding:12px 30px;font-size:18px;
            background:#1a1a1a;color:#888;
            border:2px solid #444;
          "
        >戻る</button>
      </div>

    </div>
  `;

  document.body.appendChild(screen);

  // パーティクルアニメーション
  startRebirthAnimation();

}

function startRebirthAnimation(){

  const canvas = document.getElementById("rebirthCanvas");
  if(!canvas){ return; }

  const ctx = canvas.getContext("2d");
  const W   = canvas.width;
  const H   = canvas.height;
  const CX  = W / 2;
  const CY  = H / 2;

  const particles = [];

  for(let i = 0; i < 80; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 1.5;
    particles.push({
      x: CX, y: CY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.005 + Math.random() * 0.01,
      size: 1 + Math.random() * 3,
      hue: Math.floor(Math.random() * 60) + 240
    });
  }

  function draw(){

    if(!document.getElementById("rebirthCanvas")){ return; }

    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, W, H);

    particles.forEach(function(p){

      p.x    += p.vx;
      p.y    += p.vy;
      p.life -= p.decay;

      if(p.life <= 0){
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.5;
        p.x = CX; p.y = CY;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.life = 1;
        p.hue = Math.floor(Math.random() * 60) + 240;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ",100%,70%," + p.life + ")";
      ctx.fill();

    });

    // 中心の輝き
    const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 40);
    grad.addColorStop(0, "rgba(180,100,255,0.6)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(CX, CY, 40, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    requestAnimationFrame(draw);

  }

  draw();

}
const craftEquipments = [

  // ─── 武器 ───────────────────────────
  {
    id: "boneSword",     slot: "weapon", tier: 0,
    name: "骨の剣",      desc: "ATK +{atk}",
    materials: { "骨のかけら": 3, "スライムゼリー": 2 },
    effectRange: { atk: [5, 10] }
  },
  {
    id: "poisonDagger",  slot: "weapon", tier: 0,
    name: "毒の短剣",    desc: "ATK +{atk}、クリ率 +{crit}%",
    materials: { "毒の鱗": 2, "コウモリの羽": 2 },
    effectRange: { atk: [8, 15], crit: [2, 5] }
  },
  {
    id: "wolfSword",     slot: "weapon", tier: 0,
    name: "狼牙の剣",    desc: "ATK +{atk}、速度 -{attackSpeed}ms",
    materials: { "狼の毛皮": 3, "銀の牙": 1 },
    effectRange: { atk: [12, 20], attackSpeed: [50, 150] }
  },
  {
    id: "cursedBlade",   slot: "weapon", tier: 1,
    name: "呪いの刃",    desc: "ATK +{atk}、クリダメ +{critMulti}倍",
    materials: { "呪われた骨": 2, "呪いの心臓": 1 },
    effectRange: { atk: [18, 30], critMulti: [0.20, 0.50] }
  },
  {
    id: "flameSword",    slot: "weapon", tier: 1,
    name: "炎の剣",      desc: "ATK +{atk}、クリダメ +{critMulti}倍",
    materials: { "炎の結晶": 3, "腐った肉": 2 },
    effectRange: { atk: [25, 40], critMulti: [0.20, 0.60] }
  },
  {
    id: "darkSword",     slot: "weapon", tier: 2,
    name: "闇の大剣",    desc: "ATK +{atk}、クリ率 +{crit}%",
    materials: { "闇の鎧片": 3, "幽霊の布": 2 },
    effectRange: { atk: [40, 65], crit: [3, 8] }
  },
  {
    id: "dragonSword",   slot: "weapon", tier: 2,
    name: "竜殺しの剣",  desc: "ATK +{atk}、クリ率 +{crit}%、クリダメ +{critMulti}倍",
    materials: { "竜のウロコ": 4, "紅竜の心臓": 1 },
    effectRange: { atk: [55, 80], crit: [4, 10], critMulti: [0.30, 0.70] }
  },
  {
    id: "voidSword",     slot: "weapon", tier: 3,
    name: "虚無の刃",    desc: "ATK +{atk}、速度 -{attackSpeed}ms、クリダメ +{critMulti}倍",
    materials: { "虚無の欠片": 4, "影の短剣": 2 },
    effectRange: { atk: [80, 120], attackSpeed: [100, 300], critMulti: [0.50, 1.00] }
  },
  {
    id: "godSword",      slot: "weapon", tier: 4,
    name: "神滅の剣",    desc: "ATK +{atk}、クリ率 +{crit}%、クリダメ +{critMulti}倍",
    materials: { "神滅の鱗": 3, "神滅龍の心臓": 1 },
    effectRange: { atk: [130, 200], crit: [8, 15], critMulti: [0.80, 1.50] }
  },

  // ─── 鎧 ───────────────────────────
  {
    id: "slimeArmor",    slot: "armor", tier: 0,
    name: "スライムの鎧", desc: "MaxHP +{maxHp}",
    materials: { "スライムゼリー": 5 },
    effectRange: { maxHp: [15, 30] }
  },
  {
    id: "batArmor",      slot: "armor", tier: 0,
    name: "コウモリの鎧", desc: "MaxHP +{maxHp}、速度 -{attackSpeed}ms",
    materials: { "コウモリの羽": 3, "漆黒の羽": 1 },
    effectRange: { maxHp: [20, 40], attackSpeed: [30, 100] }
  },
  {
    id: "orcArmor",      slot: "armor", tier: 0,
    name: "オークの鎧",  desc: "MaxHP +{maxHp}、ATK +{atk}",
    materials: { "オークの皮": 4, "古代の皮": 1 },
    effectRange: { maxHp: [40, 70], atk: [3, 8] }
  },
  {
    id: "boneArmor",     slot: "armor", tier: 1,
    name: "骨の鎧",      desc: "MaxHP +{maxHp}",
    materials: { "骨のかけら": 4, "呪われた骨": 2 },
    effectRange: { maxHp: [60, 100] }
  },
  {
    id: "dragonArmor",   slot: "armor", tier: 2,
    name: "竜鱗の鎧",    desc: "MaxHP +{maxHp}、ATK +{atk}",
    materials: { "竜のウロコ": 4, "氷竜のウロコ": 2 },
    effectRange: { maxHp: [150, 250], atk: [8, 18] }
  },
  {
    id: "phoenixArmor",  slot: "armor", tier: 3,
    name: "不死鳥の鎧",  desc: "MaxHP +{maxHp}、ATK +{atk}",
    materials: { "雷鳥の羽": 3, "不死鳥の核": 1 },
    effectRange: { maxHp: [250, 400], atk: [15, 30] }
  },
  {
    id: "godArmor",      slot: "armor", tier: 4,
    name: "神滅の鎧",    desc: "MaxHP +{maxHp}、ATK +{atk}",
    materials: { "神滅の鱗": 4, "神滅龍の心臓": 1 },
    effectRange: { maxHp: [500, 800], atk: [30, 60] }
  },

  // ─── アクセサリー ───────────────────
  {
    id: "slimeRing",     slot: "accessory", tier: 0,
    name: "スライムの指輪", desc: "GOLD取得 +{goldBonus}%",
    materials: { "スライムゼリー": 3, "キングゼリー": 1 },
    effectRange: { goldBonus: [5, 15] }
  },
  {
    id: "fangNecklace",  slot: "accessory", tier: 0,
    name: "牙のネックレス", desc: "クリ率 +{crit}%",
    materials: { "ゴブリンの牙": 3, "銀の牙": 1 },
    effectRange: { crit: [3, 8] }
  },
  {
    id: "scaleAmulet",   slot: "accessory", tier: 1,
    name: "鱗のお守り",  desc: "レアドロ率 +{rareChance}%",
    materials: { "毒の鱗": 3, "骨のかけら": 3 },
    effectRange: { rareChance: [3, 8] }
  },
  {
    id: "crystalRing",   slot: "accessory", tier: 1,
    name: "魔法石の指輪", desc: "クリ率 +{crit}%、クリダメ +{critMulti}倍",
    materials: { "魔法石": 2, "魔眼の結晶": 1 },
    effectRange: { crit: [4, 10], critMulti: [0.10, 0.40] }
  },
  {
    id: "soulRing",      slot: "accessory", tier: 2,
    name: "魂の指輪",    desc: "ATK +{atk}、MaxHP +{maxHp}",
    materials: { "魂の結晶": 3, "幽霊の布": 2 },
    effectRange: { atk: [10, 25], maxHp: [30, 80] }
  },
  {
    id: "dragonHeartAcc",slot: "accessory", tier: 2,
    name: "竜の心臓",    desc: "ATK +{atk}、クリ率 +{crit}%、GOLD +{goldBonus}%",
    materials: { "紅竜の心臓": 1, "竜のウロコ": 3 },
    effectRange: { atk: [20, 40], crit: [3, 8], goldBonus: [5, 15] }
  },
  {
    id: "voidRing",      slot: "accessory", tier: 3,
    name: "虚空の結晶",  desc: "ATK +{atk}、速度 -{attackSpeed}ms、クリダメ +{critMulti}倍",
    materials: { "虚空の結晶": 3, "虚無の欠片": 3 },
    effectRange: { atk: [30, 60], attackSpeed: [100, 250], critMulti: [0.30, 0.80] }
  },
  {
    id: "godHeartAcc",   slot: "accessory", tier: 4,
    name: "神滅龍の心臓", desc: "ATK +{atk}、MaxHP +{maxHp}、クリ率 +{crit}%",
    materials: { "神滅龍の心臓": 1, "混沌の核": 2 },
    effectRange: { atk: [60, 120], maxHp: [150, 300], crit: [8, 18] }
  }

];

const craftItems = [
  {
    id: "potion",
    name: "回復ポーション",     desc: "HP50%回復 ×1",
    materials: { "スライムゼリー": 3 }
  },
  {
    id: "bigPotion",
    name: "大回復ポーション",   desc: "ポーション ×3",
    materials: { "キングゼリー": 1, "スライムゼリー": 5 }
  },
  {
    id: "expScroll",
    name: "経験値の書",         desc: "EXP +50",
    materials: { "死霊術の書": 1, "魂の宝珠": 1 }
  },
  {
    id: "goldScroll",
    name: "黄金の書",           desc: "GOLD +200",
    materials: { "黄金の王冠": 1, "黄金の角": 1 }
  }
];

function buildEquipDesc(recipe, effect){
  let desc = recipe.desc;
  Object.keys(effect).forEach(function(k){
    const val = effect[k];
    const display = (k === "critMulti") ? val.toFixed(2) : Math.round(val);
    desc = desc.replace("{" + k + "}", display);
  });
  return desc;
}
// スタック上限
const EQUIP_STACK_MAX = 5;

function initEquipment(){
  if(!player.equipment){
    player.equipment = { weapon: null, armor: null, accessory: null };
  }
  if(!player.equipStack){
    player.equipStack = { weapon: [], armor: [], accessory: [] };
  }
}

function canCraft(recipe){
  return Object.keys(recipe.materials).every(function(name){
    return (player.materials[name] || 0) >= recipe.materials[name];
  });
}

// ランダム効果生成
function rollEffect(recipe){
  const effect = {};
  Object.keys(recipe.effectRange).forEach(function(stat){
    const range = recipe.effectRange[stat];
    const min = range[0], max = range[1];
    if(Number.isInteger(min) && Number.isInteger(max)){
      effect[stat] = Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      const val = Math.random() * (max - min) + min;
      effect[stat] = Math.round(val * 100) / 100;
    }
  });
  return effect;
}

// レア度計算
function getEquipRarity(recipe, effect){
  let total = 0;
  const keys = Object.keys(recipe.effectRange);
  keys.forEach(function(stat){
    const range = recipe.effectRange[stat];
    const ratio = (effect[stat] - range[0]) / (range[1] - range[0]);
    total += ratio;
  });
  const avg = total / keys.length;
  if(avg >= 0.90) return { label: "🔴 神話", color: "#ff4444", score: avg };
  if(avg >= 0.70) return { label: "🟠 英雄", color: "#ff8800", score: avg };
  if(avg >= 0.50) return { label: "🟡 優良", color: "#ffee44", score: avg };
  return { label: "⚪ 普通", color: "#888888", score: avg };
}

// クラフトしてスタックに追加
function craftEquipment(equipId){

  initEquipment();

  const recipe = craftEquipments.find(function(e){ return e.id === equipId; });
  if(!recipe){ return; }

  if(!canCraft(recipe)){
    alert("素材が足りません");
    return;
  }

  const stack = player.equipStack[recipe.slot];

  if(stack.length >= EQUIP_STACK_MAX){
    alert("スタックが満杯です（最大" + EQUIP_STACK_MAX + "個）\n装備か削除をしてください");
    return;
  }

  // 素材消費
  Object.keys(recipe.materials).forEach(function(name){
    player.materials[name] -= recipe.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  // ランダム効果生成
  const effect = rollEffect(recipe);
  const rarity = getEquipRarity(recipe, effect);
  const desc   = buildEquipDesc(recipe, effect);

  // スタックに追加
  stack.push({
    recipeId: recipe.id,
    name:     recipe.name,
    effect:   effect,
    rarity:   rarity.label,
    rarityColor: rarity.color,
    desc:     desc
  });

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

  alert("✅ " + recipe.name + " を作成！\n\nレア度：" + rarity.label + "\n" + desc + "\n\n「所持品」から装備できます");

}

// スタックの装備を装備する
function equipFromStack(slot, index){

  initEquipment();

  const stack = player.equipStack[slot];
  if(!stack || !stack[index]){ return; }

  const item = stack[index];

  // 現在の装備を外す
  unequipCurrent(slot);

  // 装備する
  player.equipment[slot] = { recipeId: item.recipeId, index: index };
  applyEquipEffect(item.effect);

  // スタック内で装備中フラグ
  stack.forEach(function(s){ s.equipped = false; });
  stack[index].equipped = true;

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

// 現在の装備を外す
function unequipCurrent(slot){

  initEquipment();

  const cur = player.equipment[slot];
  if(!cur){ return; }

  const stack = player.equipStack[slot];
  const equipped = stack.find(function(s){ return s.equipped; });

  if(equipped){
    removeEquipEffect(equipped.effect);
    equipped.equipped = false;
  }

  player.equipment[slot] = null;

}

// スタックから削除
function removeFromStack(slot, index){

  initEquipment();

  const stack = player.equipStack[slot];
  if(!stack || !stack[index]){ return; }

  if(stack[index].equipped){
    unequipCurrent(slot);
  }

  stack.splice(index, 1);

  savePlayer();
  renderPlayer();

  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

function applyEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk        += effect.atk;        }
  if(effect.maxHp)       { player.maxHp       += effect.maxHp;
                           player.hp = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.crit)        { player.crit        += effect.crit;       }
  if(effect.critMulti)   { player.critMulti   += effect.critMulti;  }
  if(effect.attackSpeed) { player.attackSpeed -= effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.goldBonus)   { player.goldBonus    = (player.goldBonus    || 0) + effect.goldBonus / 100; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) + effect.rareChance / 100; }
}

function removeEquipEffect(effect){
  if(!effect){ return; }
  if(effect.atk)         { player.atk        -= effect.atk;        }
  if(effect.maxHp)       { player.maxHp       -= effect.maxHp;
                           if(player.hp > player.maxHp){ player.hp = player.maxHp; } }
  if(effect.crit)        { player.crit        -= effect.crit;       }
  if(effect.critMulti)   { player.critMulti   -= effect.critMulti;  }
  if(effect.attackSpeed) { player.attackSpeed += effect.attackSpeed; }
  if(effect.goldBonus)   { player.goldBonus    = (player.goldBonus    || 0) - effect.goldBonus / 100; }
  if(effect.rareChance)  { player.equipRareBonus = (player.equipRareBonus || 0) - effect.rareChance / 100; }
}

// アイテムクラフト
function craftItem(itemId){

  const item = craftItems.find(function(i){ return i.id === itemId; });
  if(!item){ return; }

  if(!canCraft(item)){
    alert("素材が足りません");
    return;
  }

  Object.keys(item.materials).forEach(function(name){
    player.materials[name] -= item.materials[name];
    if(player.materials[name] <= 0){ delete player.materials[name]; }
  });

  if(itemId === "potion")     { player.potions += 1;  alert("回復ポーション ×1 作成！"); }
  else if(itemId === "bigPotion"){ player.potions += 3;  alert("大回復ポーション ×3 作成！"); }
  else if(itemId === "expScroll"){ player.exp += 50; checkLevelUpSafe(); alert("EXP +50！"); }
  else if(itemId === "goldScroll"){ player.gold += 200; alert("GOLD +200！"); }

  savePlayer();
  renderPlayer();
  if(typeof renderCraftTab === "function"){ renderCraftTab(); }

}

function checkLevelUpSafe(){
  let needed = expToNextLevel(player.level);
  while(player.exp >= needed){
    player.exp   -= needed;
    player.level += 1;
    player.maxHp += 3;
    player.hp     = player.maxHp;
    player.atk   += 1;
    player.skillPoints = (player.skillPoints || 0) + 1;
    needed = expToNextLevel(player.level);
  }
}
let currentCraftSection = "weapon";

function renderCraftTab(){

  const tab = document.getElementById("craftTab");
  if(!tab){ return; }

  initEquipment();

  const sections = [
    { key: "weapon",    label: "⚔️ 武器"   },
    { key: "armor",     label: "🛡️ 鎧"     },
    { key: "accessory", label: "💍 アクセ"  },
    { key: "item",      label: "🧪 アイテム" }
  ];

  const sectionBtns = sections.map(function(s){
    const active = s.key === currentCraftSection
      ? "border-bottom:2px solid #88aaff;color:white;"
      : "border-bottom:1px solid #1e1e1e;color:#444;";
    return `
      <button
        onclick="switchCraftSection('${s.key}')"
        style="
          flex:1;min-width:unset;min-height:unset;
          height:36px;font-size:11px;
          background:#0a0a0a;border:none;
          font-family:monospace;cursor:pointer;${active}
        "
      >${s.label}</button>
    `;
  }).join("");

  let content = "";

  if(currentCraftSection === "item"){

    // アイテムは素材が揃ってるものだけ表示
    const available = craftItems.filter(function(item){
      return canCraft(item);
    });

    if(available.length === 0){
      content = `<div style="color:#333;font-size:13px;padding:20px;text-align:center;">
        素材が揃ったアイテムがありません
      </div>`;
    } else {
      content = available.map(function(item){
        const matList = Object.keys(item.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = item.materials[name];
          return `<span style="color:#88ff88;">${name} ${have}/${need}</span>`;
        }).join("　");

        return `
          <div style="background:#0f0f0f;border:1px solid #1e1e1e;padding:12px;margin-bottom:6px;">
            <div style="font-size:14px;font-weight:bold;color:white;margin-bottom:3px;">${item.name}</div>
            <div style="font-size:11px;color:#888;margin-bottom:5px;">${item.desc}</div>
            <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
            <button
              onclick="craftItem('${item.id}')"
              style="min-width:unset;min-height:unset;width:100%;height:32px;font-size:13px;
                background:#1a2a1a;color:#88ff88;border:1px solid #336633;"
            >作成する</button>
          </div>
        `;
      }).join("");
    }

    // 素材不足のものも一覧で表示（薄く）
    const lacking = craftItems.filter(function(item){ return !canCraft(item); });
    if(lacking.length > 0){
      content += `<div style="color:#333;font-size:10px;padding:10px 4px 4px;">── 素材不足 ──</div>`;
      content += lacking.map(function(item){
        const matList = Object.keys(item.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = item.materials[name];
          return `<span style="color:${have>=need?"#88ff88":"#553333"};">${name} ${have}/${need}</span>`;
        }).join("　");
        return `
          <div style="background:#080808;border:1px solid #111;padding:10px;margin-bottom:4px;opacity:0.5;">
            <div style="font-size:13px;color:#666;margin-bottom:2px;">${item.name}</div>
            <div style="font-size:10px;margin-top:4px;">${matList}</div>
          </div>
        `;
      }).join("");
    }

  } else {

    // 装備タブ
    const slot      = currentCraftSection;
    const stack     = player.equipStack[slot] || [];
    const stackMax  = EQUIP_STACK_MAX;

    // ── 所持品（スタック） ──
    let stackHtml = `
      <div style="font-size:12px;color:#555;margin-bottom:6px;">
        所持品 ${stack.length}/${stackMax}
      </div>
    `;

    if(stack.length === 0){
      stackHtml += `<div style="color:#333;font-size:12px;padding:8px 0 12px;">なし</div>`;
    } else {
      stack.forEach(function(item, idx){
        const eq = item.equipped;
        stackHtml += `
          <div style="
            background:${eq ? "#0a1a0a" : "#0d0d0d"};
            border:${eq ? "1px solid #336633" : "1px solid #1a1a1a"};
            padding:10px;margin-bottom:6px;
            display:flex;align-items:center;gap:8px;
          ">
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:bold;color:${item.rarityColor};">
                ${item.rarity} ${item.name} ${eq ? "✅" : ""}
              </div>
              <div style="font-size:11px;color:#aaa;margin-top:2px;">${item.desc}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              ${!eq ? `
                <button
                  onclick="equipFromStack('${slot}', ${idx})"
                  style="min-width:unset;min-height:unset;
                    padding:4px 10px;font-size:11px;
                    background:#1a2a1a;color:#88ff88;border:1px solid #336633;"
                >装備</button>
              ` : `
                <button
                  onclick="unequipCurrent('${slot}');savePlayer();renderPlayer();renderCraftTab();"
                  style="min-width:unset;min-height:unset;
                    padding:4px 10px;font-size:11px;
                    background:#1a1a1a;color:#888;border:1px solid #333;"
                >外す</button>
              `}
              <button
                onclick="if(confirm('削除しますか？')){removeFromStack('${slot}',${idx});}"
                style="min-width:unset;min-height:unset;
                  padding:4px 10px;font-size:11px;
                  background:#1a0a0a;color:#ff6666;border:1px solid #441111;"
              >捨てる</button>
            </div>
          </div>
        `;
      });
    }

    // ── クラフト（素材が揃ったものだけ） ──
    const slotRecipes  = craftEquipments.filter(function(e){ return e.slot === slot; });
    const canCraftList = slotRecipes.filter(canCraft);
    const lackList     = slotRecipes.filter(function(r){ return !canCraft(r); });

    let craftHtml = `
      <div style="font-size:12px;color:#555;margin:12px 0 6px;border-top:1px solid #1a1a1a;padding-top:12px;">
        クラフト可能
      </div>
    `;

    if(canCraftList.length === 0){
      craftHtml += `<div style="color:#333;font-size:12px;padding:4px 0 8px;">
        素材が揃った装備がありません
      </div>`;
    } else {
      craftHtml += canCraftList.map(function(recipe){
        const rangeList = Object.keys(recipe.effectRange).map(function(stat){
          const r = recipe.effectRange[stat];
          const labels = {
            atk:"ATK", maxHp:"HP", crit:"クリ率%",
            critMulti:"クリダメ倍", attackSpeed:"速度ms",
            goldBonus:"GOLD%", rareChance:"レアドロ%"
          };
          return `${labels[stat]||stat}: ${r[0]}〜${r[1]}`;
        }).join("　");

        const matList = Object.keys(recipe.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = recipe.materials[name];
          return `<span style="color:#88ff88;">${name} ${have}/${need}</span>`;
        }).join("　");

        const stackFull = (player.equipStack[slot] || []).length >= EQUIP_STACK_MAX;

        return `
          <div style="background:#0f0f0f;border:1px solid #1e1e1e;padding:10px;margin-bottom:6px;">
            <div style="font-size:14px;font-weight:bold;color:white;margin-bottom:3px;">${recipe.name}</div>
            <div style="font-size:11px;color:#6688aa;margin-bottom:3px;">${rangeList}</div>
            <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
            <button
              onclick="craftEquipment('${recipe.id}')"
              ${stackFull ? "disabled" : ""}
              style="min-width:unset;min-height:unset;width:100%;height:32px;font-size:13px;
                background:${stackFull ? "#111" : "#1a2a1a"};
                color:${stackFull ? "#444" : "#88ff88"};
                border:1px solid ${stackFull ? "#222" : "#336633"};"
            >${stackFull ? "所持品が満杯" : "クラフトする（ランダム効果）"}</button>
          </div>
        `;
      }).join("");
    }

    // 素材不足一覧（薄く）
    if(lackList.length > 0){
      craftHtml += `<div style="color:#333;font-size:10px;padding:8px 0 4px;">── 素材不足 ──</div>`;
      craftHtml += lackList.map(function(recipe){
        const matList = Object.keys(recipe.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = recipe.materials[name];
          return `<span style="color:${have>=need?"#88ff88":"#442222"};">${name} ${have}/${need}</span>`;
        }).join("　");
        return `
          <div style="background:#080808;border:1px solid #0f0f0f;padding:8px;margin-bottom:4px;opacity:0.45;">
            <div style="font-size:12px;color:#555;margin-bottom:4px;">${recipe.name}</div>
            <div style="font-size:10px;">${matList}</div>
          </div>
        `;
      }).join("");
    }

    content = stackHtml + craftHtml;

  }

  tab.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;background:#0a0a0a;color:white;">
      <div style="display:flex;flex-shrink:0;border-bottom:1px solid #1a1a1a;">
        ${sectionBtns}
      </div>
      <div style="flex:1;overflow-y:auto;padding:10px;">
        ${content}
      </div>
    </div>
  `;

}

function switchCraftSection(key){
  currentCraftSection = key;
  renderCraftTab();
}
function renderEnemyTab(){

  const list = document.getElementById("list");
  if(!list){ return; }

  if(typeof enemies === "undefined" || enemies.length === 0){
    list.innerHTML = "<div style='color:white;padding:20px;'>敵データなし</div>";
    return;
  }

  const rebirthCount = player.rebirthCount || 0;

  const groups = {};
  enemies.forEach(function(enemy){
    const r = enemy.rebirthRequired || 0;
    if(!groups[r]){ groups[r] = []; }
    groups[r].push(enemy);
  });

  let html = "";

  Object.keys(groups).map(Number).sort(function(a,b){ return a-b; })
  .forEach(function(r){

    const unlocked = rebirthCount >= r;
    const label    = r === 0 ? "はじまりの地" : "転生" + r + "回 解放エリア";

    // ─── エリアヘッダー（小さく） ───
    html += `
      <div style="
        padding:3px 10px;
        background:${unlocked ? "#0f1520" : "#0a0a0a"};
        border-bottom:1px solid #1a1a2a;
        border-top:1px solid #1a1a2a;
        color:${unlocked ? "#4466aa" : "#2a2a2a"};
        font-size:10px;
        display:flex;align-items:center;gap:5px;
      ">
        ${unlocked ? "🔓" : "🔒"}
        <span>${label}</span>
        ${!unlocked
          ? `<span style="color:#222;margin-left:auto;font-size:9px;">転生${r}回で解放</span>`
          : ""}
      </div>
    `;

    if(!unlocked){
      html += `
        <div style="padding:8px 10px;color:#2a2a2a;font-size:10px;text-align:center;">
          🔒 転生${r}回で解放されます
        </div>
      `;
      return;
    }

    html += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;padding:6px;">`;

    groups[r].forEach(function(enemy, idx){

      const revealed = idx === 0 || isEnemyRevealed(groups[r][idx - 1]);

      if(!revealed){
        html += `
          <div style="
            background:#0a0a0a;border:1px solid #1a1a1a;
            padding:10px;text-align:center;color:#2a2a2a;
            font-size:11px;
          ">
            <div style="font-size:22px;margin-bottom:4px;">？</div>
            <div style="font-size:9px;">前の敵を倒すと解放</div>
          </div>
        `;
        return;
      }

      const bossStyle = enemy.isBoss
        ? "border:1px solid #554400;background:#0d0900;"
        : "border:1px solid #1e1e1e;background:#0d0d0d;";

      html += `
        <div
          onclick="location.href='battle.html?id=${enemy.id}'"
          style="${bossStyle}padding:8px;cursor:pointer;text-align:center;"
        >
          ${enemy.isBoss
            ? `<div style="color:gold;font-size:9px;margin-bottom:2px;">👑 BOSS</div>`
            : ""}

          <img
            src="${enemy.img}"
            width="60"
            style="display:block;margin:0 auto 4px;"
            onerror="this.style.display='none'"
          >

          <div style="font-size:11px;font-weight:bold;
            color:${enemy.isBoss ? "gold" : "white"};margin-bottom:3px;">
            ${enemy.name}
          </div>

          <div style="font-size:9px;color:#666;line-height:1.6;text-align:left;">
            HP:${enemy.hp} ATK:${enemy.atk}<br>
            速:${(enemy.speed/1000).toFixed(1)}s G:${enemy.drop}<br>
            通:${enemy.material || "なし"}<br>
            レア:${enemy.rareMaterial || "なし"}
          </div>
        </div>
      `;

    });

    html += `</div>`;

  });

  list.innerHTML = html;

}

function isEnemyRevealed(enemy){
  if(!enemy){ return false; }
  if(enemy.material    && (player.materials[enemy.material]    || 0) > 0){ return true; }
  if(enemy.rareMaterial&& (player.materials[enemy.rareMaterial]|| 0) > 0){ return true; }
  return false;
}
function getUpgradeCost(base, level){
  return base + Math.floor(level * 1.5);
}

function renderUpgradeTab(){

  const tab = document.getElementById("upgradeTab");
  if(!tab){ return; }

  const atkCost   = getUpgradeCost(10, player.atk);
  const hpCost    = getUpgradeCost(10, Math.floor(player.maxHp / 5));
  const critCost  = getUpgradeCost(15, player.crit);
  const speedLevel = Math.floor((2000 - player.attackSpeed) / 100);
  const speedCost = getUpgradeCost(20, speedLevel);

  const critMax  = 80;
  const speedMin = 400;

  tab.innerHTML = `
    <div style="padding:16px;color:white;">

      <h2 style="font-size:16px;margin-bottom:14px;">強化</h2>

      <button onclick="upgradeAtk()" style="
        display:block;width:100%;min-width:unset;min-height:unset;
        height:52px;font-size:15px;margin-bottom:10px;
        background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
      ">
        ⚔️ 攻撃 +1
        <span style="float:right;color:#ffcc44;">${atkCost}G</span>
      </button>

      <button onclick="upgradeHp()" style="
        display:block;width:100%;min-width:unset;min-height:unset;
        height:52px;font-size:15px;margin-bottom:10px;
        background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
      ">
        ❤️ 最大HP +5
        <span style="float:right;color:#ffcc44;">${hpCost}G</span>
      </button>

      <button onclick="upgradeCrit()"
        ${player.crit >= critMax ? "disabled" : ""}
        style="
          display:block;width:100%;min-width:unset;min-height:unset;
          height:52px;font-size:15px;margin-bottom:10px;
          background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
          ${player.crit >= critMax ? "opacity:0.4;" : ""}
      ">
        💥 クリ率 +1%
        <span style="float:right;color:${player.crit >= critMax ? "#555" : "#ffcc44"};">
          ${player.crit >= critMax ? "上限(80%)" : critCost + "G"}
        </span>
      </button>

      <button onclick="upgradeSpeed()"
        ${player.attackSpeed <= speedMin ? "disabled" : ""}
        style="
          display:block;width:100%;min-width:unset;min-height:unset;
          height:52px;font-size:15px;margin-bottom:10px;
          background:#1a1a1a;border:1px solid #333;color:white;text-align:left;padding:0 14px;
          ${player.attackSpeed <= speedMin ? "opacity:0.4;" : ""}
      ">
        ⚡ 攻撃速度 -100ms
        <span style="float:right;color:${player.attackSpeed <= speedMin ? "#555" : "#ffcc44"};">
          ${player.attackSpeed <= speedMin ? "上限" : speedCost + "G"}
        </span>
      </button>

    </div>
  `;

}

function upgradeAtk(){
  const cost = getUpgradeCost(10, player.atk);
  if(player.gold < cost){ return; }
  player.gold -= cost;
  player.atk  += 1;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeHp(){
  const cost = getUpgradeCost(10, Math.floor(player.maxHp / 5));
  if(player.gold < cost){ return; }
  player.gold   -= cost;
  player.maxHp  += 5;
  player.hp     += 5;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeCrit(){
  const cost = getUpgradeCost(15, player.crit);
  if(player.gold < cost || player.crit >= 80){ return; }
  player.gold -= cost;
  player.crit += 1;
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}

function upgradeSpeed(){
  const speedLevel = Math.floor((2000 - player.attackSpeed) / 100);
  const cost = getUpgradeCost(20, speedLevel);
  if(player.gold < cost || player.attackSpeed <= 400){ return; }
  player.gold        -= cost;
  player.attackSpeed -= 100;
  if(player.attackSpeed < 400){ player.attackSpeed = 400; }
  savePlayer();
  renderPlayer();
  renderUpgradeTab();
}
function renderMaterialTab(){

  const tab = document.getElementById("materialTab");

  if(!tab){
    return;
  }

  const order = [
    "スライムゼリー",
    "キングゼリー",
    "ゴブリンの牙",
    "王族の牙",
    "オークの皮",
    "古代の皮",
    "竜のウロコ",
    "紅竜の心臓"
  ];

  let html = `<div class="materialArea">`;

  let hasAny = false;

  order.forEach(function(name){

    const amount = player.materials[name];

    if(!amount){
      return;
    }

    hasAny = true;

    const path = getMaterialPath(name);

    let icon = "？";

    if(path){
      icon = `<img src="${path}" onerror="this.outerHTML='？'">`;
    }

    html += `
      <div class="materialCard">
        ${icon}
        <br><br>
        ${name}
        <br><br>
        × ${amount}
      </div>
    `;

  });

  if(!hasAny){
    html += `<div style="color:white;padding:20px;">素材なし</div>`;
  }

  html += `</div>`;

  tab.innerHTML = html;

}
function renderSettingTab(){

  const tab = document.getElementById("settingTab");

  if(!tab){
    return;
  }

  tab.innerHTML = `
    <div style="padding:20px;color:white;">

      <h2>設定</h2><br>

      <button onclick="saveGame()">
        セーブ
      </button>
      <br><br>

      <button onclick="loadGame()">
        ロード
      </button>
      <br><br>

      <button onclick="resetGame()">
        リセット
      </button>

    </div>
  `;

}




function saveGame(){

  savePlayer();
  alert("セーブしました");

}




function loadGame(){

  loadPlayer();
  renderPlayer();

  if(typeof renderUpgradeTab === "function"){
    renderUpgradeTab();
  }

  alert("ロードしました");

}




function resetGame(){

  if(!confirm("データを消しますか？")){
    return;
  }

  resetPlayer();
  renderPlayer();

  if(typeof renderUpgradeTab === "function"){
    renderUpgradeTab();
  }

  alert("リセットしました");

}
function showTab(tabId){

  const pages = document.querySelectorAll(".tabPage");
  pages.forEach(function(page){
    page.classList.remove("activePage");
  });

  const tab = document.getElementById(tabId);
  if(tab){ tab.classList.add("activePage"); }

}

if(typeof renderEnemyTab    === "function"){ renderEnemyTab();    }
if(typeof renderUpgradeTab  === "function"){ renderUpgradeTab();  }
if(typeof renderSkillTab    === "function"){ renderSkillTab();    }
if(typeof renderCraftTab    === "function"){ renderCraftTab();    }
if(typeof renderMaterialTab === "function"){ renderMaterialTab(); }
if(typeof renderRebirthTab  === "function"){ renderRebirthTab();  }
if(typeof renderSettingTab  === "function"){ renderSettingTab();  }
if(typeof renderPlayer      === "function"){ renderPlayer();      }
