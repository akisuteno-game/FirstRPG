const enemies = [

  // ─── 転生0回（プレイヤー初期ATK5、HP30） ───
  // 敵を倒すのに5〜15発、プレイヤーが受けるダメージも段階的に
  {
    id: 0, rebirthRequired: 0, isBoss: false,
    name: "スライム",
    hp: 12, atk: 1, speed: 3000, drop: 5, exp: 3,
    material: "スライムゼリー", rareMaterial: "キングゼリー", rareChance: 0.1,
    img: "img/monsters/slime.png"
  },
  {
    id: 1, rebirthRequired: 0, isBoss: false,
    name: "コウモリ",
    hp: 18, atk: 2, speed: 2800, drop: 7, exp: 4,
    material: "コウモリの羽", rareMaterial: "漆黒の羽", rareChance: 0.09,
    img: "img/monsters/bat.png"
  },
  {
    id: 2, rebirthRequired: 0, isBoss: false,
    name: "ゴブリン",
    hp: 25, atk: 2, speed: 2500, drop: 10, exp: 6,
    material: "ゴブリンの牙", rareMaterial: "王族の牙", rareChance: 0.08,
    img: "img/monsters/goblin.png"
  },
  {
    id: 3, rebirthRequired: 0, isBoss: false,
    name: "ウルフ",
    hp: 32, atk: 3, speed: 2200, drop: 12, exp: 8,
    material: "狼の毛皮", rareMaterial: "銀の牙", rareChance: 0.08,
    img: "img/monsters/wolf.png"
  },
  {
    id: 4, rebirthRequired: 0, isBoss: false,
    name: "毒トカゲ",
    hp: 40, atk: 3, speed: 2100, drop: 14, exp: 9,
    material: "毒の鱗", rareMaterial: "猛毒の結晶", rareChance: 0.08,
    img: "img/monsters/poisonLizard.png"
  },
  {
    id: 5, rebirthRequired: 0, isBoss: false,
    name: "スケルトン",
    hp: 50, atk: 4, speed: 2000, drop: 16, exp: 11,
    material: "骨のかけら", rareMaterial: "呪われた骨", rareChance: 0.07,
    img: "img/monsters/skeleton.png"
  },
  {
    id: 6, rebirthRequired: 0, isBoss: false,
    name: "ゾンビ",
    hp: 62, atk: 4, speed: 2800, drop: 18, exp: 12,
    material: "腐った肉", rareMaterial: "呪いの心臓", rareChance: 0.06,
    img: "img/monsters/zombie.png"
  },
  {
    id: 7, rebirthRequired: 0, isBoss: false,
    name: "オーク",
    hp: 78, atk: 5, speed: 2200, drop: 20, exp: 14,
    material: "オークの皮", rareMaterial: "古代の皮", rareChance: 0.07,
    img: "img/monsters/orc.png"
  },
  {
    id: 8, rebirthRequired: 0, isBoss: false,
    name: "ドラゴン",
    hp: 100, atk: 6, speed: 1800, drop: 30, exp: 20,
    material: "竜のウロコ", rareMaterial: "紅竜の心臓", rareChance: 0.05,
    img: "img/monsters/dragon.png"
  },
  {
    id: 9, rebirthRequired: 0, isBoss: true,
    name: "ゴブリンキング",
    hp: 200, atk: 8, speed: 1800, drop: 80, exp: 50,
    material: "王の印章", rareMaterial: "黄金の王冠", rareChance: 0.15,
    img: "img/monsters/goblinKing.png"
  },

  // ─── 転生1回 ───
  {
    id: 10, rebirthRequired: 1, isBoss: false,
    name: "アイスウルフ",
    hp: 150, atk: 12, speed: 2000, drop: 40, exp: 28,
    material: "氷の毛皮", rareMaterial: "極寒の牙", rareChance: 0.08,
    img: "img/monsters/iceWolf.png"
  },
  {
    id: 11, rebirthRequired: 1, isBoss: false,
    name: "マミー",
    hp: 180, atk: 13, speed: 2400, drop: 44, exp: 30,
    material: "包帯の切れ端", rareMaterial: "呪いの包帯", rareChance: 0.07,
    img: "img/monsters/mummy.png"
  },
  {
    id: 12, rebirthRequired: 1, isBoss: false,
    name: "ハーピー",
    hp: 200, atk: 14, speed: 1800, drop: 48, exp: 32,
    material: "ハーピーの羽", rareMaterial: "嵐の羽根", rareChance: 0.08,
    img: "img/monsters/harpy.png"
  },
  {
    id: 13, rebirthRequired: 1, isBoss: false,
    name: "ダークエルフ",
    hp: 220, atk: 15, speed: 1700, drop: 52, exp: 35,
    material: "闇のエルフ耳", rareMaterial: "呪われた弓", rareChance: 0.07,
    img: "img/monsters/darkElf.png"
  },
  {
    id: 14, rebirthRequired: 1, isBoss: false,
    name: "フレイムインプ",
    hp: 240, atk: 16, speed: 1600, drop: 56, exp: 38,
    material: "炎の結晶", rareMaterial: "業火の核", rareChance: 0.07,
    img: "img/monsters/flameImp.png"
  },
  {
    id: 15, rebirthRequired: 1, isBoss: false,
    name: "サイクロプス",
    hp: 270, atk: 16, speed: 2000, drop: 58, exp: 40,
    material: "巨人の目玉", rareMaterial: "魔眼の結晶", rareChance: 0.06,
    img: "img/monsters/cyclops.png"
  },
  {
    id: 16, rebirthRequired: 1, isBoss: false,
    name: "ストーンゴーレム",
    hp: 310, atk: 15, speed: 2800, drop: 55, exp: 38,
    material: "石の欠片", rareMaterial: "魔法石", rareChance: 0.07,
    img: "img/monsters/stoneGolem.png"
  },
  {
    id: 17, rebirthRequired: 1, isBoss: false,
    name: "アンデッドナイト",
    hp: 340, atk: 17, speed: 1900, drop: 62, exp: 42,
    material: "錆びた鎧", rareMaterial: "呪いの剣", rareChance: 0.06,
    img: "img/monsters/undeadKnight.png"
  },
  {
    id: 18, rebirthRequired: 1, isBoss: false,
    name: "シーサーペント",
    hp: 380, atk: 18, speed: 1700, drop: 68, exp: 46,
    material: "海蛇の鱗", rareMaterial: "深海の宝石", rareChance: 0.06,
    img: "img/monsters/seaSerpent.png"
  },
  {
    id: 19, rebirthRequired: 1, isBoss: true,
    name: "フロストドラゴン",
    hp: 800, atk: 22, speed: 1800, drop: 200, exp: 120,
    material: "氷竜のウロコ", rareMaterial: "氷竜の心臓", rareChance: 0.12,
    img: "img/monsters/frostDragon.png"
  },

  // ─── 転生2回 ───
  {
    id: 20, rebirthRequired: 2, isBoss: false,
    name: "ヴァンパイア",
    hp: 500, atk: 28, speed: 1800, drop: 90, exp: 60,
    material: "吸血鬼の牙", rareMaterial: "血の宝石", rareChance: 0.07,
    img: "img/monsters/vampire.png"
  },
  {
    id: 21, rebirthRequired: 2, isBoss: false,
    name: "サラマンダー",
    hp: 560, atk: 30, speed: 1700, drop: 95, exp: 63,
    material: "炎の皮", rareMaterial: "炎帝の核", rareChance: 0.06,
    img: "img/monsters/salamander.png"
  },
  {
    id: 22, rebirthRequired: 2, isBoss: false,
    name: "スペクター",
    hp: 620, atk: 32, speed: 1600, drop: 100, exp: 66,
    material: "幽霊の布", rareMaterial: "魂の結晶", rareChance: 0.06,
    img: "img/monsters/specter.png"
  },
  {
    id: 23, rebirthRequired: 2, isBoss: false,
    name: "バジリスク",
    hp: 690, atk: 33, speed: 1700, drop: 105, exp: 70,
    material: "石化の鱗", rareMaterial: "石化の瞳", rareChance: 0.07,
    img: "img/monsters/basilisk.png"
  },
  {
    id: 24, rebirthRequired: 2, isBoss: false,
    name: "ワーウルフ",
    hp: 760, atk: 35, speed: 1500, drop: 110, exp: 73,
    material: "獣人の爪", rareMaterial: "月の牙", rareChance: 0.07,
    img: "img/monsters/werewolf.png"
  },
  {
    id: 25, rebirthRequired: 2, isBoss: false,
    name: "ミノタウロス",
    hp: 840, atk: 36, speed: 1900, drop: 115, exp: 76,
    material: "牛の角", rareMaterial: "黄金の角", rareChance: 0.06,
    img: "img/monsters/minotaur.png"
  },
  {
    id: 26, rebirthRequired: 2, isBoss: false,
    name: "メデューサ",
    hp: 920, atk: 38, speed: 1600, drop: 120, exp: 80,
    material: "蛇の髪", rareMaterial: "石化の眼", rareChance: 0.06,
    img: "img/monsters/medusa.png"
  },
  {
    id: 27, rebirthRequired: 2, isBoss: false,
    name: "ダークナイト",
    hp: 1000, atk: 40, speed: 1800, drop: 125, exp: 84,
    material: "闇の鎧片", rareMaterial: "闇の剣", rareChance: 0.07,
    img: "img/monsters/darkKnight.png"
  },
  {
    id: 28, rebirthRequired: 2, isBoss: false,
    name: "アイアンゴーレム",
    hp: 1200, atk: 38, speed: 2600, drop: 120, exp: 82,
    material: "鉄の欠片", rareMaterial: "魔鉄の核", rareChance: 0.05,
    img: "img/monsters/ironGolem.png"
  },
  {
    id: 29, rebirthRequired: 2, isBoss: true,
    name: "サンダーフェニックス",
    hp: 2500, atk: 55, speed: 1500, drop: 500, exp: 300,
    material: "雷鳥の羽", rareMaterial: "不死鳥の核", rareChance: 0.12,
    img: "img/monsters/thunderPhoenix.png"
  },

  // ─── 転生3回 ───
  {
    id: 30, rebirthRequired: 3, isBoss: false,
    name: "リッチ",
    hp: 1500, atk: 55, speed: 1800, drop: 160, exp: 105,
    material: "死霊の指", rareMaterial: "魂の宝珠", rareChance: 0.06,
    img: "img/monsters/lich.png"
  },
  {
    id: 31, rebirthRequired: 3, isBoss: false,
    name: "グリフィン",
    hp: 1700, atk: 58, speed: 1600, drop: 168, exp: 110,
    material: "グリフィンの羽", rareMaterial: "聖なる羽根", rareChance: 0.06,
    img: "img/monsters/griffin.png"
  },
  {
    id: 32, rebirthRequired: 3, isBoss: false,
    name: "ケルベロス",
    hp: 1900, atk: 60, speed: 1500, drop: 175, exp: 115,
    material: "地獄犬の牙", rareMaterial: "冥府の炎", rareChance: 0.06,
    img: "img/monsters/cerberus.png"
  },
  {
    id: 33, rebirthRequired: 3, isBoss: false,
    name: "クリスタルドラゴン",
    hp: 2100, atk: 62, speed: 1600, drop: 182, exp: 120,
    material: "水晶の鱗", rareMaterial: "虹色の結晶", rareChance: 0.06,
    img: "img/monsters/crystalDragon.png"
  },
  {
    id: 34, rebirthRequired: 3, isBoss: false,
    name: "シャドウアサシン",
    hp: 2000, atk: 65, speed: 1300, drop: 185, exp: 122,
    material: "影の短剣", rareMaterial: "虚無の刃", rareChance: 0.07,
    img: "img/monsters/shadowAssassin.png"
  },
  {
    id: 35, rebirthRequired: 3, isBoss: false,
    name: "タイタン",
    hp: 2400, atk: 63, speed: 1900, drop: 188, exp: 125,
    material: "巨神の骨", rareMaterial: "神話の石", rareChance: 0.05,
    img: "img/monsters/titan.png"
  },
  {
    id: 36, rebirthRequired: 3, isBoss: false,
    name: "ネクロマンサー",
    hp: 2200, atk: 68, speed: 1400, drop: 192, exp: 128,
    material: "死霊術の書", rareMaterial: "禁断の魔法陣", rareChance: 0.05,
    img: "img/monsters/necromancer.png"
  },
  {
    id: 37, rebirthRequired: 3, isBoss: false,
    name: "ブラックウィッチ",
    hp: 2100, atk: 70, speed: 1350, drop: 196, exp: 130,
    material: "魔女の杖", rareMaterial: "禁忌の魔書", rareChance: 0.06,
    img: "img/monsters/blackWitch.png"
  },
  {
    id: 38, rebirthRequired: 3, isBoss: false,
    name: "デーモンロード",
    hp: 2600, atk: 72, speed: 1500, drop: 200, exp: 135,
    material: "悪魔の角", rareMaterial: "魔王の核", rareChance: 0.06,
    img: "img/monsters/demonLord.png"
  },
  {
    id: 39, rebirthRequired: 3, isBoss: true,
    name: "魔神王バアル",
    hp: 6000, atk: 90, speed: 1400, drop: 1000, exp: 600,
    material: "魔神の核", rareMaterial: "魔神の心臓", rareChance: 0.12,
    img: "img/monsters/baal.png"
  },

  // ─── 転生4回 ───
  {
    id: 40, rebirthRequired: 4, isBoss: false,
    name: "ヴォイドウォーカー",
    hp: 4000, atk: 100, speed: 1600, drop: 300, exp: 200,
    material: "虚無の欠片", rareMaterial: "虚空の結晶", rareChance: 0.06,
    img: "img/monsters/voidWalker.png"
  },
  {
    id: 41, rebirthRequired: 4, isBoss: false,
    name: "フォールンエンジェル",
    hp: 4400, atk: 105, speed: 1500, drop: 315, exp: 210,
    material: "堕天使の羽", rareMaterial: "聖なる涙", rareChance: 0.06,
    img: "img/monsters/fallenAngel.png"
  },
  {
    id: 42, rebirthRequired: 4, isBoss: false,
    name: "ソウルイーター",
    hp: 4800, atk: 110, speed: 1400, drop: 330, exp: 220,
    material: "魂の破片", rareMaterial: "魂喰いの宝珠", rareChance: 0.06,
    img: "img/monsters/soulEater.png"
  },
  {
    id: 43, rebirthRequired: 4, isBoss: false,
    name: "カオスドラゴン",
    hp: 5200, atk: 112, speed: 1500, drop: 345, exp: 230,
    material: "混沌の鱗", rareMaterial: "混沌の核", rareChance: 0.06,
    img: "img/monsters/chaosDragon.png"
  },
  {
    id: 44, rebirthRequired: 4, isBoss: false,
    name: "エルダーリッチ",
    hp: 5600, atk: 115, speed: 1450, drop: 360, exp: 240,
    material: "古代の呪符", rareMaterial: "封印の宝珠", rareChance: 0.05,
    img: "img/monsters/elderLich.png"
  },
  {
    id: 45, rebirthRequired: 4, isBoss: false,
    name: "タイムリーパー",
    hp: 5400, atk: 118, speed: 1300, drop: 370, exp: 245,
    material: "時の砂", rareMaterial: "時空の結晶", rareChance: 0.05,
    img: "img/monsters/timeReaper.png"
  },
  {
    id: 46, rebirthRequired: 4, isBoss: false,
    name: "ワールドサーペント",
    hp: 6000, atk: 112, speed: 1600, drop: 355, exp: 237,
    material: "世界蛇の鱗", rareMaterial: "神代の牙", rareChance: 0.05,
    img: "img/monsters/worldSerpent.png"
  },
  {
    id: 47, rebirthRequired: 4, isBoss: false,
    name: "デモニックゴーレム",
    hp: 7000, atk: 108, speed: 1800, drop: 340, exp: 228,
    material: "魔鋼の欠片", rareMaterial: "悪魔の核", rareChance: 0.05,
    img: "img/monsters/demonicGolem.png"
  },
  {
    id: 48, rebirthRequired: 4, isBoss: false,
    name: "アビスロード",
    hp: 7500, atk: 120, speed: 1400, drop: 380, exp: 255,
    material: "深淵の結晶", rareMaterial: "奈落の核", rareChance: 0.05,
    img: "img/monsters/abyssLord.png"
  },
  {
    id: 49, rebirthRequired: 4, isBoss: true,
    name: "神滅龍アポカリプス",
    hp: 20000, atk: 160, speed: 1200, drop: 5000, exp: 3000,
    material: "神滅の鱗", rareMaterial: "神滅龍の心臓", rareChance: 0.15,
    img: "img/monsters/apocalypse.png"
  }

];
