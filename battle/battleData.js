const enemies = [

  {
    id: 1,
    name: "Slime",

    hp: 100,
    attack: 8,
    speed: 900,

    image: "./img/slime.png",

    drops: [
      "slimeGel"
    ]
  },

  {
    id: 2,
    name: "Goblin",

    hp: 180,
    attack: 15,
    speed: 700,

    image: "./img/goblin.png",

    drops: [
      "goblinEar"
    ]
  },

  {
    id: 3,
    name: "Orc",

    hp: 300,
    attack: 25,
    speed: 550,

    image: "./img/orc.png",

    drops: [
      "orcSkin"
    ]
  },

  {
    id: 4,
    name: "Dragon",

    hp: 1000,
    attack: 50,
    speed: 350,

    image: "./img/dragon.png",

    drops: [
      "dragonScale",
      "dragonHeart"
    ]
  }

];

console.log("battleData OK");
