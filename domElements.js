import { inventory } from "./main.js";

// _Tip_: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
// een oude vertrouwde for-loop voor!

// Opdracht 2a:
// Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.


let soldTvs = 0;

for (let i = 0; i < inventory.length - 1; i++) {
  soldTvs = soldTvs + inventory[i].sold;
}

console.log('\nSold Tv\'s: ');
console.log(soldTvs);

// Opdracht 2b:
// Zorg ervoor dat dit aantal _in het groen_ wordt weergegeven op de pagina.

// String in html waar JS variable in kan
// JS soldTvs injecten
// CSS: maak JS injection groen

const showSoldTvs = document.getElementById('show-sold-tvs');
showSoldTvs.innerHTML = `The number of sold tv's is: ${soldTvs}`;


// Opdracht 2c:
// Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de
// console.

let totalOriginalStock = 0
inventory.forEach(tv => totalOriginalStock += tv.originalStock);

console.log(totalOriginalStock);

// Opdracht 2d:
// Zorg ervoor dat dit aantal _in het blauw_ wordt weergegeven op de pagina.

const showTotalOriginalStock = document.getElementById('show-total-original-stock');

showTotalOriginalStock.innerHTML = `The total of the original stock is: ${totalOriginalStock}`;

// Opdracht 2e:
// Geef _in het rood_ weer hoeveel tv's er nog verkocht moeten worden.

const tvsToSell = totalOriginalStock - soldTvs;

const showTvsToSell = document.getElementById('show-tvs-to-sell');

showTvsToSell.innerHTML = `The number of tv's to sell is: ${tvsToSell}`;

