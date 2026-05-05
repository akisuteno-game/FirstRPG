const materialEmoji = {
  "スライムゼリー": "🟢", "キングゼリー": "💛",
  "ゴブリンの牙": "🦷", "王族の牙": "👑",
  "オークの皮": "🟤", "古代の皮": "📜",
  "竜のウロコ": "🐉", "紅竜の心臓": "❤️",
  "狼の毛皮": "🐺", "銀の牙": "⚪",
  "骨のかけら": "🦴", "呪われた骨": "💀",
  "コウモリの羽": "🦇", "漆黒の羽": "🖤",
  "毒の鱗": "🟩", "猛毒の結晶": "💚",
  "腐った肉": "🍖", "呪いの心臓": "🖤",
  "王の印章": "📛", "黄金の王冠": "👑",
  "氷の毛皮": "🧊", "極寒の牙": "❄️",
  "闇のエルフ耳": "👂", "呪われた弓": "🏹",
  "石の欠片": "🪨", "魔法石": "💎",
  "巨人の目玉": "👁️", "魔眼の結晶": "🔮",
  "ハーピーの羽": "🪶", "嵐の羽根": "⚡",
  "包帯の切れ端": "🩹", "呪いの包帯": "⚫",
  "炎の結晶": "🔴", "業火の核": "🔥",
  "錆びた鎧": "🛡️", "呪いの剣": "⚔️",
  "海蛇の鱗": "🌊", "深海の宝石": "💠",
  "氷竜のウロコ": "🧊", "氷竜の心臓": "💙",
  "闇の鎧片": "⬛", "闇の剣": "🗡️",
  "石化の鱗": "🪨", "石化の瞳": "👁️",
  "獣人の爪": "🦡", "月の牙": "🌙",
  "幽霊の布": "👻", "魂の結晶": "✨",
  "炎の皮": "🔥", "炎帝の核": "☀️",
  "牛の角": "🐂", "黄金の角": "🌟",
  "蛇の髪": "🐍", "石化の眼": "😶",
  "吸血鬼の牙": "🧛", "血の宝石": "💔",
  "鉄の欠片": "⚙️", "魔鉄の核": "🔩",
  "雷鳥の羽": "⚡", "不死鳥の核": "🦅",
  "影の短剣": "🗡️", "虚無の刃": "🌑",
  "悪魔の角": "😈", "魔王の核": "💜",
  "水晶の鱗": "💎", "虹色の結晶": "🌈",
  "巨神の骨": "🦴", "神話の石": "🗿",
  "魔女の杖": "🪄", "禁忌の魔書": "📕",
  "死霊の指": "☠️", "魂の宝珠": "🔵",
  "地獄犬の牙": "🐕", "冥府の炎": "🟣",
  "グリフィンの羽": "🦅", "聖なる羽根": "🕊️",
  "死霊術の書": "📖", "禁断の魔法陣": "🔯",
  "魔神の核": "⭐", "魔神の心臓": "💗",
  "混沌の鱗": "🌀", "混沌の核": "🌀",
  "虚無の欠片": "⬜", "虚空の結晶": "🔲",
  "魂の破片": "💫", "魂喰いの宝珠": "🟣",
  "世界蛇の鱗": "🌍", "神代の牙": "🌠",
  "堕天使の羽": "🖤", "聖なる涙": "💧",
  "時の砂": "⏳", "時空の結晶": "🕰️",
  "古代の呪符": "📜", "封印の宝珠": "🔴",
  "魔鋼の欠片": "⚙️", "悪魔の核": "🟥",
  "深淵の結晶": "🌑", "奈落の核": "⚫",
  "神滅の鱗": "🌟", "神滅龍の心臓": "💖"
};

function getMaterialEmoji(name){
  return materialEmoji[name] || "❓";
}

function createMaterialHTML(){
  if(!player.materials){ return "なし"; }

  let html = "";
  let count = 0;

  Object.keys(materialEmoji).forEach(function(name){
    const amount = player.materials[name];
    if(!amount || amount <= 0){ return; }

    count++;
    const path  = (typeof getMaterialPath === "function") ? getMaterialPath(name) : null;
    const emoji = getMaterialEmoji(name);

    const icon = path
      ? `<img src="${path}" width="16" style="vertical-align:middle;" onerror="this.outerHTML='<span style=\\"font-size:14px;\\">${emoji}</span>'">`
      : `<span style="font-size:14px;">${emoji}</span>`;

    html += `
      <div style="display:flex;align-items:center;gap:4px;margin-bottom:2px;">
        ${icon}
        <span style="font-size:10px;color:#bbb;">${name}</span>
        <span style="font-size:10px;color:#888;margin-left:auto;">×${amount}</span>
      </div>
    `;
  });

  return count > 0 ? html : "<span style='color:#444;font-size:10px;'>なし</span>";
}
