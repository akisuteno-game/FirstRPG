skillTree.critical = {
  label: "💥 クリティカル",
  color: "#ff8800",
  skills: [

    {
      id: "crit1",
      name: "鋭い眼光",
      desc: "クリ率 +5%",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { crit: 5 }
    },

    {
      id: "crit2",
      name: "急所狙い",
      desc: "クリ率 +10%",
      cost: 2,
      requires: ["crit1"],
      type: "passive",
      effect: { crit: 10 }
    },

    {
      id: "crit3",
      name: "弱点看破",
      desc: "クリダメ +0.3倍",
      cost: 2,
      requires: ["crit1"],
      type: "passive",
      effect: { critMulti: 0.3 }
    },

    {
      id: "crit4",
      name: "必殺の眼",
      desc: "クリ率 +15%",
      cost: 3,
      requires: ["crit2"],
      type: "passive",
      effect: { crit: 15 }
    },

    {
      id: "crit5",
      name: "死神の一閃",
      desc: "クリダメ +0.5倍",
      cost: 4,
      requires: ["crit3", "crit4"],
      type: "passive",
      effect: { critMulti: 0.5 }
    },

    {
      id: "crit6",
      name: "確定致命傷",
      desc: "クリ率 +20%、クリダメ +1.0倍",
      cost: 6,
      requires: ["crit5"],
      type: "passive",
      effect: { crit: 20, critMulti: 1.0 }
    },

    {
      id: "crit7",
      name: "神眼",
      desc: "クリ率 +25%、クリダメ +1.5倍",
      cost: 8,
      requires: ["crit6"],
      type: "passive",
      effect: { crit: 25, critMulti: 1.5 }
    }

  ]
};
