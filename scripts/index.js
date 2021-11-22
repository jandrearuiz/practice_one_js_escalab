import { historyData } from "./historyData.js";

const inputPokemon = document.querySelector("#name");
const btn = document.querySelector("#btn");
const idPokemon = document.querySelector("#id-pokemon");
const namePokemon = document.querySelector("#name-pokemon");
const abilityPokemon = document.querySelector("#ability-pokemon");
const weightPokemon = document.querySelector("#weight-pokemon");
const imgPokemon = document.querySelector("#img-pokemon");

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
historyData();
