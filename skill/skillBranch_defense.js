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
