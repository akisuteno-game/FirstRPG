const skillTree = {};

function getSkillById(id){
  for(const branch of Object.values(skillTree)){
    for(const skill of branch.skills){
      if(skill.id === id){ return skill; }
    }
  }
  return null;
}

skillTree.attack = { label:"⚔️ 攻撃", color:"#ff4444", skills:[
  {id:"atk1",name:"力の目覚め",desc:"ATK +3",cost:1,requires:[],effect:{atk:3}},
  {id:"atk2",name:"鋭い刃",desc:"ATK +6",cost:2,requires:["atk1"],effect:{atk:6}},
  {id:"atk3",name:"力の奔流",desc:"ATK +12",cost:3,requires:["atk2"],effect:{atk:12}},
  {id:"atk4",name:"破壊の拳",desc:"ATK +20",cost:4,requires:["atk3"],effect:{atk:20}},
  {id:"atk5",name:"神滅の一撃",desc:"ATK +35",cost:5,requires:["atk4"],effect:{atk:35}},
  {id:"atk6",name:"覇王の力",desc:"ATK +50、クリダメ +0.5倍",cost:6,requires:["atk5"],effect:{atk:50,critMulti:0.5}},
  {id:"atk7",name:"滅神の剣",desc:"ATK +80",cost:8,requires:["atk6"],effect:{atk:80}},
  {id:"atk8",name:"無双",desc:"ATK +120、クリダメ +1.0倍",cost:10,requires:["atk7"],effect:{atk:120,critMulti:1.0}}
]};

skillTree.defense = { label:"🛡️ 防御", color:"#4488ff", skills:[
  {id:"def1",name:"鉄の意志",desc:"MaxHP +10",cost:1,requires:[],effect:{maxHp:10}},
  {id:"def2",name:"堅固な体",desc:"MaxHP +25",cost:2,requires:["def1"],effect:{maxHp:25}},
  {id:"def3",name:"不屈の肉体",desc:"MaxHP +50",cost:3,requires:["def2"],effect:{maxHp:50}},
  {id:"def4",name:"再生の加護",desc:"自動回復速度 2倍",cost:3,requires:["def2"],effect:{healRate:2}},
  {id:"def5",name:"鋼の城壁",desc:"MaxHP +100",cost:4,requires:["def3"],effect:{maxHp:100}},
  {id:"def6",name:"不死の誓い",desc:"MaxHP +200、回復 3倍",cost:6,requires:["def5","def4"],effect:{maxHp:200,healRate:3}},
  {id:"def7",name:"神の盾",desc:"MaxHP +350",cost:8,requires:["def6"],effect:{maxHp:350}},
  {id:"def8",name:"不滅の肉体",desc:"MaxHP +500、回復 5倍",cost:10,requires:["def7"],effect:{maxHp:500,healRate:5}}
]};

skillTree.speed = { label:"⚡ 速度", color:"#ffee44", skills:[
  {id:"spd1",name:"素早い手",desc:"速度 -100ms",cost:1,requires:[],effect:{attackSpeed:-100}},
  {id:"spd2",name:"風の動き",desc:"速度 -200ms",cost:2,requires:["spd1"],effect:{attackSpeed:-200}},
  {id:"spd3",name:"疾風の剣",desc:"速度 -300ms",cost:3,requires:["spd2"],effect:{attackSpeed:-300}},
  {id:"spd4",name:"光速の斬撃",desc:"速度 -400ms",cost:4,requires:["spd3"],effect:{attackSpeed:-400}},
  {id:"spd5",name:"瞬間移動",desc:"速度 -500ms",cost:5,requires:["spd4"],effect:{attackSpeed:-500}},
  {id:"spd6",name:"時間操作",desc:"速度 -600ms",cost:7,requires:["spd5"],effect:{attackSpeed:-600}}
]};

skillTree.critical = { label:"💥 クリティカル", color:"#ff8800", skills:[
  {id:"crit1",name:"鋭い眼光",desc:"クリ率 +5%",cost:1,requires:[],effect:{crit:5}},
  {id:"crit2",name:"急所狙い",desc:"クリ率 +10%",cost:2,requires:["crit1"],effect:{crit:10}},
  {id:"crit3",name:"弱点看破",desc:"クリダメ +0.3倍",cost:2,requires:["crit1"],effect:{critMulti:0.3}},
  {id:"crit4",name:"必殺の眼",desc:"クリ率 +15%",cost:3,requires:["crit2"],effect:{crit:15}},
  {id:"crit5",name:"死神の一閃",desc:"クリダメ +0.5倍",cost:4,requires:["crit3","crit4"],effect:{critMulti:0.5}},
  {id:"crit6",name:"確定致命傷",desc:"クリ率 +20%、クリダメ +1.0倍",cost:6,requires:["crit5"],effect:{crit:20,critMulti:1.0}},
  {id:"crit7",name:"神眼",desc:"クリ率 +25%、クリダメ +1.5倍",cost:8,requires:["crit6"],effect:{crit:25,critMulti:1.5}}
]};

