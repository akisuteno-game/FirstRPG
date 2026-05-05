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
