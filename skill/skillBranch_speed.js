skillTree.speed = {
  label: "⚡ 速度",
  color: "#ffee44",
  skills: [

    {
      id: "spd1",
      name: "素早い手",
      desc: "攻撃速度 -100ms",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { attackSpeed: -100 }
    },

    {
      id: "spd2",
      name: "風の動き",
      desc: "攻撃速度 -200ms",
      cost: 2,
      requires: ["spd1"],
      type: "passive",
      effect: { attackSpeed: -200 }
    },

    {
      id: "spd3",
      name: "疾風の剣",
      desc: "攻撃速度 -300ms",
      cost: 3,
      requires: ["spd2"],
      type: "passive",
      effect: { attackSpeed: -300 }
    },

    {
      id: "spd4",
      name: "光速の斬撃",
      desc: "攻撃速度 -400ms",
      cost: 4,
      requires: ["spd3"],
      type: "passive",
      effect: { attackSpeed: -400 }
    },

    {
      id: "spd5",
      name: "瞬間移動",
      desc: "攻撃速度 -500ms",
      cost: 5,
      requires: ["spd4"],
      type: "passive",
      effect: { attackSpeed: -500 }
    },

    {
      id: "spd6",
      name: "時間操作",
      desc: "攻撃速度 -600ms",
      cost: 7,
      requires: ["spd5"],
      type: "passive",
      effect: { attackSpeed: -600 }
    }

  ]
};
