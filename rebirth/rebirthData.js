// 転生に必要なレベル
const REBIRTH_LEVEL = 20;

// 転生ボーナス（転生回数ごと）
const REBIRTH_BONUS = {
  atkPercent: 5,   // ATK +5%
  hpPercent:  5,   // MaxHP +5%
  goldPercent: 3   // GOLD取得 +3%
};

// 転生称号
const REBIRTH_TITLES = [
  "初心者",
  "冒険者",
  "勇者",
  "英雄",
  "伝説",
  "神話",
  "覚醒者",
  "超越者",
  "神",
  "???",
];

function getRebirthTitle(count){
  return REBIRTH_TITLES[
    Math.min(count, REBIRTH_TITLES.length - 1)
  ];
}
