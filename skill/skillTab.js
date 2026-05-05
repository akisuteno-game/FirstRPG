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
      : "border:2px solid #333;";

    branchBtns += `
      <button
        onclick="switchSkillBranch('${key}')"
        style="
          min-width:unset;min-height:unset;
          padding:6px 4px;font-size:12px;
          background:#1a1a1a;color:${branch.color};
          ${active}width:100%;display:block;
          margin-bottom:4px;
        "
      >${branch.label}</button>
    `;
  });

  const branch = skillTree[currentSkillBranch];
  let skillCards = "";

  branch.skills.forEach(function(skill){

    const learned   = hasSkill(skill.id);
    const available = canLearnSkill(skill);
    const reqMet    = requiresMet(skill);

    let bg      = "#1a1a1a";
    let border  = "#444";
    let opacity = "1";

    if(learned){
      bg = "#0d200d"; border = "lime";
    } else if(available){
      bg = "#1a1a2e"; border = branch.color;
    } else if(!reqMet){
      opacity = "0.4";
    }

    const reqNames = skill.requires.map(function(id){
      const s = getSkillById(id);
      return s ? s.name : id;
    }).join("、");

    skillCards += `
      <div style="
        background:${bg};border:2px solid ${border};
        padding:12px;margin-bottom:10px;opacity:${opacity};
      ">
        <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
          <span style="font-size:15px;font-weight:bold;color:${branch.color};">
            ${skill.name}
          </span>
          <span style="font-size:12px;color:#aaa;">SP: ${skill.cost}</span>
        </div>
        <div style="font-size:13px;color:#ccc;margin-bottom:4px;">${skill.desc}</div>
        ${reqNames
          ? `<div style="font-size:11px;color:#666;margin-bottom:6px;">前提: ${reqNames}</div>`
          : ""}
        ${learned
          ? `<div style="color:lime;font-size:13px;">✅ 習得済み</div>`
          : `<button
               onclick="learnSkill('${skill.id}')"
               ${available ? "" : "disabled"}
               style="
                 min-width:unset;min-height:unset;
                 width:100%;height:34px;font-size:13px;
                 background:${available ? "#333" : "#1a1a1a"};
                 color:${available ? "white" : "#555"};
                 border:1px solid ${available ? "#888" : "#333"};
               "
             >
               ${available ? "習得する" : (reqMet ? "SPが足りない" : "前提スキル未習得")}
             </button>`
        }
      </div>
    `;

  });

  tab.innerHTML = `
    <div style="display:flex;height:100%;color:white;">

      <div style="
        width:110px;min-width:110px;
        background:#111;border-right:2px solid #333;
        padding:8px;overflow-y:auto;
      ">
        ${branchBtns}
      </div>

      <div style="flex:1;padding:12px;overflow-y:auto;">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:16px;font-weight:bold;color:${branch.color};">
            ${branch.label}
          </span>
          <span style="color:gold;font-size:13px;">残りSP: ${freeSp}</span>
        </div>
        ${skillCards}
      </div>

    </div>
  `;

}

function switchSkillBranch(key){
  currentSkillBranch = key;
  renderSkillTab();
}
