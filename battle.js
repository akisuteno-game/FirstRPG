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
// 全スキルブランチをまとめるオブジェクト
// 各ブランチは skillBranch_xxx.js で定義して追加される
const skillTree = {};

// スキルIDからスキルデータを取得
function getSkillById(id){
  for(const branch of Object.values(skillTree)){
    for(const skill of branch.skills){
      if(skill.id === id){ return skill; }
    }
  }
  return null;
}
skillTree.attack = {
  label: "⚔️ 攻撃",
  color: "#ff4444",
  skills: [

    {
      id: "atk1",
      name: "力の目覚め",
      desc: "ATK +3",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { atk: 3 }
    },

    {
      id: "atk2",
      name: "鋭い刃",
      desc: "ATK +6",
      cost: 2,
      requires: ["atk1"],
      type: "passive",
      effect: { atk: 6 }
    },

    {
      id: "atk3",
      name: "力の奔流",
      desc: "ATK +12",
      cost: 3,
      requires: ["atk2"],
      type: "passive",
      effect: { atk: 12 }
    },

    {
      id: "atk4",
      name: "破壊の拳",
      desc: "ATK +20",
      cost: 4,
      requires: ["atk3"],
      type: "passive",
      effect: { atk: 20 }
    },

    {
      id: "atk5",
      name: "神滅の一撃",
      desc: "ATK +35",
      cost: 5,
      requires: ["atk4"],
      type: "passive",
      effect: { atk: 35 }
    },

    {
      id: "atk6",
      name: "覇王の力",
      desc: "ATK +50、クリダメ +0.5倍",
      cost: 6,
      requires: ["atk5"],
      type: "passive",
      effect: { atk: 50, critMulti: 0.5 }
    },

    {
      id: "atk7",
      name: "滅神の剣",
      desc: "ATK +80",
      cost: 8,
      requires: ["atk6"],
      type: "passive",
      effect: { atk: 80 }
    },

    {
      id: "atk8",
      name: "無双",
      desc: "ATK +120、クリダメ +1.0倍",
      cost: 10,
      requires: ["atk7"],
      type: "passive",
      effect: { atk: 120, critMulti: 1.0 }
    }

  ]
};
skillTree.defense = {
  label: "🛡️ 防御",
  color: "#4488ff",
  skills: [

    {
      id: "def1",
      name: "鉄の意志",
      desc: "MaxHP +10",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { maxHp: 10 }
    },

    {
      id: "def2",
      name: "堅固な体",
      desc: "MaxHP +25",
      cost: 2,
      requires: ["def1"],
      type: "passive",
      effect: { maxHp: 25 }
    },

    {
      id: "def3",
      name: "不屈の肉体",
      desc: "MaxHP +50",
      cost: 3,
      requires: ["def2"],
      type: "passive",
      effect: { maxHp: 50 }
    },

    {
      id: "def4",
      name: "再生の加護",
      desc: "自動回復速度 2倍",
      cost: 3,
      requires: ["def2"],
      type: "passive",
      effect: { healRate: 2 }
    },

    {
      id: "def5",
      name: "鋼の城壁",
      desc: "MaxHP +100",
      cost: 4,
      requires: ["def3"],
      type: "passive",
      effect: { maxHp: 100 }
    },

    {
      id: "def6",
      name: "不死の誓い",
      desc: "MaxHP +200、自動回復 3倍",
      cost: 6,
      requires: ["def5", "def4"],
      type: "passive",
      effect: { maxHp: 200, healRate: 3 }
    },

    {
      id: "def7",
      name: "神の盾",
      desc: "MaxHP +350",
      cost: 8,
      requires: ["def6"],
      type: "passive",
      effect: { maxHp: 350 }
    },

    {
      id: "def8",
      name: "不滅の肉体",
      desc: "MaxHP +500、自動回復 5倍",
      cost: 10,
      requires: ["def7"],
      type: "passive",
      effect: { maxHp: 500, healRate: 5 }
    }

  ]
};
skillTree.speed = {
  label: "⚡ 速度",
  color: "#ffee44",
  skills: [

    {
      id: "spd1",
      name: "素早い手",
      desc: "攻撃速度 -100ms",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { attackSpeed: -100 }
    },

    {
      id: "spd2",
      name: "風の動き",
      desc: "攻撃速度 -200ms",
      cost: 2,
      requires: ["spd1"],
      type: "passive",
      effect: { attackSpeed: -200 }
    },

    {
      id: "spd3",
      name: "疾風の剣",
      desc: "攻撃速度 -300ms",
      cost: 3,
      requires: ["spd2"],
      type: "passive",
      effect: { attackSpeed: -300 }
    },

    {
      id: "spd4",
      name: "光速の斬撃",
      desc: "攻撃速度 -400ms",
      cost: 4,
      requires: ["spd3"],
      type: "passive",
      effect: { attackSpeed: -400 }
    },

    {
      id: "spd5",
      name: "瞬間移動",
      desc: "攻撃速度 -500ms",
      cost: 5,
      requires: ["spd4"],
      type: "passive",
      effect: { attackSpeed: -500 }
    },

    {
      id: "spd6",
      name: "時間操作",
      desc: "攻撃速度 -600ms",
      cost: 7,
      requires: ["spd5"],
      type: "passive",
      effect: { attackSpeed: -600 }
    }

  ]
};
skillTree.critical = {
  label: "💥 クリティカル",
  color: "#ff8800",
  skills: [

    {
      id: "crit1",
      name: "鋭い眼光",
      desc: "クリ率 +5%",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { crit: 5 }
    },

    {
      id: "crit2",
      name: "急所狙い",
      desc: "クリ率 +10%",
      cost: 2,
      requires: ["crit1"],
      type: "passive",
      effect: { crit: 10 }
    },

    {
      id: "crit3",
      name: "弱点看破",
      desc: "クリダメ +0.3倍",
      cost: 2,
      requires: ["crit1"],
      type: "passive",
      effect: { critMulti: 0.3 }
    },

    {
      id: "crit4",
      name: "必殺の眼",
      desc: "クリ率 +15%",
      cost: 3,
      requires: ["crit2"],
      type: "passive",
      effect: { crit: 15 }
    },

    {
      id: "crit5",
      name: "死神の一閃",
      desc: "クリダメ +0.5倍",
      cost: 4,
      requires: ["crit3", "crit4"],
      type: "passive",
      effect: { critMulti: 0.5 }
    },

    {
      id: "crit6",
      name: "確定致命傷",
      desc: "クリ率 +20%、クリダメ +1.0倍",
      cost: 6,
      requires: ["crit5"],
      type: "passive",
      effect: { crit: 20, critMulti: 1.0 }
    },

    {
      id: "crit7",
      name: "神眼",
      desc: "クリ率 +25%、クリダメ +1.5倍",
      cost: 8,
      requires: ["crit6"],
      type: "passive",
      effect: { crit: 25, critMulti: 1.5 }
    }

  ]
};
skillTree.special = {
  label: "✨ 特殊",
  color: "#aa44ff",
  skills: [

    {
      id: "spc1",
      name: "幸運の加護",
      desc: "レアドロップ率 +5%",
      cost: 2,
      requires: [],
      type: "passive",
      effect: { rareChance: 0.05 }
    },

    {
      id: "spc2",
      name: "金の手",
      desc: "GOLD取得 +20%",
      cost: 2,
      requires: [],
      type: "passive",
      effect: { goldBonus: 0.2 }
    },

    {
      id: "spc3",
      name: "大幸運",
      desc: "レアドロップ率 +10%",
      cost: 3,
      requires: ["spc1"],
      type: "passive",
      effect: { rareChance: 0.10 }
    },

    {
      id: "spc4",
      name: "錬金術師",
      desc: "ポーション作成コスト半減",
      cost: 3,
      requires: ["spc2"],
      type: "passive",
      effect: { potionCostHalf: true }
    },

    {
      id: "spc5",
      name: "伝説の強運",
      desc: "レアドロップ率 +20%",
      cost: 5,
      requires: ["spc3"],
      type: "passive",
      effect: { rareChance: 0.20 }
    },

    {
      id: "spc6",
      name: "覇者の証",
      desc: "全ステータス +10%",
      cost: 8,
      requires: ["spc5", "spc4"],
      type: "passive",
      effect: { allPercent: 0.10 }
    }

  ]
};
skillTree.magic = {
  label: "🔮 魔法",
  color: "#44ddff",
  skills: [

    {
      id: "mag1",
      name: "魔力の芽生え",
      desc: "ATK +5（魔力補正）",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { atk: 5 }
    },

    {
      id: "mag2",
      name: "炎の呪文",
      desc: "ATK +10、クリダメ +0.2倍",
      cost: 2,
      requires: ["mag1"],
      type: "passive",
      effect: { atk: 10, critMulti: 0.2 }
    },

    {
      id: "mag3",
      name: "氷結魔法",
      desc: "ATK +15、攻撃速度 -150ms",
      cost: 3,
      requires: ["mag1"],
      type: "passive",
      effect: { atk: 15, attackSpeed: -150 }
    },

    {
      id: "mag4",
      name: "雷撃魔法",
      desc: "ATK +20、クリ率 +8%",
      cost: 4,
      requires: ["mag2"],
      type: "passive",
      effect: { atk: 20, crit: 8 }
    },

    {
      id: "mag5",
      name: "魔法陣展開",
      desc: "ATK +30、MaxHP +30",
      cost: 4,
      requires: ["mag3"],
      type: "passive",
      effect: { atk: 30, maxHp: 30 }
    },

    {
      id: "mag6",
      name: "大魔法",
      desc: "ATK +50、クリダメ +0.5倍",
      cost: 6,
      requires: ["mag4"],
      type: "passive",
      effect: { atk: 50, critMulti: 0.5 }
    },

    {
      id: "mag7",
      name: "禁忌の魔法",
      desc: "ATK +80、クリ率 +15%、クリダメ +0.8倍",
      cost: 8,
      requires: ["mag5", "mag6"],
      type: "passive",
      effect: { atk: 80, crit: 15, critMulti: 0.8 }
    },

    {
      id: "mag8",
      name: "神滅魔法",
      desc: "ATK +150、攻撃速度 -300ms、クリダメ +1.5倍",
      cost: 12,
      requires: ["mag7"],
      type: "passive",
      effect: { atk: 150, attackSpeed: -300, critMulti: 1.5 }
    }

  ]
};
skillTree.poison = {
  label: "☠️ 毒・状態異常",
  color: "#88ff44",
  skills: [

    {
      id: "psn1",
      name: "毒の知識",
      desc: "ATK +3、レアドロップ率 +3%",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { atk: 3, rareChance: 0.03 }
    },

    {
      id: "psn2",
      name: "毒塗り",
      desc: "ATK +8",
      cost: 2,
      requires: ["psn1"],
      type: "passive",
      effect: { atk: 8 }
    },

    {
      id: "psn3",
      name: "猛毒",
      desc: "ATK +15、クリ率 +5%",
      cost: 3,
      requires: ["psn2"],
      type: "passive",
      effect: { atk: 15, crit: 5 }
    },

    {
      id: "psn4",
      name: "麻痺の毒",
      desc: "敵攻撃速度 実質 +10%遅延（ATK +10）",
      cost: 3,
      requires: ["psn2"],
      type: "passive",
      effect: { atk: 10, enemySlowBonus: 0.1 }
    },

    {
      id: "psn5",
      name: "腐食の霧",
      desc: "ATK +25、レアドロップ率 +8%",
      cost: 4,
      requires: ["psn3"],
      type: "passive",
      effect: { atk: 25, rareChance: 0.08 }
    },

    {
      id: "psn6",
      name: "絶対毒",
      desc: "ATK +40、クリ率 +10%",
      cost: 5,
      requires: ["psn4", "psn5"],
      type: "passive",
      effect: { atk: 40, crit: 10 }
    },

    {
      id: "psn7",
      name: "死の霧",
      desc: "ATK +60、クリダメ +0.6倍、レアドロップ率 +10%",
      cost: 7,
      requires: ["psn6"],
      type: "passive",
      effect: { atk: 60, critMulti: 0.6, rareChance: 0.10 }
    },

    {
      id: "psn8",
      name: "疫病神",
      desc: "ATK +100、クリ率 +20%、クリダメ +1.0倍",
      cost: 10,
      requires: ["psn7"],
      type: "passive",
      effect: { atk: 100, crit: 20, critMulti: 1.0 }
    }

  ]
};
skillTree.gather = {
  label: "⛏️ 採掘・素材",
  color: "#ffaa44",
  skills: [

    {
      id: "gth1",
      name: "採掘の基礎",
      desc: "レアドロップ率 +5%、GOLD +10%",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { rareChance: 0.05, goldBonus: 0.1 }
    },

    {
      id: "gth2",
      name: "素材鑑定",
      desc: "レアドロップ率 +8%",
      cost: 2,
      requires: ["gth1"],
      type: "passive",
      effect: { rareChance: 0.08 }
    },

    {
      id: "gth3",
      name: "採掘強化",
      desc: "GOLD +20%、ATK +5",
      cost: 2,
      requires: ["gth1"],
      type: "passive",
      effect: { goldBonus: 0.2, atk: 5 }
    },

    {
      id: "gth4",
      name: "宝探し",
      desc: "レアドロップ率 +15%",
      cost: 3,
      requires: ["gth2"],
      type: "passive",
      effect: { rareChance: 0.15 }
    },

    {
      id: "gth5",
      name: "黄金の手",
      desc: "GOLD +40%",
      cost: 3,
      requires: ["gth3"],
      type: "passive",
      effect: { goldBonus: 0.4 }
    },

    {
      id: "gth6",
      name: "素材の神",
      desc: "レアドロップ率 +20%、GOLD +30%",
      cost: 5,
      requires: ["gth4", "gth5"],
      type: "passive",
      effect: { rareChance: 0.20, goldBonus: 0.3 }
    },

    {
      id: "gth7",
      name: "伝説の採掘師",
      desc: "レアドロップ率 +30%、GOLD +50%",
      cost: 7,
      requires: ["gth6"],
      type: "passive",
      effect: { rareChance: 0.30, goldBonus: 0.5 }
    },

    {
      id: "gth8",
      name: "万物収集",
      desc: "レアドロップ率 +50%、GOLD +100%、ATK +20",
      cost: 10,
      requires: ["gth7"],
      type: "passive",
      effect: { rareChance: 0.50, goldBonus: 1.0, atk: 20 }
    }

  ]
};
// 取得済みスキルを player.skills から確認
function hasSkill(id){
  return !!(player.skills && player.skills[id]);
}

