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
