import { inventory } from "./main.js";


// * **Opdracht 1a:**
// Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de
// console.

// * **Opdracht 1b:**
// Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht
// zijn. Log de uitkomst in de console.

// * **Opdracht 1c:**
// Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight
// beschikken. Log de uitkomst in de console.

// * **Opdracht 1d:**
// Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de
// console.

// Opdracht 1a.
// TODO fix needed: tv namen worden niet getoond op console
const tvNames = inventory.map((tv) => {
  return tv.name
});

console.log('\nTv Names')
console.log(tvNames);


// Opdracht 1b.
const soldOutTvs = inventory.filter((tv) => {
  return (tv.originalStock - tv.sold) === 0;
})

console.log('\nSold out tv\'s: ');
console.log(soldOutTvs);


// Opdracht 1c.
const onlyAmbiTv = inventory.filter((tv) => {
  return tv.options.ambiLight === true;
})

console.log('\nOnly Ambilight tv\'s');
console.log(onlyAmbiTv);


// Opdracht 1d.
const priceLowToHigh = inventory.sort((a, b) => a.price - b.price)

console.log('\nPrice of tv\'s from low to high: ');
console.log(priceLowToHigh);

