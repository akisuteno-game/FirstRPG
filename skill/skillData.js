// スキルツリー全データ
// requires: なしの場合は最初から取れる
// type: passive（常時効果）/ active（バトルで使用）

const skillTree = {

  // ─── 攻撃系 ───────────────────────────
  attack: {
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
      }

    ]
  },

  // ─── 防御系 ───────────────────────────
  defense: {
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
      }

    ]
  },

  // ─── 速度系 ───────────────────────────
  speed: {
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
      }

    ]
  },

  // ─── クリティカル系 ───────────────────
  critical: {
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
      }

    ]
  },

  // ─── 特殊系 ───────────────────────────
  special: {
    label: "✨ 特殊",
    color: "#aa44ff",
    skills: [

      {
        id: "spc1",
        name: "幸運の加護",
        desc: "レア素材ドロップ率 +5%",
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
        desc: "レア素材ドロップ率 +10%",
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
        desc: "レア素材ドロップ率 +20%",
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
  }

};


// スキルIDからスキルデータを取得
function getSkillById(id){
  for(const branch of Object.values(skillTree)){
    for(const skill of branch.skills){
      if(skill.id === id){ return skill; }
    }
  }
  return null;
}