// 前提スキルが全部取得済みか
function requiresMet(skill){
  return skill.requires.every(function(req){
    return hasSkill(req);
  });
}

// スキル取得可能か
function canLearnSkill(skill){
  if(hasSkill(skill.id))       { return false; }
  if(!requiresMet(skill))      { return false; }
  const sp = (player.skillPoints || 0) - (player.usedSkillPoints || 0);
  if(sp < skill.cost)          { return false; }
  return true;
}

// スキルを取得する
function learnSkill(skillId){

  const skill = getSkillById(skillId);

  if(!skill || !canLearnSkill(skill)){ return; }

  if(!player.skills){ player.skills = {}; }

  player.skills[skillId] = true;

  player.usedSkillPoints =
    (player.usedSkillPoints || 0) + skill.cost;

  savePlayer();
  renderPlayer();

  if(typeof renderSkillTab === "function"){
    renderSkillTab();
  }

}

// 全スキル効果をプレイヤーに適用（ロード時・転生後に呼ぶ）
function applyAllSkillEffects(){

  if(!player.skills){ return; }

  Object.keys(player.skills).forEach(function(id){

    const skill = getSkillById(id);

    if(!skill){ return; }

    applySkillEffect(skill.effect);

  });

}

function applySkillEffect(effect){

  if(!effect){ return; }

  if(effect.atk)         { player.atk         += effect.atk;         }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp            = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.crit)        { player.crit         += effect.crit;
                           if(player.crit > 95){ player.crit = 95; } }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti;   }

  // goldBonus・rareChance・potionCostHalf・allPercent はバトル/アクション時に参照

}

