let currentCraftSection = "weapon";

function renderCraftTab(){

  const tab = document.getElementById("craftTab");
  if(!tab){ return; }

  initEquipment();

  const sections = [
    { key: "weapon",    label: "⚔️ 武器"  },
    { key: "armor",     label: "🛡️ 鎧"    },
    { key: "accessory", label: "💍 アクセ" },
    { key: "item",      label: "🧪 アイテム" }
  ];

  const sectionBtns = sections.map(function(s){
    const active = s.key === currentCraftSection
      ? "border-bottom:2px solid #88aaff;color:white;"
      : "border-bottom:1px solid #222;color:#555;";
    return `
      <button
        onclick="switchCraftSection('${s.key}')"
        style="
          flex:1;min-width:unset;min-height:unset;
          height:34px;font-size:11px;
          background:#0d0d0d;border:none;
          font-family:monospace;cursor:pointer;${active}
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
        return `<span style="color:${have>=need?"#88ff88":"#ff6666"};">${name} ${have}/${need}</span>`;
      }).join("　");

      return `
        <div style="background:#111;border:1px solid #1e1e1e;padding:10px;margin-bottom:6px;">
          <div style="font-size:13px;font-weight:bold;color:white;margin-bottom:3px;">${item.name}</div>
          <div style="font-size:11px;color:#888;margin-bottom:5px;">${item.desc}</div>
          <div style="font-size:10px;margin-bottom:6px;">${matList}</div>
          <button
            onclick="craftItem('${item.id}')"
            ${ok?"":"disabled"}
            style="min-width:unset;min-height:unset;width:100%;height:30px;font-size:12px;
              background:${ok?"#1a2a1a":"#111"};color:${ok?"#88ff88":"#333"};
              border:1px solid ${ok?"#334433":"#1a1a1a"};"
          >${ok?"作成する":"素材不足"}</button>
        </div>
      `;
    }).join("");

  } else {

    const list = craftEquipments.filter(function(e){ return e.slot === currentCraftSection; });

    // 現在の装備情報
    const curId     = player.equipment[currentCraftSection];
    const curEffect = player.equippedEffects && player.equippedEffects[currentCraftSection];
    const curRecipe = curId ? craftEquipments.find(function(e){ return e.id === curId; }) : null;

    let curInfo = `<div style="
      background:#0a0a18;border:1px solid #223;
      padding:8px 10px;margin-bottom:10px;font-size:11px;color:#88aaff;
      display:flex;align-items:center;justify-content:space-between;
    ">`;

    if(curRecipe && curEffect){
      const rarity = getEquipRarity(curRecipe, curEffect);
      curInfo += `
        <div>
          <span style="color:${rarity.color};">${rarity.label}</span>
          　${curRecipe.name}<br>
          <span style="color:#666;font-size:10px;">${buildEquipDesc(curRecipe, curEffect)}</span>
        </div>
        <button
          onclick="unequipAndRefresh('${currentCraftSection}')"
          style="min-width:unset;min-height:unset;padding:3px 8px;
            font-size:10px;background:#1a1a1a;color:#888;
            border:1px solid #333;height:auto;"
        >外す</button>
      `;
    } else {
      curInfo += `<span style="color:#333;">装備なし</span>`;
    }

    curInfo += `</div>`;

    const cards = list.map(function(recipe){

      const ok      = canCraft(recipe);
      const equipped = player.equipment[currentCraftSection] === recipe.id;
      const curEff   = equipped && player.equippedEffects
        ? player.equippedEffects[currentCraftSection]
        : null;

      const matList = Object.keys(recipe.materials).map(function(name){
        const have = player.materials[name] || 0;
        const need = recipe.materials[name];
        return `<span style="color:${have>=need?"#88ff88":"#ff5555"};">${name} ${have}/${need}</span>`;
      }).join("　");

      // 効果幅の表示
      const rangeList = Object.keys(recipe.effectRange).map(function(stat){
        const r = recipe.effectRange[stat];
        const labels = {
          atk:"ATK", maxHp:"HP", crit:"クリ率",
          critMulti:"クリダメ", attackSpeed:"速度",
          goldBonus:"GOLD%", rareChance:"レアドロ%"
        };
        const isFloat = !Number.isInteger(r[0]);
        const minV = isFloat ? Math.round(r[0]*100) : r[0];
        const maxV = isFloat ? Math.round(r[1]*100) : r[1];
        return `${labels[stat]||stat}: ${minV}〜${maxV}`;
      }).join("　");

      return `
        <div style="
          background:${equipped?"#0a1a0a":"#0d0d0d"};
          border:${equipped?"1px solid #336633":"1px solid #1a1a1a"};
          padding:10px;margin-bottom:6px;
        ">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
            <span style="font-size:13px;font-weight:bold;color:${equipped?"lime":"white"};">
              ${recipe.name} ${equipped?"✅":""}
            </span>
          </div>
          <div style="font-size:10px;color:#6688aa;margin-bottom:4px;">${rangeList}</div>
          <div style="font-size:10px;margin-bottom:6px;">${matList}</div>
          ${equipped && curEff ? `
            <div style="font-size:10px;color:#aaa;margin-bottom:6px;">
              現在：${buildEquipDesc(recipe, curEff)}
            </div>
          ` : ""}
          <button
            onclick="craftEquipment('${recipe.id}')"
            ${ok&&!equipped?"":"disabled"}
            style="min-width:unset;min-height:unset;width:100%;height:30px;font-size:12px;
              background:${ok&&!equipped?"#1a2a1a":"#0d0d0d"};
              color:${ok&&!equipped?"#88ff88":"#333"};
              border:1px solid ${ok&&!equipped?"#334433":"#1a1a1a"};"
          >${equipped?"装備中":ok?"クラフト＆装備":"素材不足"}</button>
        </div>
      `;
    }).join("");

    content = curInfo + cards;

  }

  tab.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%;background:#0a0a0a;color:white;">
      <div style="display:flex;flex-shrink:0;border-bottom:1px solid #1a1a1a;">
        ${sectionBtns}
      </div>
      <div style="flex:1;overflow-y:auto;padding:8px;">
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
