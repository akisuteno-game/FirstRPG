// 全スキルブランチをまとめるオブジェクト
// 各ブランチは skillBranch_xxx.js で定義して追加される
const skillTree = {};

// スキルIDからスキルデータを取得
function getSkillById(id){
  for(const branch of Object.values(skillTree)){
    for(const skill of branch.skills){
      if(skill.id === id){ return skill; }
    }
  }
  return null;
}
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
// 取得済みスキルを player.skills から確認
function hasSkill(id){
  return !!(player.skills && player.skills[id]);
}

// 前提スキルが全部取得済みか
function requiresMet(skill){
  return skill.requires.every(function(req){
    return hasSkill(req);
  });
}

// スキル取得可能か
function canLearnSkill(skill){
  if(hasSkill(skill.id))       { return false; }
  if(!requiresMet(skill))      { return false; }
  const sp = (player.skillPoints || 0) - (player.usedSkillPoints || 0);
  if(sp < skill.cost)          { return false; }
  return true;
}

// スキルを取得する
function learnSkill(skillId){

  const skill = getSkillById(skillId);

  if(!skill || !canLearnSkill(skill)){ return; }

  if(!player.skills){ player.skills = {}; }

  player.skills[skillId] = true;

  player.usedSkillPoints =
    (player.usedSkillPoints || 0) + skill.cost;

  savePlayer();
  renderPlayer();

  if(typeof renderSkillTab === "function"){
    renderSkillTab();
  }

}

// 全スキル効果をプレイヤーに適用（ロード時・転生後に呼ぶ）
function applyAllSkillEffects(){

  if(!player.skills){ return; }

  Object.keys(player.skills).forEach(function(id){

    const skill = getSkillById(id);

    if(!skill){ return; }

    applySkillEffect(skill.effect);

  });

}

function applySkillEffect(effect){

  if(!effect){ return; }

  if(effect.atk)         { player.atk         += effect.atk;         }
  if(effect.maxHp)       { player.maxHp        += effect.maxHp;
                           player.hp            = Math.min(player.hp + effect.maxHp, player.maxHp); }
  if(effect.attackSpeed) { player.attackSpeed  += effect.attackSpeed;
                           if(player.attackSpeed < 300){ player.attackSpeed = 300; } }
  if(effect.crit)        { player.crit         += effect.crit;
                           if(player.crit > 95){ player.crit = 95; } }
  if(effect.critMulti)   { player.critMulti    += effect.critMulti;   }

  // goldBonus・rareChance・potionCostHalf・allPercent はバトル/アクション時に参照

}

// 残りスキルポイントを取得
function getFreeSkillPoints(){
  return (player.skillPoints || 0) - (player.usedSkillPoints || 0);
}
let currentSkillBranch = "attack";
let selectedSkillId    = null;

const NODE_W  = 110;
const NODE_H  = 54;
const GAP_X   = 60;
const GAP_Y   = 80;

// ─── スキルツリー描画 ───────────────────────
function renderSkillTab(){

  const tab = document.getElementById("skillTab");
  if(!tab){ return; }

  const freeSp = getFreeSkillPoints();
  const branch = skillTree[currentSkillBranch];

  // ブランチ切り替えボタン
  let branchBtns = "";
  Object.keys(skillTree).forEach(function(key){
    const b      = skillTree[key];
    const active = key === currentSkillBranch
      ? "border-bottom:2px solid white;color:white;"
      : "border-bottom:2px solid #333;color:#888;";
    branchBtns += `
      <button
        onclick="switchSkillBranch('${key}')"
        style="
          min-width:unset;min-height:unset;
          padding:6px 10px;font-size:12px;
          background:#111;border:none;
          ${active}cursor:pointer;white-space:nowrap;
        "
      >${b.label}</button>
    `;
  });

  // SVGツリーを生成
  const svgResult = buildTreeSVG(branch);

  // 詳細パネル
  const detail = buildDetailPanel(branch);

  tab.innerHTML = `
    <div style="
      display:flex;flex-direction:column;
      height:100%;color:white;background:#0d0d0d;
    ">

      <!-- タブバー -->
      <div style="
        display:flex;overflow-x:auto;
        background:#111;border-bottom:1px solid #333;
        flex-shrink:0;
      ">
        ${branchBtns}
        <span style="
          margin-left:auto;padding:6px 12px;
          color:gold;font-size:12px;white-space:nowrap;
        ">残りSP: ${freeSp}</span>
      </div>

      <!-- SVGエリア（横スクロール） -->
      <div style="
        flex:1;overflow:auto;
        position:relative;min-height:0;
      ">
        <div id="skillSvgWrap" style="display:inline-block;padding:20px;">
          ${svgResult.svg}
        </div>
      </div>

      <!-- 詳細パネル -->
      <div id="skillDetailPanel" style="
        flex-shrink:0;border-top:2px solid #333;
        background:#111;padding:10px 14px;
        min-height:90px;font-size:13px;
      ">
        ${detail}
      </div>

    </div>
  `;

}