skillTree.special = { label:"✨ 特殊", color:"#aa44ff", skills:[
  {id:"spc1",name:"幸運の加護",desc:"レアドロ率 +5%",cost:2,requires:[],effect:{rareChance:0.05}},
  {id:"spc2",name:"金の手",desc:"GOLD取得 +20%",cost:2,requires:[],effect:{goldBonus:0.2}},
  {id:"spc3",name:"大幸運",desc:"レアドロ率 +10%",cost:3,requires:["spc1"],effect:{rareChance:0.10}},
  {id:"spc4",name:"錬金術師",desc:"ポーション作成コスト半減",cost:3,requires:["spc2"],effect:{potionCostHalf:true}},
  {id:"spc5",name:"伝説の強運",desc:"レアドロ率 +20%",cost:5,requires:["spc3"],effect:{rareChance:0.20}},
  {id:"spc6",name:"覇者の証",desc:"全ステータス +10%",cost:8,requires:["spc5","spc4"],effect:{allPercent:0.10}}
]};

skillTree.magic = { label:"🔮 魔法", color:"#44ddff", skills:[
  {id:"mag1",name:"魔力の芽生え",desc:"ATK +5",cost:1,requires:[],effect:{atk:5}},
  {id:"mag2",name:"炎の呪文",desc:"ATK +10、クリダメ +0.2倍",cost:2,requires:["mag1"],effect:{atk:10,critMulti:0.2}},
  {id:"mag3",name:"氷結魔法",desc:"ATK +15、速度 -150ms",cost:3,requires:["mag1"],effect:{atk:15,attackSpeed:-150}},
  {id:"mag4",name:"雷撃魔法",desc:"ATK +20、クリ率 +8%",cost:4,requires:["mag2"],effect:{atk:20,crit:8}},
  {id:"mag5",name:"魔法陣展開",desc:"ATK +30、MaxHP +30",cost:4,requires:["mag3"],effect:{atk:30,maxHp:30}},
  {id:"mag6",name:"大魔法",desc:"ATK +50、クリダメ +0.5倍",cost:6,requires:["mag4"],effect:{atk:50,critMulti:0.5}},
  {id:"mag7",name:"禁忌の魔法",desc:"ATK +80、クリ率 +15%、クリダメ +0.8倍",cost:8,requires:["mag5","mag6"],effect:{atk:80,crit:15,critMulti:0.8}},
  {id:"mag8",name:"神滅魔法",desc:"ATK +150、速度 -300ms、クリダメ +1.5倍",cost:12,requires:["mag7"],effect:{atk:150,attackSpeed:-300,critMulti:1.5}}
]};

skillTree.poison = { label:"☠️ 毒", color:"#88ff44", skills:[
  {id:"psn1",name:"毒の知識",desc:"ATK +3、レアドロ +3%",cost:1,requires:[],effect:{atk:3,rareChance:0.03}},
  {id:"psn2",name:"毒塗り",desc:"ATK +8",cost:2,requires:["psn1"],effect:{atk:8}},
  {id:"psn3",name:"猛毒",desc:"ATK +15、クリ率 +5%",cost:3,requires:["psn2"],effect:{atk:15,crit:5}},
  {id:"psn4",name:"麻痺の毒",desc:"ATK +10",cost:3,requires:["psn2"],effect:{atk:10}},
  {id:"psn5",name:"腐食の霧",desc:"ATK +25、レアドロ +8%",cost:4,requires:["psn3"],effect:{atk:25,rareChance:0.08}},
  {id:"psn6",name:"絶対毒",desc:"ATK +40、クリ率 +10%",cost:5,requires:["psn4","psn5"],effect:{atk:40,crit:10}},
  {id:"psn7",name:"死の霧",desc:"ATK +60、クリダメ +0.6倍、レアドロ +10%",cost:7,requires:["psn6"],effect:{atk:60,critMulti:0.6,rareChance:0.10}},
  {id:"psn8",name:"疫病神",desc:"ATK +100、クリ率 +20%、クリダメ +1.0倍",cost:10,requires:["psn7"],effect:{atk:100,crit:20,critMulti:1.0}}
]};

skillTree.gather = { label:"⛏️ 採掘", color:"#ffaa44", skills:[
  {id:"gth1",name:"採掘の基礎",desc:"レアドロ +5%、GOLD +10%",cost:1,requires:[],effect:{rareChance:0.05,goldBonus:0.1}},
  {id:"gth2",name:"素材鑑定",desc:"レアドロ +8%",cost:2,requires:["gth1"],effect:{rareChance:0.08}},
  {id:"gth3",name:"採掘強化",desc:"GOLD +20%、ATK +5",cost:2,requires:["gth1"],effect:{goldBonus:0.2,atk:5}},
  {id:"gth4",name:"宝探し",desc:"レアドロ +15%",cost:3,requires:["gth2"],effect:{rareChance:0.15}},
  {id:"gth5",name:"黄金の手",desc:"GOLD +40%",cost:3,requires:["gth3"],effect:{goldBonus:0.4}},
  {id:"gth6",name:"素材の神",desc:"レアドロ +20%、GOLD +30%",cost:5,requires:["gth4","gth5"],effect:{rareChance:0.20,goldBonus:0.3}},
  {id:"gth7",name:"伝説の採掘師",desc:"レアドロ +30%、GOLD +50%",cost:7,requires:["gth6"],effect:{rareChance:0.30,goldBonus:0.5}},
  {id:"gth8",name:"万物収集",desc:"レアドロ +50%、GOLD +100%、ATK +20",cost:10,requires:["gth7"],effect:{rareChance:0.50,goldBonus:1.0,atk:20}}
]};
