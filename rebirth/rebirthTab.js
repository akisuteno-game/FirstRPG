function renderRebirthTab(){

  const tab = document.getElementById("rebirthTab");
  if(!tab){ return; }

  const count    = player.rebirthCount || 0;
  const title    = getRebirthTitle(count);
  const canDo    = canRebirth();
  const freeRp   = getFreeRebirthPoints();

  tab.innerHTML = `
    <div style="padding:16px;color:white;">

      <h2>転生</h2><br>

      <div style="
        background:#1a1a2e;border:2px solid #555;
        padding:14px;margin-bottom:14px;font-size:14px;line-height:2;
      ">
        転生回数 : <span style="color:gold;">${count}回</span><br>
        称号 : <span style="color:orange;">${title}</span><br>
        転生ポイント : <span style="color:#88f;">${freeRp} / ${player.rebirthPoints || 0}</span>
      </div>

      <div style="color:${canDo ? "lime" : "#888"};margin-bottom:12px;font-size:14px;">
        ${canDo
          ? "✅ Lv.20達成！転生可能！"
          : "🔒 Lv." + REBIRTH_LEVEL + "で転生可能（現在 Lv." + player.level + "）"
        }
      </div>

      <button
        onclick="doRebirth()"
        ${canDo ? "" : "disabled"}
        style="font-size:18px;margin-bottom:20px;"
      >転生する</button>

      <hr style="border-color:#333;margin-bottom:16px;">

      <div style="
        display:flex;justify-content:space-between;
        align-items:center;margin-bottom:8px;
      ">
        <h3>転生スキルマップ</h3>
        <span style="color:#88f;font-size:13px;">残りRP: ${freeRp}</span>
      </div>

      <div style="font-size:12px;color:#666;margin-bottom:12px;">
        ノードをタップして詳細確認・取得
      </div>

      <div id="rebirthMapWrap" style="
        overflow:auto;background:#050510;
        border:1px solid #333;
      ">
      </div>

      <div id="rebirthNodeDetail" style="
        margin-top:12px;min-height:60px;
        font-size:13px;color:white;
      ">
        ノードをタップしてください
      </div>

    </div>
  `;

  renderRebirthWebMap();

}

// 蜘蛛の巣マップ描画
function renderRebirthWebMap(){

  const wrap = document.getElementById("rebirthMapWrap");
  if(!wrap){ return; }

  const CX  = 560;
  const CY  = 560;
  const W   = CX * 2;
  const H   = CY * 2;
  const R   = 22;

  // エッジ
  let edges = "";
  rebirthSkillMap.forEach(function(skill){
    skill.requires.forEach(function(rid){
      const parent = rebirthSkillMap.find(function(s){ return s.id === rid; });
      if(!parent){ return; }

      const px = CX + Math.cos(parent.angle * Math.PI / 180) * parent.radius;
      const py = CY + Math.sin(parent.angle * Math.PI / 180) * parent.radius;
      const cx = CX + Math.cos(skill.angle  * Math.PI / 180) * skill.radius;
      const cy = CY + Math.sin(skill.angle  * Math.PI / 180) * skill.radius;

      const both = hasRebirthSkill(skill.id) && hasRebirthSkill(rid);
      edges += `
        <line
          x1="${px}" y1="${py}" x2="${cx}" y2="${cy}"
          stroke="${both ? "#4488ff" : "#223"}"
          stroke-width="${both ? 2 : 1}"
        />
      `;
    });
  });

  // ノード
  let nodes = "";
  rebirthSkillMap.forEach(function(skill){

    const nx = CX + Math.cos(skill.angle * Math.PI / 180) * skill.radius;
    const ny = CY + Math.sin(skill.angle * Math.PI / 180) * skill.radius;

    const learned   = hasRebirthSkill(skill.id);
    const reqMet    = skill.requires.every(function(r){ return hasRebirthSkill(r); });
    const freeRp    = getFreeRebirthPoints();
    const available = !learned && reqMet && freeRp >= skill.cost;

    let fill   = "#111";
    let stroke = "#333";
    let glow   = "";

    if(skill.id === "r_core"){
      fill = "#2a1a4a"; stroke = "#aa66ff";
      glow = `filter="url(#glow)"`;
    } else if(learned){
      fill = "#0a2a0a"; stroke = "#44ff44";
    } else if(available){
      fill = "#1a1a3a"; stroke = "#4488ff";
      glow = `filter="url(#glow)"`;
    } else if(!reqMet){
      fill = "#0a0a0a"; stroke = "#222";
    }

    // 名前を短縮（7文字まで）
    const shortName = skill.name.length > 7
      ? skill.name.slice(0, 6) + "…"
      : skill.name;

    nodes += `
      <g onclick="selectRebirthNode('${skill.id}')" style="cursor:pointer;">
        <circle
          cx="${nx}" cy="${ny}" r="${skill.id === "r_core" ? 30 : R}"
          fill="${fill}" stroke="${stroke}" stroke-width="2"
          ${glow}
        />
        <text
          x="${nx}" y="${ny + 1}"
          text-anchor="middle" dominant-baseline="middle"
          font-size="9" fill="white" font-family="monospace"
        >${shortName}</text>
        ${learned
          ? `<text x="${nx + (skill.id === "r_core" ? 30 : R) - 2}" y="${ny - (skill.id === "r_core" ? 30 : R) + 2}"
               font-size="10" fill="lime">✓</text>`
          : ""}
      </g>
    `;

  });

  wrap.innerHTML = `
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      ${edges}
      ${nodes}
    </svg>
  `;

}

