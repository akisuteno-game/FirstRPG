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
