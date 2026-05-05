let currentSkillBranch = "attack";

function renderSkillTab(){

  const tab = document.getElementById("skillTab");

  if(!tab){ return; }

  const freeSp = getFreeSkillPoints();

  let branchBtns = "";

  Object.keys(skillTree).forEach(function(key){
    const branch = skillTree[key];
    const active = key === currentSkillBranch
      ? "border:2px solid white;"
      : "border:2px solid #444;";

    branchBtns += `
      <button
        onclick="switchSkillBranch('${key}')"
        style="
          flex:1;
          min-width:unset;
          min-height:unset;
          height:44px;
          font-size:13px;
          background:#222;
          color:${branch.color};
          ${active}
          padding:0;
        "
      >
        ${branch.label}
      </button>
    `;
  });

  const branch = skillTree[currentSkillBranch];

  let skillCards = "";

  branch.skills.forEach(function(skill){

    const learned   = hasSkill(skill.id);
    const available = canLearnSkill(skill);
    const reqMet    = requiresMet(skill);

    let bg     = "#1a1a1a";
    let border = "#444";
    let opacity = "1";

    if(learned){
      bg     = "#1a2a1a";
      border = "lime";
    } else if(available){
      bg     = "#1a1a2a";
      border = branch.color;
    } else if(!reqMet){
      opacity = "0.4";
    }

    const reqNames = skill.requires.map(function(id){
      const s = getSkillById(id);
      return s ? s.name : id;
    }).join("、");

    skillCards += `
      <div style="
        background:${bg};
        border:2px solid ${border};
        padding:14px;
        margin-bottom:12px;
        opacity:${opacity};
      ">
        <div style="
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:6px;
        ">
          <span style="font-size:16px;font-weight:bold;color:${branch.color};">
            ${skill.name}
          </span>
          <span style="font-size:13px;color:#aaa;">
            SP: ${skill.cost}
          </span>
        </div>

        <div style="font-size:13px;color:#ccc;margin-bottom:6px;">
          ${skill.desc}
        </div>

        ${reqNames ? `
          <div style="font-size:11px;color:#777;margin-bottom:8px;">
            前提: ${reqNames}
          </div>
        ` : ""}

        ${learned
          ? `<div style="color:lime;font-size:13px;">✅ 習得済み</div>`
          : `<button
               onclick="learnSkill('${skill.id}')"
               ${available ? "" : "disabled"}
               style="
                 min-width:unset;
                 min-height:unset;
                 width:100%;
                 height:36px;
                 font-size:14px;
                 background:${available ? "#333" : "#222"};
                 color:${available ? "white" : "#666"};
                 border:1px solid ${available ? "#888" : "#444"};
               "
             >
               ${available ? "習得する" : (reqMet ? "SPが足りない" : "前提スキル未習得")}
             </button>`
        }
      </div>
    `;

  });

  tab.innerHTML = `
    <div style="padding:16px;color:white;">

      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
        <h2>スキルツリー</h2>
        <span style="color:gold;font-size:14px;">残りSP: ${freeSp}</span>
      </div>

      <div style="display:flex;gap:4px;margin-bottom:16px;flex-wrap:wrap;">
        ${branchBtns}
      </div>

      <div>
        ${skillCards}
      </div>

    </div>
  `;

}

function switchSkillBranch(key){
  currentSkillBranch = key;
  renderSkillTab();
}
