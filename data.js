const enemies = [

  // ─── 転生0回 ───────────────────────────
  {
    id: 0, rebirthRequired: 0, isBoss: false,
    name: "スライム",
    hp: 10, atk: 2, speed: 2500, drop: 5, exp: 3,
    material: "スライムゼリー", rareMaterial: "キングゼリー", rareChance: 0.1,
    img: "img/monsters/slime.png"
  },
  {
    id: 1, rebirthRequired: 0, isBoss: false,
    name: "ゴブリン",
    hp: 20, atk: 3, speed: 2200, drop: 10, exp: 6,
    material: "ゴブリンの牙", rareMaterial: "王族の牙", rareChance: 0.08,
    img: "img/monsters/goblin.png"
  },
  {
    id: 2, rebirthRequired: 0, isBoss: false,
    name: "オーク",
    hp: 30, atk: 4, speed: 2000, drop: 15, exp: 10,
    material: "オークの皮", rareMaterial: "古代の皮", rareChance: 0.07,
    img: "img/monsters/orc.png"
  },
  {
    id: 3, rebirthRequired: 0, isBoss: false,
    name: "ウルフ",
    hp: 25, atk: 5, speed: 1800, drop: 12, exp: 8,
    material: "狼の毛皮", rareMaterial: "銀の牙", rareChance: 0.08,
    img: "img/monsters/wolf.png"
  },
  {
    id: 4, rebirthRequired: 0, isBoss: false,
    name: "スケルトン",
    hp: 35, atk: 6, speed: 1900, drop: 18, exp: 12,
    material: "骨のかけら", rareMaterial: "呪われた骨", rareChance: 0.07,
    img: "img/monsters/skeleton.png"
  },
  {
    id: 5, rebirthRequired: 0, isBoss: false,
    name: "コウモリ",
    hp: 15, atk: 4, speed: 1500, drop: 8, exp: 7,
    material: "コウモリの羽", rareMaterial: "漆黒の羽", rareChance: 0.09,
    img: "img/monsters/bat.png"
  },
  {
    id: 6, rebirthRequired: 0, isBoss: false,
    name: "毒トカゲ",
    hp: 28, atk: 5, speed: 1700, drop: 14, exp: 9,
    material: "毒の鱗", rareMaterial: "猛毒の結晶", rareChance: 0.08,
    img: "img/monsters/poisonLizard.png"
  },
  {
    id: 7, rebirthRequired: 0, isBoss: false,
    name: "ゾンビ",
    hp: 45, atk: 4, speed: 2800, drop: 16, exp: 11,
    material: "腐った肉", rareMaterial: "呪いの心臓", rareChance: 0.06,
    img: "img/monsters/zombie.png"
  },
  {
    id: 8, rebirthRequired: 0, isBoss: false,
    name: "ドラゴン",
    hp: 50, atk: 6, speed: 1500, drop: 30, exp: 20,
    material: "竜のウロコ", rareMaterial: "紅竜の心臓", rareChance: 0.05,
    img: "img/monsters/dragon.png"
  },
  {
    id: 9, rebirthRequired: 0, isBoss: true,
    name: "【BOSS】ゴブリンキング",
    hp: 150, atk: 10, speed: 1800, drop: 80, exp: 50,
    material: "王の印章", rareMaterial: "黄金の王冠", rareChance: 0.15,
    img: "img/monsters/goblinKing.png"
  },

  // ─── 転生1回 ───────────────────────────
  {
    id: 10, rebirthRequired: 1, isBoss: false,
    name: "アイスウルフ",
    hp: 80, atk: 12, speed: 1600, drop: 40, exp: 30,
    material: "氷の毛皮", rareMaterial: "極寒の牙", rareChance: 0.08,
    img: "img/monsters/iceWolf.png"
  },
  {
    id: 11, rebirthRequired: 1, isBoss: false,
    name: "ダークエルフ",
    hp: 70, atk: 15, speed: 1400, drop: 45, exp: 32,
    material: "闇のエルフ耳", rareMaterial: "呪われた弓", rareChance: 0.07,
    img: "img/monsters/darkElf.png"
  },
  {
    id: 12, rebirthRequired: 1, isBoss: false,
    name: "ストーンゴーレム",
    hp: 120, atk: 10, speed: 3000, drop: 35, exp: 28,
    material: "石の欠片", rareMaterial: "魔法石", rareChance: 0.07,
    img: "img/monsters/stoneGolem.png"
  },
  {
    id: 13, rebirthRequired: 1, isBoss: false,
    name: "サイクロプス",
    hp: 100, atk: 14, speed: 2200, drop: 50, exp: 35,
    material: "巨人の目玉", rareMaterial: "魔眼の結晶", rareChance: 0.06,
    img: "img/monsters/cyclops.png"
  },
  {
    id: 14, rebirthRequired: 1, isBoss: false,
    name: "ハーピー",
    hp: 65, atk: 13, speed: 1300, drop: 42, exp: 31,
    material: "ハーピーの羽", rareMaterial: "嵐の羽根", rareChance: 0.08,
    img: "img/monsters/harpy.png"
  },
  {
    id: 15, rebirthRequired: 1, isBoss: false,
    name: "マミー",
    hp: 90, atk: 11, speed: 2400, drop: 38, exp: 29,
    material: "包帯の切れ端", rareMaterial: "呪いの包帯", rareChance: 0.07,
    img: "img/monsters/mummy.png"
  },
  {
    id: 16, rebirthRequired: 1, isBoss: false,
    name: "フレイムインプ",
    hp: 60, atk: 16, speed: 1200, drop: 48, exp: 34,
    material: "炎の結晶", rareMaterial: "業火の核", rareChance: 0.07,
    img: "img/monsters/flameImp.png"
  },
  {
    id: 17, rebirthRequired: 1, isBoss: false,
    name: "アンデッドナイト",
    hp: 110, atk: 13, speed: 1900, drop: 44, exp: 33,
    material: "錆びた鎧", rareMaterial: "呪いの剣", rareChance: 0.06,
    img: "img/monsters/undeadKnight.png"
  },
  {
    id: 18, rebirthRequired: 1, isBoss: false,
    name: "シーサーペント",
    hp: 95, atk: 15, speed: 1700, drop: 52, exp: 36,
    material: "海蛇の鱗", rareMaterial: "深海の宝石", rareChance: 0.06,
    img: "img/monsters/seaSerpent.png"
  },
  {
    id: 19, rebirthRequired: 1, isBoss: true,
    name: "【BOSS】フロストドラゴン",
    hp: 400, atk: 25, speed: 1600, drop: 200, exp: 120,
    material: "氷竜のウロコ", rareMaterial: "氷竜の心臓", rareChance: 0.12,
    img: "img/monsters/frostDragon.png"
  },

  // ─── 転生2回 ───────────────────────────
  {
    id: 20, rebirthRequired: 2, isBoss: false,
    name: "ダークナイト",
    hp: 200, atk: 28, speed: 1800, drop: 90, exp: 60,
    material: "闇の鎧片", rareMaterial: "闇の剣", rareChance: 0.07,
    img: "img/monsters/darkKnight.png"
  },
  {
    id: 21, rebirthRequired: 2, isBoss: false,
    name: "バジリスク",
    hp: 180, atk: 30, speed: 1600, drop: 95, exp: 62,
    material: "石化の鱗", rareMaterial: "石化の瞳", rareChance: 0.07,
    img: "img/monsters/basilisk.png"
  },
  {
    id: 22, rebirthRequired: 2, isBoss: false,
    name: "ワーウルフ",
    hp: 160, atk: 32, speed: 1400, drop: 100, exp: 65,
    material: "獣人の爪", rareMaterial: "月の牙", rareChance: 0.07,
    img: "img/monsters/werewolf.png"
  },
  {
    id: 23, rebirthRequired: 2, isBoss: false,
    name: "スペクター",
    hp: 140, atk: 35, speed: 1300, drop: 105, exp: 68,
    material: "幽霊の布", rareMaterial: "魂の結晶", rareChance: 0.06,
    img: "img/monsters/specter.png"
  },
  {
    id: 24, rebirthRequired: 2, isBoss: false,
    name: "サラマンダー",
    hp: 190, atk: 29, speed: 1700, drop: 92, exp: 61,
    material: "炎の皮", rareMaterial: "炎帝の核", rareChance: 0.06,
    img: "img/monsters/salamander.png"
  },
  {
    id: 25, rebirthRequired: 2, isBoss: false,
    name: "ミノタウロス",
    hp: 220, atk: 27, speed: 2000, drop: 88, exp: 59,
    material: "牛の角", rareMaterial: "黄金の角", rareChance: 0.06,
    img: "img/monsters/minotaur.png"
  },
  {
    id: 26, rebirthRequired: 2, isBoss: false,
    name: "メデューサ",
    hp: 170, atk: 33, speed: 1500, drop: 98, exp: 64,
    material: "蛇の髪", rareMaterial: "石化の眼", rareChance: 0.06,
    img: "img/monsters/medusa.png"
  },
  {
    id: 27, rebirthRequired: 2, isBoss: false,
    name: "ヴァンパイア",
    hp: 155, atk: 36, speed: 1350, drop: 108, exp: 70,
    material: "吸血鬼の牙", rareMaterial: "血の宝石", rareChance: 0.06,
    img: "img/monsters/vampire.png"
  },
  {
    id: 28, rebirthRequired: 2, isBoss: false,
    name: "アイアンゴーレム",
    hp: 300, atk: 24, speed: 2800, drop: 85, exp: 57,
    material: "鉄の欠片", rareMaterial: "魔鉄の核", rareChance: 0.05,
    img: "img/monsters/ironGolem.png"
  },
  {
    id: 29, rebirthRequired: 2, isBoss: true,
    name: "【BOSS】サンダーフェニックス",
    hp: 800, atk: 45, speed: 1400, drop: 400, exp: 250,
    material: "雷鳥の羽", rareMaterial: "不死鳥の核", rareChance: 0.12,
    img: "img/monsters/thunderPhoenix.png"
  },

  // ─── 転生3回 ───────────────────────────
  {
    id: 30, rebirthRequired: 3, isBoss: false,
    name: "シャドウアサシン",
    hp: 350, atk: 55, speed: 1100, drop: 160, exp: 100,
    material: "影の短剣", rareMaterial: "虚無の刃", rareChance: 0.07,
    img: "img/monsters/shadowAssassin.png"
  },
  {
    id: 31, rebirthRequired: 3, isBoss: false,
    name: "デーモンロード",
    hp: 400, atk: 50, speed: 1300, drop: 170, exp: 105,
    material: "悪魔の角", rareMaterial: "魔王の核", rareChance: 0.06,
    img: "img/monsters/demonLord.png"
  },
  {
    id: 32, rebirthRequired: 3, isBoss: false,
    name: "クリスタルドラゴン",
    hp: 450, atk: 48, speed: 1400, drop: 165, exp: 102,
    material: "水晶の鱗", rareMaterial: "虹色の結晶", rareChance: 0.06,
    img: "img/monsters/crystalDragon.png"
  },
  {
    id: 33, rebirthRequired: 3, isBoss: false,
    name: "タイタン",
    hp: 500, atk: 45, speed: 1600, drop: 155, exp: 98,
    material: "巨神の骨", rareMaterial: "神話の石", rareChance: 0.05,
    img: "img/monsters/titan.png"
  },
  {
    id: 34, rebirthRequired: 3, isBoss: false,
    name: "ブラックウィッチ",
    hp: 320, atk: 58, speed: 1200, drop: 175, exp: 108,
    material: "魔女の杖", rareMaterial: "禁忌の魔書", rareChance: 0.06,
    img: "img/monsters/blackWitch.png"
  },
  {
    id: 35, rebirthRequired: 3, isBoss: false,
    name: "リッチ",
    hp: 380, atk: 52, speed: 1350, drop: 168, exp: 104,
    material: "死霊の指", rareMaterial: "魂の宝珠", rareChance: 0.06,
    img: "img/monsters/lich.png"
  },
  {
    id: 36, rebirthRequired: 3, isBoss: false,
    name: "ケルベロス",
    hp: 420, atk: 49, speed: 1250, drop: 162, exp: 101,
    material: "地獄犬の牙", rareMaterial: "冥府の炎", rareChance: 0.06,
    img: "img/monsters/cerberus.png"
  },
  {
    id: 37, rebirthRequired: 3, isBoss: false,
    name: "グリフィン",
    hp: 360, atk: 54, speed: 1150, drop: 172, exp: 106,
    material: "グリフィンの羽", rareMaterial: "聖なる羽根", rareChance: 0.06,
    img: "img/monsters/griffin.png"
  },
  {
    id: 38, rebirthRequired: 3, isBoss: false,
    name: "ネクロマンサー",
    hp: 310, atk: 60, speed: 1100, drop: 178, exp: 110,
    material: "死霊術の書", rareMaterial: "禁断の魔法陣", rareChance: 0.05,
    img: "img/monsters/necromancer.png"
  },
  {
    id: 39, rebirthRequired: 3, isBoss: true,
    name: "【BOSS】魔神王バアル",
    hp: 1500, atk: 80, speed: 1300, drop: 800, exp: 500,
    material: "魔神の核", rareMaterial: "魔神の心臓", rareChance: 0.12,
    img: "img/monsters/baal.png"
  },

  // ─── 転生4回 ───────────────────────────
  {
    id: 40, rebirthRequired: 4, isBoss: false,
    name: "カオスドラゴン",
    hp: 800, atk: 100, speed: 1200, drop: 300, exp: 180,
    material: "混沌の鱗", rareMaterial: "混沌の核", rareChance: 0.06,
    img: "img/monsters/chaosDragon.png"
  },
  {
    id: 41, rebirthRequired: 4, isBoss: false,
    name: "ヴォイドウォーカー",
    hp: 700, atk: 110, speed: 1100, drop: 320, exp: 190,
    material: "虚無の欠片", rareMaterial: "虚空の結晶", rareChance: 0.06,
    img: "img/monsters/voidWalker.png"
  },
  {
    id: 42, rebirthRequired: 4, isBoss: false,
    name: "ソウルイーター",
    hp: 650, atk: 115, speed: 1050, drop: 330, exp: 195,
    material: "魂の破片", rareMaterial: "魂喰いの宝珠", rareChance: 0.06,
    img: "img/monsters/soulEater.png"
  },
  {
    id: 43, rebirthRequired: 4, isBoss: false,
    name: "ワールドサーペント",
    hp: 900, atk: 95, speed: 1300, drop: 290, exp: 175,
    material: "世界蛇の鱗", rareMaterial: "神代の牙", rareChance: 0.05,
    img: "img/monsters/worldSerpent.png"
  },
  {
    id: 44, rebirthRequired: 4, isBoss: false,
    name: "フォールンエンジェル",
    hp: 750, atk: 105, speed: 1150, drop: 310, exp: 185,
    material: "堕天使の羽", rareMaterial: "聖なる涙", rareChance: 0.06,
    img: "img/monsters/fallenAngel.png"
  },
  {
    id: 45, rebirthRequired: 4, isBoss: false,
    name: "タイムリーパー",
    hp: 600, atk: 120, speed: 1000, drop: 340, exp: 200,
    material: "時の砂", rareMaterial: "時空の結晶", rareChance: 0.05,
    img: "img/monsters/timeReaper.png"
  },
  {
    id: 46, rebirthRequired: 4, isBoss: false,
    name: "エルダーリッチ",
    hp: 850, atk: 98, speed: 1250, drop: 295, exp: 178,
    material: "古代の呪符", rareMaterial: "封印の宝珠", rareChance: 0.05,
    img: "img/monsters/elderLich.png"
  },
  {
    id: 47, rebirthRequired: 4, isBoss: false,
    name: "デモニックゴーレム",
    hp: 1000, atk: 90, speed: 1400, drop: 280, exp: 170,
    material: "魔鋼の欠片", rareMaterial: "悪魔の核", rareChance: 0.05,
    img: "img/monsters/demonicGolem.png"
  },
  {
    id: 48, rebirthRequired: 4, isBoss: false,
    name: "アビスロード",
    hp: 780, atk: 108, speed: 1100, drop: 325, exp: 192,
    material: "深淵の結晶", rareMaterial: "奈落の核", rareChance: 0.05,
    img: "img/monsters/abyssLord.png"
  },
  {
    id: 49, rebirthRequired: 4, isBoss: true,
    name: "【BOSS】神滅龍アポカリプス",
    hp: 5000, atk: 150, speed: 1100, drop: 2000, exp: 1200,
    material: "神滅の鱗", rareMaterial: "神滅龍の心臓", rareChance: 0.15,
    img: "img/monsters/apocalypse.png"
  }

];
