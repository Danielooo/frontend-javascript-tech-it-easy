import { inventory } from "./main.js";

// Opdracht 3 - Array methoden en functies
//
// Opdracht 3a:
// Gebruik een array-methode om alle tv merken (zoals `Philips`, `NIKKEI`, etc.) in een lijst op de
// pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
// dubbele namen in zitten, is niet erg.

// article met id in html
// allBrands variable maken met alle merken, met map()
// innerHTML variabele maken, showAllBrands
// foreach loop maken, per array index een merk toevoegen aan showAllBrands

let allBrands = inventory.map((tv) => {return tv.brand});

let stringAllBrands = ``;
allBrands.forEach((brand) => {
  stringAllBrands += brand + ', '
});

const showAllBrands = document.getElementById('show-all-brands');

showAllBrands.innerHTML = `
    <p>Here's a list of all the brands in stock: </p>
    <p>${stringAllBrands}</p>
`;

// Opdracht 3b:
// Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
// onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken.
// _Tip_: vergeet deze functie-declaratie niet aan te roepen!

// functie aanmaken met input: array met objects, keuze attribute als String, htmlId
// Doorzoek inventory met map() voor een array met type nrs, en zet in variable tempString
// Maak variable showElement die linkt naar de html met een getElementById
// showElement wordt middels .innerHTML omgezet, string met type nrs komt in de html te staan

let showAllBrandsFunc = document.getElementById('show-all-brands-via-function');

showAllBrandsFunc.innerHTML = `
        <p>This is the result of the function showAllBrandsFunc: </p>
        <p>${allBrandsToString(inventory)}</p>
`;

function allBrandsToString(Tvs) {
  let allBrandsFunc = Tvs.map((tv) => {return ' ' + tv.brand});
  return allBrandsFunc
}




printChosenAttribute(inventory, 'type', 'show-all-type-nrs');

// Deze functie neemt als input: een array met objecten, de naam van het attribute, de html id
// De functie zorgt ervoor dat de gekozen attribute waarde van alle objecten in de browser wordt getoond.
function printChosenAttribute(arrayOfObjects, attributeString, htmlId) {

  // Foreach loopt door inventory en geeft per object de gekozen attribute terug en voegt deze toe aan tempString
  let tempString = '';
  arrayOfObjects.forEach((obj) => {tempString += obj[attributeString] + ', '})

  // Linkt de String met alle waarden aan de html zodat je deze in de browser ziet
  const showElement = document.getElementById(htmlId);
  showElement.innerHTML = `
    <p>This is the result of the function printChosenAttribute: </p>
    <p>${tempString}</p>
  `;
}
