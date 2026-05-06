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
