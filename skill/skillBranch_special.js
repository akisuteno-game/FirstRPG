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
