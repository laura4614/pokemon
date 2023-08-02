import menu_hamburguesa from "./menu.js";
import { loadPokemons, filtrarPokemons } from "./loadpokemon.js";
import darkTheme from "./dark-theme.js";

document.addEventListener("DOMContentLoaded", (e) => {
  menu_hamburguesa(".menu-btn", ".menu", ".menu a");
  loadPokemons("https://pokeapi.co/api/v2/pokemon/");
  filtrarPokemons(".links-type-pokemon a");
});

darkTheme(".btn-dark-mode", "dark-mode");