// ─── ノード配置計算 ───────────────────────────
function buildTreeSVG(branch){

  const skills  = branch.skills;
  const color   = branch.color;

  // 各スキルの列（depth）を計算
  function getDepth(skill, memo){
    if(memo[skill.id] !== undefined){ return memo[skill.id]; }
    if(skill.requires.length === 0){
      memo[skill.id] = 0;
      return 0;
    }
    const maxParentDepth = Math.max.apply(null,
      skill.requires.map(function(rid){
        const parent = skills.find(function(s){ return s.id === rid; });
        return parent ? getDepth(parent, memo) : 0;
      })
    );
    memo[skill.id] = maxParentDepth + 1;
    return memo[skill.id];
  }

  const depthMemo = {};
  skills.forEach(function(s){ getDepth(s, depthMemo); });

  // 列ごとにスキルをグループ
  const columns = {};
  skills.forEach(function(s){
    const d = depthMemo[s.id];
    if(!columns[d]){ columns[d] = []; }
    columns[d].push(s);
  });

  const maxDepth = Math.max.apply(null, Object.keys(columns).map(Number));

  // 各ノードのXY座標を決定
  const pos = {};
  const colKeys = Object.keys(columns).map(Number).sort(function(a,b){ return a-b; });

  colKeys.forEach(function(col){
    const group = columns[col];
    group.forEach(function(s, i){
      pos[s.id] = {
        x: col * (NODE_W + GAP_X) + 10,
        y: i   * (NODE_H + GAP_Y) + 10
      };
    });
  });

  // SVG全体サイズ
  const svgW = (maxDepth + 1) * (NODE_W + GAP_X) + 20;
  const maxRowCount = Math.max.apply(null,
    Object.values(columns).map(function(g){ return g.length; })
  );
  const svgH = maxRowCount * (NODE_H + GAP_Y) + 20;

  // エッジ（線）を描画
  let edges = "";
  skills.forEach(function(s){
    s.requires.forEach(function(rid){
      if(!pos[rid] || !pos[s.id]){ return; }
      const px = pos[rid].x + NODE_W;
      const py = pos[rid].y + NODE_H / 2;
      const cx = pos[s.id].x;
      const cy = pos[s.id].y + NODE_H / 2;
      const learned = hasSkill(s.id) && hasSkill(rid);
      const lineColor = learned ? color : "#444";
      const mx = (px + cx) / 2;
      edges += `
        <path
          d="M${px},${py} C${mx},${py} ${mx},${cy} ${cx},${cy}"
          stroke="${lineColor}" stroke-width="2"
          fill="none" stroke-dasharray="${learned ? "none" : "6,4"}"
        />
      `;
    });
  });

  // ノードを描画
  let nodes = "";
  skills.forEach(function(s){
    const p        = pos[s.id];
    const learned  = hasSkill(s.id);
    const available= canLearnSkill(s);
    const selected = s.id === selectedSkillId;

    let fill    = "#1a1a1a";
    let stroke  = "#444";
    let opacity = 1;

    if(learned){
      fill   = "#0d2b0d";
      stroke = "lime";
    } else if(available){
      fill   = "#1a1a2e";
      stroke = color;
    } else if(!requiresMet(s)){
      opacity = 0.4;
    }

    if(selected){
      stroke = "white";
    }

    // テキストを折り返す（最大10文字で折り返し）
    const nameLines = wrapText(s.name, 9);

    let nameText = "";
    const lineH  = 14;
    const startY = p.y + NODE_H / 2 - (nameLines.length - 1) * lineH / 2 - 6;

    nameLines.forEach(function(line, li){
      nameText += `
        <text
          x="${p.x + NODE_W / 2}"
          y="${startY + li * lineH}"
          text-anchor="middle"
          font-size="11"
          fill="white"
          font-family="monospace"
        >${line}</text>
      `;
    });

    nodes += `
      <g
        onclick="selectSkillNode('${s.id}')"
        style="cursor:pointer;"
        opacity="${opacity}"
      >
        <rect
          x="${p.x}" y="${p.y}"
          width="${NODE_W}" height="${NODE_H}"
          rx="6" ry="6"
          fill="${fill}" stroke="${stroke}" stroke-width="2"
        />
        ${nameText}
        <text
          x="${p.x + NODE_W - 6}" y="${p.y + NODE_H - 5}"
          text-anchor="end" font-size="10"
          fill="${learned ? "lime" : "#aaa"}"
          font-family="monospace"
        >${learned ? "✓" : "SP:" + s.cost}</text>
      </g>
    `;

  });

  const svg = `
    <svg
      width="${svgW}" height="${Math.max(svgH, 200)}"
      xmlns="http://www.w3.org/2000/svg"
      style="display:block;"
    >
      ${edges}
      ${nodes}
    </svg>
  `;

  return { svg: svg };

}

