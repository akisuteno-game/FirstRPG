skillTree.attack = {
  label: "⚔️ 攻撃",
  color: "#ff4444",
  skills: [

    {
      id: "atk1",
      name: "力の目覚め",
      desc: "ATK +3",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { atk: 3 }
    },

    {
      id: "atk2",
      name: "鋭い刃",
      desc: "ATK +6",
      cost: 2,
      requires: ["atk1"],
      type: "passive",
      effect: { atk: 6 }
    },

    {
      id: "atk3",
      name: "力の奔流",
      desc: "ATK +12",
      cost: 3,
      requires: ["atk2"],
      type: "passive",
      effect: { atk: 12 }
    },

    {
      id: "atk4",
      name: "破壊の拳",
      desc: "ATK +20",
      cost: 4,
      requires: ["atk3"],
      type: "passive",
      effect: { atk: 20 }
    },

    {
      id: "atk5",
      name: "神滅の一撃",
      desc: "ATK +35",
      cost: 5,
      requires: ["atk4"],
      type: "passive",
      effect: { atk: 35 }
    },

    {
      id: "atk6",
      name: "覇王の力",
      desc: "ATK +50、クリダメ +0.5倍",
      cost: 6,
      requires: ["atk5"],
      type: "passive",
      effect: { atk: 50, critMulti: 0.5 }
    },

    {
      id: "atk7",
      name: "滅神の剣",
      desc: "ATK +80",
      cost: 8,
      requires: ["atk6"],
      type: "passive",
      effect: { atk: 80 }
    },

    {
      id: "atk8",
      name: "無双",
      desc: "ATK +120、クリダメ +1.0倍",
      cost: 10,
      requires: ["atk7"],
      type: "passive",
      effect: { atk: 120, critMulti: 1.0 }
    }

  ]
};
