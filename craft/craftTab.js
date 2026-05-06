let currentCraftSection = "weapon";

function renderCraftTab(){

  const tab = document.getElementById("craftTab");
  if(!tab){ return; }

  initEquipment();

  const sections = [
    { key: "weapon",    label: "⚔️ 武器"   },
    { key: "armor",     label: "🛡️ 鎧"     },
    { key: "accessory", label: "💍 アクセ"  },
    { key: "item",      label: "🧪 アイテム" }
  ];

  const sectionBtns = sections.map(function(s){
    const active = s.key === currentCraftSection
      ? "border-bottom:2px solid #88aaff;color:white;"
      : "border-bottom:1px solid #1e1e1e;color:#444;";
    return `
      <button
        onclick="switchCraftSection('${s.key}')"
        style="
          flex:1;min-width:unset;min-height:unset;
          height:36px;font-size:11px;
          background:#0a0a0a;border:none;
          font-family:monospace;cursor:pointer;${active}
        "
      >${s.label}</button>
    `;
  }).join("");

  let content = "";

  if(currentCraftSection === "item"){

    // アイテムは素材が揃ってるものだけ表示
    const available = craftItems.filter(function(item){
      return canCraft(item);
    });

    if(available.length === 0){
      content = `<div style="color:#333;font-size:13px;padding:20px;text-align:center;">
        素材が揃ったアイテムがありません
      </div>`;
    } else {
      content = available.map(function(item){
        const matList = Object.keys(item.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = item.materials[name];
          return `<span style="color:#88ff88;">${name} ${have}/${need}</span>`;
        }).join("　");

        return `
          <div style="background:#0f0f0f;border:1px solid #1e1e1e;padding:12px;margin-bottom:6px;">
            <div style="font-size:14px;font-weight:bold;color:white;margin-bottom:3px;">${item.name}</div>
            <div style="font-size:11px;color:#888;margin-bottom:5px;">${item.desc}</div>
            <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
            <button
              onclick="craftItem('${item.id}')"
              style="min-width:unset;min-height:unset;width:100%;height:32px;font-size:13px;
                background:#1a2a1a;color:#88ff88;border:1px solid #336633;"
            >作成する</button>
          </div>
        `;
      }).join("");
    }

    // 素材不足のものも一覧で表示（薄く）
    const lacking = craftItems.filter(function(item){ return !canCraft(item); });
    if(lacking.length > 0){
      content += `<div style="color:#333;font-size:10px;padding:10px 4px 4px;">── 素材不足 ──</div>`;
      content += lacking.map(function(item){
        const matList = Object.keys(item.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = item.materials[name];
          return `<span style="color:${have>=need?"#88ff88":"#553333"};">${name} ${have}/${need}</span>`;
        }).join("　");
        return `
          <div style="background:#080808;border:1px solid #111;padding:10px;margin-bottom:4px;opacity:0.5;">
            <div style="font-size:13px;color:#666;margin-bottom:2px;">${item.name}</div>
            <div style="font-size:10px;margin-top:4px;">${matList}</div>
          </div>
        `;
      }).join("");
    }

  } else {

    // 装備タブ
    const slot      = currentCraftSection;
    const stack     = player.equipStack[slot] || [];
    const stackMax  = EQUIP_STACK_MAX;

    // ── 所持品（スタック） ──
    let stackHtml = `
      <div style="font-size:12px;color:#555;margin-bottom:6px;">
        所持品 ${stack.length}/${stackMax}
      </div>
    `;

    if(stack.length === 0){
      stackHtml += `<div style="color:#333;font-size:12px;padding:8px 0 12px;">なし</div>`;
    } else {
      stack.forEach(function(item, idx){
        const eq = item.equipped;
        stackHtml += `
          <div style="
            background:${eq ? "#0a1a0a" : "#0d0d0d"};
            border:${eq ? "1px solid #336633" : "1px solid #1a1a1a"};
            padding:10px;margin-bottom:6px;
            display:flex;align-items:center;gap:8px;
          ">
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:bold;color:${item.rarityColor};">
                ${item.rarity} ${item.name} ${eq ? "✅" : ""}
              </div>
              <div style="font-size:11px;color:#aaa;margin-top:2px;">${item.desc}</div>
            </div>
            <div style="display:flex;flex-direction:column;gap:4px;">
              ${!eq ? `
                <button
                  onclick="equipFromStack('${slot}', ${idx})"
                  style="min-width:unset;min-height:unset;
                    padding:4px 10px;font-size:11px;
                    background:#1a2a1a;color:#88ff88;border:1px solid #336633;"
                >装備</button>
              ` : `
                <button
                  onclick="unequipCurrent('${slot}');savePlayer();renderPlayer();renderCraftTab();"
                  style="min-width:unset;min-height:unset;
                    padding:4px 10px;font-size:11px;
                    background:#1a1a1a;color:#888;border:1px solid #333;"
                >外す</button>
              `}
              <button
                onclick="if(confirm('削除しますか？')){removeFromStack('${slot}',${idx});}"
                style="min-width:unset;min-height:unset;
                  padding:4px 10px;font-size:11px;
                  background:#1a0a0a;color:#ff6666;border:1px solid #441111;"
              >捨てる</button>
            </div>
          </div>
        `;
      });
    }

    // ── クラフト（素材が揃ったものだけ） ──
    const slotRecipes  = craftEquipments.filter(function(e){ return e.slot === slot; });
    const canCraftList = slotRecipes.filter(canCraft);
    const lackList     = slotRecipes.filter(function(r){ return !canCraft(r); });

    let craftHtml = `
      <div style="font-size:12px;color:#555;margin:12px 0 6px;border-top:1px solid #1a1a1a;padding-top:12px;">
        クラフト可能
      </div>
    `;

    if(canCraftList.length === 0){
      craftHtml += `<div style="color:#333;font-size:12px;padding:4px 0 8px;">
        素材が揃った装備がありません
      </div>`;
    } else {
      craftHtml += canCraftList.map(function(recipe){
        const rangeList = Object.keys(recipe.effectRange).map(function(stat){
          const r = recipe.effectRange[stat];
          const labels = {
            atk:"ATK", maxHp:"HP", crit:"クリ率%",
            critMulti:"クリダメ倍", attackSpeed:"速度ms",
            goldBonus:"GOLD%", rareChance:"レアドロ%"
          };
          return `${labels[stat]||stat}: ${r[0]}〜${r[1]}`;
        }).join("　");

        const matList = Object.keys(recipe.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = recipe.materials[name];
          return `<span style="color:#88ff88;">${name} ${have}/${need}</span>`;
        }).join("　");

        const stackFull = (player.equipStack[slot] || []).length >= EQUIP_STACK_MAX;

        return `
          <div style="background:#0f0f0f;border:1px solid #1e1e1e;padding:10px;margin-bottom:6px;">
            <div style="font-size:14px;font-weight:bold;color:white;margin-bottom:3px;">${recipe.name}</div>
            <div style="font-size:11px;color:#6688aa;margin-bottom:3px;">${rangeList}</div>
            <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
            <button
              onclick="craftEquipment('${recipe.id}')"
              ${stackFull ? "disabled" : ""}
              style="min-width:unset;min-height:unset;width:100%;height:32px;font-size:13px;
                background:${stackFull ? "#111" : "#1a2a1a"};
                color:${stackFull ? "#444" : "#88ff88"};
                border:1px solid ${stackFull ? "#222" : "#336633"};"
            >${stackFull ? "所持品が満杯" : "クラフトする（ランダム効果）"}</button>
          </div>
        `;
      }).join("");
    }

    // 素材不足一覧（薄く）
    if(lackList.length > 0){
      craftHtml += `<div style="color:#333;font-size:10px;padding:8px 0 4px;">── 素材不足 ──</div>`;
      craftHtml += lackList.map(function(recipe){
        const matList = Object.keys(recipe.materials).map(function(name){
          const have = player.materials[name] || 0;
          const need = recipe.materials[name];
          return `<span style="color:${have>=need?"#88ff88":"#442222"};">${name} ${have}/${need}</span>`;
        }).join("　");
        return `
          <div style="background:#080808;border:1px solid #0f0f0f;padding:8px;margin-bottom:4px;opacity:0.45;">
            <div style="font-size:12px;color:#555;margin-bottom:4px;">${recipe.name}</div>
            <div style="font-size:10px;">${matList}</div>
          </div>
        `;
      }).join("");
    }

    content = stackHtml + craftHtml;

  }

  tab.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;background:#0a0a0a;color:white;">
      <div style="display:flex;flex-shrink:0;border-bottom:1px solid #1a1a1a;">
        ${sectionBtns}
      </div>
      <div style="flex:1;overflow-y:auto;padding:10px;">
        ${content}
      </div>
    </div>
  `;

}

function switchCraftSection(key){
  currentCraftSection = key;
  renderCraftTab();
}