// ノードタップで詳細表示
function selectRebirthNode(skillId){

  const skill = rebirthSkillMap.find(function(s){ return s.id === skillId; });
  if(!skill){ return; }

  const detail  = document.getElementById("rebirthNodeDetail");
  if(!detail){ return; }

  const learned   = hasRebirthSkill(skill.id);
  const reqMet    = skill.requires.every(function(r){ return hasRebirthSkill(r); });
  const freeRp    = getFreeRebirthPoints();
  const available = !learned && reqMet && freeRp >= skill.cost;

  const reqNames = skill.requires.map(function(id){
    const s = rebirthSkillMap.find(function(x){ return x.id === id; });
    return s ? s.name : id;
  }).join("、");

  let btn = "";
  if(skill.id === "r_core"){
    btn = `<span style="color:#aa66ff;">★ コアノード</span>`;
  } else if(learned){
    btn = `<span style="color:lime;">✅ 取得済み</span>`;
  } else if(available){
    btn = `
      <button
        onclick="learnRebirthSkill('${skill.id}')"
        style="
          min-width:unset;min-height:unset;
          padding:6px 18px;font-size:13px;
          background:#333;color:white;border:1px solid #4488ff;
        "
      >取得する（RP: ${skill.cost}）</button>
    `;
  } else if(!reqMet){
    btn = `<span style="color:#666;">前提ノードを取得してください</span>`;
  } else {
    btn = `<span style="color:#888;">RPが足りません（必要: ${skill.cost} / 残り: ${freeRp}）</span>`;
  }

  detail.innerHTML = `
    <div style="
      background:#111;border:1px solid #333;
      padding:10px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;
    ">
      <div>
        <div style="font-size:14px;font-weight:bold;color:#88aaff;margin-bottom:4px;">
          ${skill.name}
        </div>
        <div style="color:#ccc;margin-bottom:4px;">${skill.desc}</div>
        ${reqNames ? `<div style="font-size:11px;color:#555;">前提: ${reqNames}</div>` : ""}
      </div>
      <div style="margin-left:auto;">${btn}</div>
    </div>
  `;

}

// 転生専用フルスクリーン演出
function showRebirthScreen(){

  const existing = document.getElementById("rebirthScreen");
  if(existing){ existing.remove(); }

  const screen = document.createElement("div");
  screen.id = "rebirthScreen";
  screen.style.cssText = `
    position:fixed;top:0;left:0;width:100vw;height:100vh;
    background:#000;z-index:9999;display:flex;
    flex-direction:column;justify-content:center;align-items:center;
    color:white;font-family:monospace;
  `;

  const nextCount = (player.rebirthCount || 0) + 1;
  const nextTitle = getRebirthTitle(nextCount);

  screen.innerHTML = `
    <div style="text-align:center;animation:fadeIn 1s ease;">

      <div style="font-size:13px;color:#888;margin-bottom:8px;">
        転生 ${nextCount}回目
      </div>

      <div id="rebirthStarField" style="
        position:relative;width:300px;height:300px;margin:0 auto 20px;
      ">
        <canvas id="rebirthCanvas" width="300" height="300"></canvas>
      </div>

      <div style="font-size:28px;color:gold;margin-bottom:8px;letter-spacing:4px;">
        ${nextTitle}
      </div>

      <div style="font-size:14px;color:#aaa;margin-bottom:4px;">
        転生ポイント +3 獲得
      </div>

      <div style="font-size:12px;color:#555;margin-bottom:30px;">
        Lv・GOLD・スキルはリセットされます
      </div>

      <div style="display:flex;gap:16px;justify-content:center;">
        <button
          onclick="confirmRebirth()"
          style="
            min-width:unset;min-height:unset;
            padding:12px 30px;font-size:18px;
            background:#2a0a4a;color:white;
            border:2px solid #aa66ff;
          "
        >転生する</button>

        <button
          onclick="document.getElementById('rebirthScreen').remove()"
          style="
            min-width:unset;min-height:unset;
            padding:12px 30px;font-size:18px;
            background:#1a1a1a;color:#888;
            border:2px solid #444;
          "
        >戻る</button>
      </div>

    </div>
  `;

  document.body.appendChild(screen);

  // パーティクルアニメーション
  startRebirthAnimation();

}

function startRebirthAnimation(){

  const canvas = document.getElementById("rebirthCanvas");
  if(!canvas){ return; }

  const ctx = canvas.getContext("2d");
  const W   = canvas.width;
  const H   = canvas.height;
  const CX  = W / 2;
  const CY  = H / 2;

  const particles = [];

  for(let i = 0; i < 80; i++){
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.3 + Math.random() * 1.5;
    particles.push({
      x: CX, y: CY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 1,
      decay: 0.005 + Math.random() * 0.01,
      size: 1 + Math.random() * 3,
      hue: Math.floor(Math.random() * 60) + 240
    });
  }

  function draw(){

    if(!document.getElementById("rebirthCanvas")){ return; }

    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, W, H);

    particles.forEach(function(p){

      p.x    += p.vx;
      p.y    += p.vy;
      p.life -= p.decay;

      if(p.life <= 0){
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.3 + Math.random() * 1.5;
        p.x = CX; p.y = CY;
        p.vx = Math.cos(angle) * speed;
        p.vy = Math.sin(angle) * speed;
        p.life = 1;
        p.hue = Math.floor(Math.random() * 60) + 240;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ",100%,70%," + p.life + ")";
      ctx.fill();

    });

    // 中心の輝き
    const grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 40);
    grad.addColorStop(0, "rgba(180,100,255,0.6)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.beginPath();
    ctx.arc(CX, CY, 40, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    requestAnimationFrame(draw);

  }

  draw();

}
