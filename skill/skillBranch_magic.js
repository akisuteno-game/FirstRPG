skillTree.magic = {
  label: "🔮 魔法",
  color: "#44ddff",
  skills: [

    {
      id: "mag1",
      name: "魔力の芽生え",
      desc: "ATK +5（魔力補正）",
      cost: 1,
      requires: [],
      type: "passive",
      effect: { atk: 5 }
    },

    {
      id: "mag2",
      name: "炎の呪文",
      desc: "ATK +10、クリダメ +0.2倍",
      cost: 2,
      requires: ["mag1"],
      type: "passive",
      effect: { atk: 10, critMulti: 0.2 }
    },

    {
      id: "mag3",
      name: "氷結魔法",
      desc: "ATK +15、攻撃速度 -150ms",
      cost: 3,
      requires: ["mag1"],
      type: "passive",
      effect: { atk: 15, attackSpeed: -150 }
    },

    {
      id: "mag4",
      name: "雷撃魔法",
      desc: "ATK +20、クリ率 +8%",
      cost: 4,
      requires: ["mag2"],
      type: "passive",
      effect: { atk: 20, crit: 8 }
    },

    {
      id: "mag5",
      name: "魔法陣展開",
      desc: "ATK +30、MaxHP +30",
      cost: 4,
      requires: ["mag3"],
      type: "passive",
      effect: { atk: 30, maxHp: 30 }
    },

    {
      id: "mag6",
      name: "大魔法",
      desc: "ATK +50、クリダメ +0.5倍",
      cost: 6,
      requires: ["mag4"],
      type: "passive",
      effect: { atk: 50, critMulti: 0.5 }
    },

    {
      id: "mag7",
      name: "禁忌の魔法",
      desc: "ATK +80、クリ率 +15%、クリダメ +0.8倍",
      cost: 8,
      requires: ["mag5", "mag6"],
      type: "passive",
      effect: { atk: 80, crit: 15, critMulti: 0.8 }
    },

    {
      id: "mag8",
      name: "神滅魔法",
      desc: "ATK +150、攻撃速度 -300ms、クリダメ +1.5倍",
      cost: 12,
      requires: ["mag7"],
      type: "passive",
      effect: { atk: 150, attackSpeed: -300, critMulti: 1.5 }
    }

  ]
};
