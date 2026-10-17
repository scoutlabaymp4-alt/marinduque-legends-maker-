"use strict";

const abilities = ["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"];

const archetypes = [
  {
    name: "Moryon Sentinel",
    category: "Festival Inspired",
    description: "A masked guardian inspired by Moriones Festival traditions. Demonstration content only."
  },
  {
    name: "River Wayfarer",
    category: "Community Inspired",
    description: "A traveler who knows local paths and stories. Demonstration content only."
  },
  {
    name: "Cave Listener",
    category: "Island Inspired",
    description: "A curious explorer who listens closely to the island's quiet places. Demonstration content only."
  },
  {
    name: "Amihan Keeper",
    category: "Nature Inspired",
    description: "A thoughtful guide who follows the changing winds and cares for the natural world. Demonstration content only."
  },
  {
    name: "Harbor Storyteller",
    category: "Community Inspired",
    description: "A warm-hearted storyteller who gathers people through shared tales. Demonstration content only."
  },
  {
    name: "Tidepath Guardian",
    category: "Island Inspired",
    description: "A steady protector who finds a way forward when the tides turn. Demonstration content only."
  }
];

const form = document.querySelector("#character-form");
const nameInput = document.querySelector("#character-name");
const archetypeSelect = document.querySelector("#character-archetype");
const townSelect = document.querySelector("#character-town");
const archetypeDescription = document.querySelector("#archetype-description");
const formMessage = document.querySelector("#form-message");
const rollButton = document.querySelector("#roll-button");
const rollMessage = document.querySelector("#roll-message");
const currentScores = document.querySelector("#current-scores");
const characterCard = document.querySelector("#character-card");
const emptyCard = document.querySelector("#empty-card");

let scores = rollScores();

function rollScores() {
  return abilities.map(() => Math.floor(Math.random() * 16) + 3);
}

function renderScores(list, values) {
  list.replaceChildren();

  abilities.forEach((ability, index) => {
    const item = document.createElement("li");
    const label = document.createElement("span");
    const value = document.createElement("span");

    item.className = "score-item";
    label.className = "score-name";
    label.textContent = ability;
    value.className = "score-value";
    value.textContent = String(values[index]);
    item.append(label, value);
    list.append(item);
  });
}

function getSelectedArchetype() {
  return archetypes.find((archetype) => archetype.name === archetypeSelect.value);
}

function renderCharacter() {
  const archetype = getSelectedArchetype();

  document.querySelector("#card-name").textContent = nameInput.value.trim();
  document.querySelector("#card-town").textContent = townSelect.value;
  document.querySelector("#card-archetype").textContent =
    `${archetype.name} · ${archetype.category}`;
  document.querySelector("#card-description").textContent = archetype.description;
  renderScores(document.querySelector("#card-scores"), scores);
  characterCard.hidden = false;
  emptyCard.hidden = true;
}

archetypes.forEach((archetype) => {
  const option = document.createElement("option");
  option.value = archetype.name;
  option.textContent = `${archetype.name} — ${archetype.category}`;
  archetypeSelect.append(option);
});

renderScores(currentScores, scores);

archetypeSelect.addEventListener("change", () => {
  const archetype = getSelectedArchetype();
  archetypeDescription.textContent = archetype
    ? archetype.description
    : "Choose a path to read its character inspiration.";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "";

  if (!nameInput.value.trim()) {
    formMessage.textContent = "Please enter a character name.";
    nameInput.focus();
    return;
  }

  renderCharacter();
  formMessage.textContent = "Your character card is ready.";
});

rollButton.addEventListener("click", () => {
  scores = rollScores();
  renderScores(currentScores, scores);

  if (!characterCard.hidden) {
    renderCharacter();
  }

  rollMessage.textContent = "New scores rolled.";
});
