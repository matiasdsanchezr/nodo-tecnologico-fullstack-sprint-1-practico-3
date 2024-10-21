import { leerSuperheroes, agregarSuperheroes } from "./utils.mjs";

// Leer y mostrar la lista de superhéroes ordenada
const archivoOriginal = "./superheroes.txt";
const archivoNuevosSuperheroes = "./agregarSuperheroes.txt";

agregarSuperheroes(archivoOriginal, archivoNuevosSuperheroes);
const superheroes = leerSuperheroes(archivoOriginal);

console.log("Superhéroes ordenados:");
console.log(superheroes);
