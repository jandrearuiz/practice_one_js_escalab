const inputPokemon = document.querySelector("#name");
const btn = document.querySelector("#btn");
const idPokemon = document.querySelector("#id-pokemon");
const namePokemon = document.querySelector("#name-pokemon");
const abilityPokemon = document.querySelector("#ability-pokemon");
const weightPokemon = document.querySelector("#weight-pokemon");
const imgPokemon = document.querySelector("#img-pokemon");
const historyDataBase = document.querySelector("#history-data");

const historyData = (data) => {
  let history = [];
  let historyElements = [];

  history = localStorage.getItem("history");

  if (history) {
    historyElements = JSON.parse(history);
    if (data) historyElements.push(data);
  } else {
    if (data) historyElements = [data];
  }

  localStorage.setItem("history", JSON.stringify(historyElements));

  let historyList = "";

  historyElements.forEach((historyElement) => {
    historyList += `<li>${historyElement}</li>`;
  });

  historyDataBase.innerHTML = `<ul>${historyList}</ul>`;
};

const fetchPokemon = async () => {
  if (!inputPokemon.value) return;

  // fetch(
  //   `https://pokeapi.co/api/v2/pokemon/${inputPokemon.value.toLowerCase()}/`
  // )
  //   .then((response) => response.json())
  //   .then(({ abilities, sprites, name, id, weight }) => {
  //     let abilitiesList = "";

  //     abilities.forEach(({ ability }) => {
  //       abilitiesList += `<li>${ability.name}</li>`;
  //     });

  //     imgPokemon.innerHTML = `<img alt="${name}" src="${sprites.front_default}">`;
  //     idPokemon.innerText = id;
  //     namePokemon.innerText = name;
  //     abilityPokemon.innerHTML = `<ul>${abilitiesList}</ul>`;
  //     weightPokemon.innerText = weight;

  //     historyData(name);
  //   })
  //   .catch(() => {
  //     let errorMessage = "error de consulta";

  //     historyData(errorMessage);
  //     alert("Ese nombre de Pokemon no existe");
  //   });

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${inputPokemon.value.toLowerCase()}/`
    );

    const { abilities, sprites, name, id, weight } = await response.json();

    let abilitiesList = "";

    abilities.forEach(({ ability }) => {
      abilitiesList += `<li>${ability.name}</li>`;
    });

    imgPokemon.innerHTML = `<img alt="${name}" src="${sprites.front_default}">`;
    idPokemon.innerText = id;
    namePokemon.innerText = name;
    abilityPokemon.innerHTML = `<ul>${abilitiesList}</ul>`;
    weightPokemon.innerText = weight;

    historyData(name);
  } catch (e) {
    let errorMessage = "error de consulta";
    
    historyData(errorMessage);
    alert("Ese nombre de Pokemon no existe");
  }
};

btn.addEventListener("click", fetchPokemon);
historyData(null);
