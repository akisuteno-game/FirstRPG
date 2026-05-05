let currentCraftSection = "weapon";

function renderCraftTab(){

  const tab = document.getElementById("craftTab");
  if(!tab){ return; }

  initEquipment();

  const sections = [
    { key: "weapon",    label: "⚔️ 武器" },
    { key: "armor",     label: "🛡️ 鎧" },
    { key: "accessory", label: "💍 アクセ" },
    { key: "item",      label: "🧪 アイテム" }
  ];

  let sectionBtns = sections.map(function(s){
    const active = s.key === currentCraftSection
      ? "border-bottom:2px solid white;color:white;"
      : "border-bottom:1px solid #333;color:#666;";
    return `
      <button
        onclick="switchCraftSection('${s.key}')"
        style="
          flex:1;min-width:unset;min-height:unset;
          height:36px;font-size:12px;
          background:#111;border:none;
          ${active}cursor:pointer;
        "
      >${s.label}</button>
    `;
  }).join("");

  let content = "";

  if(currentCraftSection === "item"){

    content = craftItems.map(function(item){
      const ok = canCraft(item);
      const matList = Object.keys(item.materials).map(function(name){
        const have = player.materials[name] || 0;
        const need = item.materials[name];
        const color = have >= need ? "#88ff88" : "#ff6666";
        return `<span style="color:${color};">${name} ${have}/${need}</span>`;
      }).join("　");

      return `
        <div style="
          background:#111;border:1px solid #2a2a2a;
          padding:12px;margin-bottom:8px;
        ">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span style="font-size:14px;font-weight:bold;color:white;">${item.name}</span>
          </div>
          <div style="font-size:12px;color:#aaa;margin-bottom:6px;">${item.desc}</div>
          <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
          <button
            onclick="craftItem('${item.id}')"
            ${ok ? "" : "disabled"}
            style="
              min-width:unset;min-height:unset;
              width:100%;height:32px;font-size:13px;
              background:${ok ? "#223322" : "#1a1a1a"};
              color:${ok ? "#88ff88" : "#444"};
              border:1px solid ${ok ? "#446644" : "#222"};
            "
          >${ok ? "作成する" : "素材不足"}</button>
        </div>
      `;
    }).join("");

  } else {

    const slotEquips = craftEquipments.filter(function(e){
      return e.slot === currentCraftSection;
    });

    content = slotEquips.map(function(equip){

      const ok        = canCraft(equip);
      const equipped  = player.equipment[equip.slot] === equip.id;

      const matList = Object.keys(equip.materials).map(function(name){
        const have = player.materials[name] || 0;
        const need = equip.materials[name];
        const color = have >= need ? "#88ff88" : "#ff6666";
        return `<span style="color:${color};">${name} ${have}/${need}</span>`;
      }).join("　");

      const effectList = Object.keys(equip.effect).map(function(k){
        const val = equip.effect[k];
        const labels = {
          atk: "ATK",maxHp: "MaxHP",crit: "クリ率",
          critMulti: "クリダメ",attackSpeed: "速度",
          goldBonus: "GOLD%",rareChance: "レアドロ%"
        };
        return (labels[k] || k) + " +" + val;
      }).join("　");

      return `
        <div style="
          background:${equipped ? "#0d1f0d" : "#111"};
          border:${equipped ? "2px solid lime" : "1px solid #2a2a2a"};
          padding:12px;margin-bottom:8px;
        ">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <span style="font-size:14px;font-weight:bold;color:${equipped ? "lime" : "white"};">
              ${equip.name}
              ${equipped ? " ✅" : ""}
            </span>
          </div>
          <div style="font-size:12px;color:#88aaff;margin-bottom:4px;">${effectList}</div>
          <div style="font-size:11px;margin-bottom:8px;">${matList}</div>
          <button
            onclick="craftEquipment('${equip.id}')"
            ${ok && !equipped ? "" : "disabled"}
            style="
              min-width:unset;min-height:unset;
              width:100%;height:32px;font-size:13px;
              background:${ok && !equipped ? "#223322" : "#1a1a1a"};
              color:${ok && !equipped ? "#88ff88" : "#444"};
              border:1px solid ${ok && !equipped ? "#446644" : "#222"};
            "
          >${equipped ? "装備中" : ok ? "クラフト＆装備" : "素材不足"}</button>
        </div>
      `;

    }).join("");

    // 現在の装備スロット表示
    const currentEquipId = player.equipment[currentCraftSection];
    const currentEquip   = currentEquipId
      ? craftEquipments.find(function(e){ return e.id === currentEquipId; })
      : null;

    content = `
      <div style="
        background:#0a0a1a;border:1px solid #334;
        padding:10px;margin-bottom:12px;font-size:12px;color:#88aaff;
      ">
        装備中：${currentEquip ? currentEquip.name : "なし"}
        ${currentEquip
          ? `<button
               onclick="unequipAndRefresh('${currentCraftSection}')"
               style="
                 min-width:unset;min-height:unset;
                 float:right;padding:2px 8px;font-size:11px;
                 background:#1a1a1a;color:#888;border:1px solid #444;height:auto;
               "
             >外す</button>`
          : ""}
      </div>
    ` + content;

  }

  tab.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;color:white;background:#0d0d0d;">
      <div style="display:flex;flex-shrink:0;border-bottom:1px solid #333;">
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

function unequipAndRefresh(slot){
  unequipSlot(slot);
  savePlayer();
  renderPlayer();
  renderCraftTab();
}
