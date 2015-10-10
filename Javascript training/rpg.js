/* version 0.0.2
next step: create while loop for damages
*/



var nameHero = prompt("Name your Hero: ");


var welcomeMessage = `Hello <strong>${nameHero}</strong>, if you want to play, just click on the button below! <br>You will need to be strong to fight against our Goblin! He is very hungry and loves to eat heros in his breakfast!<br> Good luck!!!`;



function welcome() {
  document.writeln(welcomeMessage);
};

function rules() {
  var rulesText = "Just click and play!";
  //console.log(whichQuote);
  document.getElementById("rules").innerHTML = rulesText;

};


function Char(name, health, attack, damage, avatar) {
  this.name = name;
  this.health = health;
  this.attack = attack;
  this.damage = Math.floor(Math.random() * attack);
  this.avatar = "";
};


var hero = new Char(nameHero, 100, 100);
var monster = new Char("Goblin", 100, 100);

hero.avatar = "<img src=http://vignette2.wikia.nocookie.net/lego/images/e/ec/HeroicKnight.jpg>";

console.log(hero);
console.log(monster);

var dmgHero = hero.damage;
var dmgMonster = monster.damage;
console.log(dmgHero);
console.log(dmgMonster);

// see stats

function heroStats() {
  document.getElementById("stats1").innerHTML = "Name: " + hero.name;
  document.getElementById("stats2").innerHTML = "Life: " + hero.health;
  document.getElementById("stats3").innerHTML = "Attack: " + hero.attack;
  document.getElementById("stats4").innerHTML = "Damage: " + hero.damage;
  document.getElementById("stats5").innerHTML = "Avatar: " + hero.avatar;
};


var resultText = ", see your result below!";


function dmgKill(dmgHero, dmgMonster) {
  document.getElementById("hero-name").innerHTML = "Ok " + hero.name + resultText;

  if (dmgHero > dmgMonster) {
    console.log(hero.name + " wins!"); document.getElementById("victory").innerHTML = hero.name + " " + "wins!";
  } else {
    console.log(monster.name + " wins!");
    document.getElementById("victory").innerHTML = monster.name + " " + "wins!";
  }

};