// 残りスキルポイントを取得
function getFreeSkillPoints(){
  return (player.skillPoints || 0) - (player.usedSkillPoints || 0);
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
// enemies は ../data.js で定義済み
console.log("battleData OK");
function renderEnemyHp(){

  return `

    HP :
    <span id="enemyHpText">${currentEnemy.hp}</span>

    <div class="hpBox">
      <div id="enemyHpFill" class="hpFill"></div>
    </div>

    <br>

  `;

}
function renderGauges(){

  return `

    <div>
      自分ゲージ
      <div class="gaugeBox">
        <div id="playerGauge" class="gaugeFill" style="width:0%;background:lime;"></div>
      </div>
    </div>

    <div>
      敵ゲージ
      <div class="gaugeBox">
        <div id="enemyGauge" class="gaugeFill" style="width:0%;background:red;"></div>
      </div>
    </div>

  `;

}
function renderButtons(){

  return `

    <div class="buttonRow">

      <button
        id="attackBtn"
        class="battleBtn"
        onclick="attackEnemy()"
      >
        攻撃
      </button>

      <button
        class="battleBtn"
        onclick="usePotion()"
      >
        ポーション（${player.potions}）
      </button>

      <button
        class="battleBtn"
        onclick="location.href='https://akisuteno-game.github.io/FirstRPG/index.html'"
      >
        戻る
      </button>

    </div>

  `;

}
// 戦闘ログ
const battleLog = [];




function addLog(text){

  battleLog.unshift(text);

  if(battleLog.length > 5){
    battleLog.pop();
  }

  const box = document.getElementById("battleLog");

  if(box){
    box.innerHTML = battleLog
      .map(function(t){ return `<div>${t}</div>`; })
      .join("");
  }

}




function renderBattle(){

  // battleInit.js で描画するため未使用
  console.log("renderBattle: 未使用");

}
let playerGauge = 0;
let enemyGauge  = 0;
let playerLoop  = null;
let enemyLoop   = null;




function startPlayerGauge(){

  clearInterval(playerLoop);

  playerGauge = 0;

  const bar    = document.getElementById("playerGauge");
  const button = document.getElementById("attackBtn");

  if(bar)   { bar.style.width    = "0%";  }
  if(button){ button.disabled    = true;  }

  const speed = player.attackSpeed;

  playerLoop = setInterval(

    function(){

      playerGauge += (16 / speed) * 100;

      if(playerGauge >= 100){

        playerGauge = 100;
        clearInterval(playerLoop);

        if(button){ button.disabled = false; }

      }

      if(bar){ bar.style.width = playerGauge + "%"; }

    },

    16

  );

}




function startEnemyGauge(){

  clearInterval(enemyLoop);

  enemyGauge = 0;

  const bar   = document.getElementById("enemyGauge");

  if(bar){ bar.style.width = "0%"; }

  const speed = currentEnemy.speed;

  enemyLoop = setInterval(

    function(){

      enemyGauge += (16 / speed) * 100;

      if(enemyGauge >= 100){

        enemyGauge = 0;
        enemyAttack();

      }

      if(bar){ bar.style.width = enemyGauge + "%"; }

    },

    16

  );

}
const RETURN_URL = "https://akisuteno-game.github.io/FirstRPG/index.html";

function attackEnemy(){

  if(!currentEnemy){ return; }

  const button = document.getElementById("attackBtn");
  if(button){ button.disabled = true; }

  playerGauge = 0;
  const gauge = document.getElementById("playerGauge");
  if(gauge){ gauge.style.width = "0%"; }

  // クリティカル判定
  const isCrit = Math.random() * 100 < player.crit;
  let dmg = player.atk;
  if(isCrit){ dmg = Math.floor(dmg * player.critMulti); }

  currentEnemy.hp -= dmg;
  if(currentEnemy.hp < 0){ currentEnemy.hp = 0; }

  showDamageNumber(dmg, isCrit, "enemy");

  if(isCrit){
    addLog("⚡ クリティカル！ " + dmg + " ダメージ！");
  } else {
    addLog("→ " + currentEnemy.name + " に " + dmg + " ダメージ");
  }

  updateEnemyUI();

  if(currentEnemy.hp <= 0){

    // GOLDボーナス（転生ボーナス）
    const rebirthGoldBonus = 0.03 * (player.rebirthCount || 0);
    const goldMult = 1 + (player.goldBonus || 0) + rebirthGoldBonus;
    const goldGain = Math.floor((currentEnemy.drop || 0) * goldMult);

    player.gold      += goldGain;
    player.exp       += currentEnemy.exp || 0;
    player.killCount += 1;

    // 通常素材
    if(currentEnemy.material){
      if(!player.materials[currentEnemy.material]){
        player.materials[currentEnemy.material] = 0;
      }
      player.materials[currentEnemy.material]++;
    }

    // レア素材
    const rareBonus = getSkillRareBonus();
    if(
      currentEnemy.rareMaterial
      && Math.random() < (currentEnemy.rareChance || 0.1) + rareBonus
    ){
      if(!player.materials[currentEnemy.rareMaterial]){
        player.materials[currentEnemy.rareMaterial] = 0;
      }
      player.materials[currentEnemy.rareMaterial]++;
      addLog("✨ レア素材「" + currentEnemy.rareMaterial + "」を入手！");
    }

    checkLevelUp();
    savePlayer();

    clearInterval(playerLoop);
    clearInterval(enemyLoop);

    addLog("🏆 " + currentEnemy.name + " を倒した！ GOLD +" + goldGain);

    setTimeout(function(){
      location.href = RETURN_URL;
    }, 800);

    return;

  }

  startPlayerGauge();

}




function enemyAttack(){

  const dmg = currentEnemy.atk;

  player.hp -= dmg;
  if(player.hp < 0){ player.hp = 0; }

  showDamageNumber(dmg, false, "player");
  addLog("← " + currentEnemy.name + " の攻撃！ " + dmg + " ダメージ");

  if(player.hp <= 0){

    clearInterval(playerLoop);
    clearInterval(enemyLoop);

    addLog("💀 やられた...");
    savePlayer();

    setTimeout(function(){
      location.href = RETURN_URL;
    }, 1000);

    return;

  }

  updatePlayerHpUI();

}




function usePotion(){

  if(player.potions <= 0){ return; }

  const heal = Math.ceil(player.maxHp * 0.5);

  player.potions -= 1;
  player.hp      += heal;
  if(player.hp > player.maxHp){ player.hp = player.maxHp; }

  addLog("💊 ポーションを使った！ HP +" + heal);

  updatePlayerHpUI();
  refreshPotionButton();

}




function refreshPotionButton(){

  const btns = document.querySelectorAll(".battleBtn");

  btns.forEach(function(btn){
    if(btn.textContent.includes("ポーション")){
      btn.textContent = "ポーション（" + player.potions + "）";
    }
  });

}




function checkLevelUp(){

  const needed = expToNextLevel(player.level);

  if(player.exp >= needed){

    player.exp   -= needed;
    player.level += 1;

    player.maxHp += 3;
    player.hp     = player.maxHp;
    player.atk   += 1;

    player.skillPoints = (player.skillPoints || 0) + 1;

    addLog("🌟 レベルアップ！ Lv." + player.level + " SP +1");

  }

}




function updateEnemyUI(){

  const hpText = document.getElementById("enemyHpText");
  const hpBar  = document.getElementById("enemyHpFill");

  if(!hpText || !hpBar){ return; }

  hpText.innerHTML = currentEnemy.hp;

  const percent = (currentEnemy.hp / currentEnemy.maxHp) * 100;

  hpBar.style.width = percent + "%";

  if(percent > 70){
    hpBar.style.background = "lime";
  } else if(percent > 30){
    hpBar.style.background = "yellow";
  } else {
    hpBar.style.background = "red";
  }

}




function updatePlayerHpUI(){

  const bar = document.getElementById("battlePlayerHpFill");
  if(!bar){ return; }

  const percent = (player.hp / player.maxHp) * 100;

  bar.style.width = percent + "%";

  if(percent > 70){
    bar.style.background = "lime";
  } else if(percent > 30){
    bar.style.background = "yellow";
  } else {
    bar.style.background = "red";
  }

  const txt = document.getElementById("battlePlayerHpText");
  if(txt){ txt.textContent = player.hp + " / " + player.maxHp; }

}




function showDamageNumber(dmg, isCrit, target){

  const area = document.getElementById("battleArea");
  if(!area){ return; }

  const el = document.createElement("div");

  el.textContent = isCrit ? "CRIT! " + dmg : "-" + dmg;

  el.style.position      = "absolute";
  el.style.color         = isCrit ? "orange" : "white";
  el.style.fontSize      = isCrit ? "28px" : "20px";
  el.style.fontWeight    = "bold";
  el.style.pointerEvents = "none";
  el.style.zIndex        = "100";
  el.style.transition    = "all 0.8s ease";

  if(target === "enemy"){
    el.style.left = "55%";
    el.style.top  = "30%";
  } else {
    el.style.left = "20%";
    el.style.top  = "60%";
  }

  area.appendChild(el);

  setTimeout(function(){
    el.style.top     = target === "enemy" ? "15%" : "45%";
    el.style.opacity = "0";
  }, 50);

  setTimeout(function(){
    if(area.contains(el)){ area.removeChild(el); }
  }, 900);

}




function getSkillRareBonus(){

  let bonus = 0;

  if(!player.skills || typeof getSkillById !== "function"){ return bonus; }

  ["spc1","spc3","spc5"].forEach(function(id){
    if(player.skills[id]){
      const sk = getSkillById(id);
      if(sk && sk.effect && sk.effect.rareChance){
        bonus += sk.effect.rareChance;
      }
    }
  });

  if(player.skills["spc6"]){ bonus += 0.05; }

  return bonus;

}
document.addEventListener(

  "DOMContentLoaded",

  function(){

    const area = document.getElementById("battleArea");

    if(!area){
      alert("battleArea none");
      return;
    }


    // URLパラメータ ?id= を優先、なければ localStorage
    const params  = new URLSearchParams(location.search);
    const urlId   = params.get("id");
    const savedId = urlId !== null
      ? parseInt(urlId)
      : parseInt(localStorage.getItem("selectedEnemy"));


    // 敵データを検索
    const found = enemies.find(function(e){
      return e.id === savedId;
    });

    if(!found){
      area.innerHTML =
        "<p style='color:white;margin-top:40px;'>敵データが見つかりません</p>";
      return;
    }


    // currentEnemy をグローバルに設定
    window.currentEnemy        = Object.assign({}, found);
    window.currentEnemy.maxHp  = found.hp;


    // playerData をロード
    if(typeof loadPlayer === "function"){
      loadPlayer();
    }


    // バトル画面を描画
    area.innerHTML = `

      <div class="battleWrap">

        <div style="font-size:20px;margin-bottom:8px;">
          ${currentEnemy.name}
        </div>

        <img
          src="${currentEnemy.img}"
          class="enemyImg"
          onerror="this.style.display='none'"
        >

        <br><br>

        ${renderEnemyHp()}

        <div style="margin:10px 0;font-size:14px;">
          自分 HP :
          <span id="battlePlayerHpText">
            ${player.hp} / ${player.maxHp}
          </span>
          <div class="hpBox">
            <div
              id="battlePlayerHpFill"
              class="hpFill"
              style="width:${(player.hp/player.maxHp)*100}%;"
            ></div>
          </div>
        </div>

        ${renderGauges()}

        ${renderButtons()}

        <div
          id="battleLog"
          style="
            margin-top:16px;
            font-size:13px;
            color:#aaa;
            min-height:80px;
            text-align:left;
            width:260px;
            margin-left:auto;
            margin-right:auto;
          "
        ></div>

      </div>

    `;


    // ゲージ開始
    startPlayerGauge();
    startEnemyGauge();

    addLog(`⚔️ ${currentEnemy.name} との戦闘開始！`);

    console.log("BATTLE INIT OK", currentEnemy.name);

  }

);
