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
