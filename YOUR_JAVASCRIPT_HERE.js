// Write your JS here
const hero = {
  name: "Joey",
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: "",
    damage: 2
  }
};

function rest(person) {
  if (person.health == 10) {
    window.alert("Your health is already 10");
  }
  person.health = 10;
  return person;
}

document.getElementById("inn").addEventListener("click", function() {
  rest(hero);
});

function equipWeapon(person) {}