// テキスト折り返し
function wrapText(text, maxLen){
  if(text.length <= maxLen){ return [text]; }
  const lines = [];
  for(let i = 0; i < text.length; i += maxLen){
    lines.push(text.slice(i, i + maxLen));
  }
  return lines;
}

// ─── ノードクリック ───────────────────────────
function selectSkillNode(skillId){

  selectedSkillId = skillId;

  const branch = skillTree[currentSkillBranch];
  const detail = buildDetailPanel(branch);

  const panel = document.getElementById("skillDetailPanel");
  if(panel){ panel.innerHTML = detail; }

  // SVGの選択状態を更新
  renderSkillTab();

}

// ─── 詳細パネル ───────────────────────────────
function buildDetailPanel(branch){

  if(!selectedSkillId){
    return `<div style="color:#666;padding:10px;">
      スキルノードをタップすると詳細が表示されます
    </div>`;
  }

  const skill = branch.skills.find(function(s){
    return s.id === selectedSkillId;
  });

  if(!skill){
    return `<div style="color:#666;padding:10px;">
      スキルノードをタップすると詳細が表示されます
    </div>`;
  }

  const learned   = hasSkill(skill.id);
  const available = canLearnSkill(skill);
  const reqMet    = requiresMet(skill);
  const freeSp    = getFreeSkillPoints();

  const reqNames = skill.requires.map(function(id){
    const s = branch.skills.find(function(x){ return x.id === id; });
    return s ? s.name : id;
  }).join("、");

  let btnHtml = "";

  if(learned){
    btnHtml = `<span style="color:lime;">✅ 習得済み</span>`;
  } else if(available){
    btnHtml = `
      <button
        onclick="learnSkill('${skill.id}')"
        style="
          min-width:unset;min-height:unset;
          padding:6px 20px;font-size:14px;
          background:#333;color:white;
          border:1px solid ${branch.color};
        "
      >習得する（SP: ${skill.cost}）</button>
    `;
  } else if(!reqMet){
    btnHtml = `<span style="color:#666;">前提スキルが未習得です</span>`;
  } else {
    btnHtml = `<span style="color:#888;">SPが足りません（必要: ${skill.cost} / 残り: ${freeSp}）</span>`;
  }

  return `
    <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
      <div>
        <div style="font-size:15px;font-weight:bold;color:${branch.color};margin-bottom:4px;">
          ${skill.name}
        </div>
        <div style="color:#ccc;margin-bottom:4px;">${skill.desc}</div>
        ${reqNames
          ? `<div style="font-size:11px;color:#666;">前提: ${reqNames}</div>`
          : ""}
      </div>
      <div style="margin-left:auto;">
        ${btnHtml}
      </div>
    </div>
  `;

}

// ─── ブランチ切り替え ─────────────────────────
function switchSkillBranch(key){
  currentSkillBranch = key;
  selectedSkillId    = null;
  renderSkillTab();
}
