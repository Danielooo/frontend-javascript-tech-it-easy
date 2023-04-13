// #### Bonusopdracht

import { inventory } from "./main.js";


// OPDRACHT 1.
// Maak drie knoppen op de pagina: `Sorteer op prijs`, `AmbiLight TV's` en `Uitverkochte exemplaren`. Gebruik de code
// die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment
// dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op
// de bijbehorende knop klikt.
// _Tip_: lees hiervoor paragraaf 7.4 op EdHub eens door!

// =============  CODE UITWERKING > UITGECOMMENT IVM DUBBELINGEN =============
// UITVERKOCHTE EXEMPLAREN
//
//
// JS link naar HTML button
// const buttonSoldOutTvs = document.getElementById("show-soldout-tv's")
//
// buttonSoldOutTvs.addEventListener("click", calcSoldOutTvs);
//
// // Kopie van code opdracht 1b > omgezet naar functie
// function calcSoldOutTvs() {
//   const soldOutTvs = inventory.filter((tv) => {
//     return (tv.originalStock - tv.sold) === 0;
//   })
//   console.log('\nSold out tv\'s: ');
//   console.log(soldOutTvs);
// }
//
//
//
// AMBILIGHT TV'S
//
//
// const buttonOnlyAmbiTvs = document.getElementById("show-only-ambi-tvs")
//
// buttonOnlyAmbiTvs.addEventListener("click", calcOnlyAmbiTvs);
//
// // Kopie van code opdracht 1c > omgezet naar functie
// function calcOnlyAmbiTvs() {
//   const onlyAmbiTv = inventory.filter((tv) => {
//     return tv.options.ambiLight === true;
//   })
//   console.log('\nOnly Ambilight tv\'s');
//   console.log(onlyAmbiTv);
// }
//
//
// SORTEER OP PRIJS (VAN LAAG NAAR HOOG)
//
//
// const buttonSortTvsLowToHigh = document.getElementById("show-tvs-sorted-low-to-high")
//
// buttonSortTvsLowToHigh.addEventListener("click", calcSortTvsLowToHigh);
//
// // Kopie van code opdracht 1d > omgezet naar functie
// function calcSortTvsLowToHigh() {
//   const priceLowToHigh = inventory.sort((a, b) => a.price - b.price)
//
//   console.log('\nPrice of tv\'s from low to high: ');
//   console.log(priceLowToHigh);
// }
// =============  CODE UITWERKING >  UITGECOMMENT IVM DUBBELINGEN  =============



// OPDRACHT 2.
// Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan
// jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

// Maak een flexbox van de button container met lichtblauwe achtergrond, 20 px padding vanaf de inhoud
// Maak een flexbox van de buttons zelf, achtergrondkleur donkerder blauw, met ruimte voor antwoordregel onder de button
// Maak antwoordregel onder de buttons. Antwoord: ___ > Antwoord zelf aparte tag en in andere kleur
// Link JS code aan antwoord tag


// UITVERKOCHTE EXEMPLAREN

// Button link en gedrag
const buttonSoldOutTvs = document.getElementById("show-soldout-tvs")
buttonSoldOutTvs.addEventListener("click", calcSoldOutTvs);

// Antwoordregel die aangepast gaat worden na button click
let answerSoldOutTvs = document.getElementById("answer-sold-tvs");

// Berekent welke tv's zijn uitverkocht en voert functies uit die het antwoord tonen in de browser
function calcSoldOutTvs() {
  const soldOutTvs = inventory.filter((tv) => {
    return (tv.originalStock - tv.sold) === 0;
  })
  const answer = returnNameAndBrandOfObject(soldOutTvs);
  changeAnswer(answerSoldOutTvs, answer);
}



// AMBILIGHT TV'S

// Button link en gedrag
const buttonOnlyAmbiTvs = document.getElementById("show-only-ambi-tvs")
buttonOnlyAmbiTvs.addEventListener("click", calcOnlyAmbiTvs);

// Antwoordregel die aangepast gaat worden na button click
let answerAmbiTvs = document.getElementById("answer-ambi-tvs");


// Selecteert tv's die AmbiLight hebben en voert functies uit die het antwoord tonen in de browser
function calcOnlyAmbiTvs() {
  const onlyAmbiTv = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
  })
  const answer = returnNameAndBrandOfObject(onlyAmbiTv);
  changeAnswer(answerAmbiTvs, answer);
}





// SORTEER OP PRIJS (VAN LAAG NAAR HOOG)

// Button link en gedrag
const buttonSortTvsLowToHigh = document.getElementById("show-tvs-sorted-low-to-high")
buttonSortTvsLowToHigh.addEventListener("click", calcSortTvsLowToHigh);

// Antwoordregel die aangepast gaat worden na button click
let answerPriceLowToHigh = document.getElementById("answer-price-low-to-high");

// Functie berekent volgorde en voert functies uit die het antwoord geven in de browser
function calcSortTvsLowToHigh() {
  const priceLowToHigh = inventory.sort((a, b) => a.price - b.price);
  const answer = returnNameBrandPriceOfObject(priceLowToHigh);
  changeAnswer(answerPriceLowToHigh, answer);
}



// ==========  HERGEBRUIKTE FUNCTIES  ==========
// Neemt array van objecten en haalt de brand en name op en zet die in een string
function returnNameAndBrandOfObject(array_of_objects) {
  let brandsAndNames = '';
  array_of_objects.forEach((item) => {
    brandsAndNames += `${item.brand} ${item.name} // `;
  })
  return brandsAndNames;
}

function returnNameBrandPriceOfObject(array_of_objects) {
  let brandsAndNames = '';
  array_of_objects.forEach((item) => {
    brandsAndNames += `${item.brand} ${item.name}  €${item.price},- // `;
  })
  return brandsAndNames;
}

// Neemt een element en berekende antwoord en update deze in de HTML
function changeAnswer(element, answer) {
  element.textContent = `Antwoord: ${answer}`;
}
// ==========  HERGEBRUIKTE FUNCTIES  ==========
