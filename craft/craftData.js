// 装備の種類
const equipSlots = ["weapon", "armor", "accessory"];

// 装備データ
const craftEquipments = [

  // ─── 武器 ───────────────────────────
  {
    id: "ironSword",
    slot: "weapon",
    name: "鉄の剣",
    desc: "ATK +8",
    effect: { atk: 8 },
    materials: { "骨のかけら": 3, "鉄の欠片": 2 }
  },
  {
    id: "poisonBlade",
    slot: "weapon",
    name: "毒の短剣",
    desc: "ATK +15、クリ率 +3%",
    effect: { atk: 15, crit: 3 },
    materials: { "毒の鱗": 3, "影の短剣": 1 }
  },
  {
    id: "flameSword",
    slot: "weapon",
    name: "炎の剣",
    desc: "ATK +25、クリダメ +0.2倍",
    effect: { atk: 25, critMulti: 0.2 },
    materials: { "炎の結晶": 3, "炎の皮": 2 }
  },
  {
    id: "darkSword",
    slot: "weapon",
    name: "闇の大剣",
    desc: "ATK +40",
    effect: { atk: 40 },
    materials: { "闇の鎧片": 3, "闇の剣": 1 }
  },
  {
    id: "dragonSword",
    slot: "weapon",
    name: "竜殺しの剣",
    desc: "ATK +60、クリ率 +5%",
    effect: { atk: 60, crit: 5 },
    materials: { "竜のウロコ": 5, "紅竜の心臓": 1 }
  },
  {
    id: "voidBlade",
    slot: "weapon",
    name: "虚無の刃",
    desc: "ATK +90、クリダメ +0.5倍",
    effect: { atk: 90, critMulti: 0.5 },
    materials: { "虚無の欠片": 5, "虚無の刃": 2 }
  },
  {
    id: "godSlayerSword",
    slot: "weapon",
    name: "神滅の剣",
    desc: "ATK +150、クリ率 +10%、クリダメ +1.0倍",
    effect: { atk: 150, crit: 10, critMulti: 1.0 },
    materials: { "神滅の鱗": 3, "神滅龍の心臓": 1, "混沌の核": 2 }
  },

  // ─── 鎧 ───────────────────────────
  {
    id: "leatherArmor",
    slot: "armor",
    name: "皮の鎧",
    desc: "MaxHP +20",
    effect: { maxHp: 20 },
    materials: { "狼の毛皮": 3, "腐った肉": 2 }
  },
  {
    id: "boneArmor",
    slot: "armor",
    name: "骨の鎧",
    desc: "MaxHP +40",
    effect: { maxHp: 40 },
    materials: { "骨のかけら": 5, "呪われた骨": 2 }
  },
  {
    id: "orcArmor",
    slot: "armor",
    name: "オークの鎧",
    desc: "MaxHP +65",
    effect: { maxHp: 65 },
    materials: { "オークの皮": 5, "古代の皮": 2 }
  },
  {
    id: "ironArmor",
    slot: "armor",
    name: "鉄の鎧",
    desc: "MaxHP +100",
    effect: { maxHp: 100 },
    materials: { "鉄の欠片": 5, "魔鉄の核": 1 }
  },
  {
    id: "dragonArmor",
    slot: "armor",
    name: "竜鱗の鎧",
    desc: "MaxHP +180、ATK +10",
    effect: { maxHp: 180, atk: 10 },
    materials: { "竜のウロコ": 5, "氷竜のウロコ": 3 }
  },
  {
    id: "phoenixArmor",
    slot: "armor",
    name: "不死鳥の鎧",
    desc: "MaxHP +300",
    effect: { maxHp: 300 },
    materials: { "雷鳥の羽": 3, "不死鳥の核": 2 }
  },
  {
    id: "godArmor",
    slot: "armor",
    name: "神滅の鎧",
    desc: "MaxHP +600、ATK +30",
    effect: { maxHp: 600, atk: 30 },
    materials: { "神滅の鱗": 5, "神滅龍の心臓": 2 }
  },

  // ─── アクセサリー ───────────────────
  {
    id: "luckRing",
    slot: "accessory",
    name: "幸運の指輪",
    desc: "レアドロップ率 +8%",
    effect: { rareChance: 0.08 },
    materials: { "スライムゼリー": 5, "キングゼリー": 1 }
  },
  {
    id: "goldAmulet",
    slot: "accessory",
    name: "黄金のお守り",
    desc: "GOLD取得 +20%",
    effect: { goldBonus: 0.2 },
    materials: { "王の印章": 2, "黄金の王冠": 1 }
  },
  {
    id: "critGem",
    slot: "accessory",
    name: "必殺の宝石",
    desc: "クリ率 +8%、クリダメ +0.3倍",
    effect: { crit: 8, critMulti: 0.3 },
    materials: { "魔眼の結晶": 3, "血の宝石": 2 }
  },
  {
    id: "speedRing",
    slot: "accessory",
    name: "疾風の指輪",
    desc: "攻撃速度 -200ms",
    effect: { attackSpeed: -200 },
    materials: { "銀の牙": 3, "月の牙": 2 }
  },
  {
    id: "soulOrb",
    slot: "accessory",
    name: "魂の宝珠",
    desc: "ATK +20、MaxHP +50",
    effect: { atk: 20, maxHp: 50 },
    materials: { "魂の結晶": 3, "魂の宝珠": 1 }
  },
  {
    id: "voidCrystal",
    slot: "accessory",
    name: "虚空の結晶",
    desc: "全ステータス +8%相当（ATK+30、HP+80、速度-150ms）",
    effect: { atk: 30, maxHp: 80, attackSpeed: -150 },
    materials: { "虚空の結晶": 3, "奈落の核": 2 }
  },
  {
    id: "godHeart",
    slot: "accessory",
    name: "神滅龍の心臓",
    desc: "ATK +80、MaxHP +200、クリ率 +15%",
    effect: { atk: 80, maxHp: 200, crit: 15 },
    materials: { "神滅龍の心臓": 1, "混沌の核": 3, "奈落の核": 2 }
  }

];

// アイテムデータ（消費アイテム）
const craftItems = [

  {
    id: "potion",
    name: "回復ポーション",
    desc: "HP 50%回復",
    materials: { "スライムゼリー": 3 }
  },
  {
    id: "bigPotion",
    name: "大回復ポーション",
    desc: "HP 100%回復",
    materials: { "キングゼリー": 2, "スライムゼリー": 5 }
  },
  {
    id: "expScroll",
    name: "経験値の書",
    desc: "EXP +50",
    materials: { "死霊術の書": 1, "魂の宝珠": 1 }
  },
  {
    id: "goldScroll",
    name: "黄金の書",
    desc: "GOLD +200",
    materials: { "黄金の王冠": 1, "黄金の角": 1 }
  }

];
