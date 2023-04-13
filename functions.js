import { inventory } from "./main.js";

// Opdracht 4 -Functies
//
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//
//   ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```
//
// Opdracht 4a:
// Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in
// het format `[merk] [type] - [naam]` zoals `Philips 43PUS6504/12 - 4K TV` of `NIKKEI NH3216SMART - HD smart TV`.

// Maak article met id printTvSpecs in html
// Maak functie met input array of objects (inventory)
// Maak variable tvSpecs aan
// Maak 3 strings >> 1. brand type / name  |  2. price  |  3. availableSizes (en per size ook omrekening van inch naar cm
// Zet 3 strings in variable tvSpecs met innerHTML > elke string is een <p>
// Functie returned string


function printFirstLineTv(obj) {
  return `${obj.brand} ${obj.type} - ${obj.name}`;
}

console.log(printFirstLineTv(inventory[0]));

// Opdracht 4b:
// Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals `379` of `159`) teruggeeft
// in het format `€379,-` of `€159,-`.

function printSecondLineTv(obj) {
  return `€${obj.price},-`;
}

console.log(printSecondLineTv(inventory[0]));

//  Opdracht 4c:
//  Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv.
//  De functie geeft dit terug in het format `[schermgrootte] inches ([schermgrootte omgerekend]cm) |
//  [schermgrootte] inches ([schermgrootte omgerekend]cm)`
// etc. Als een tv maar één schermgrootte heeft (`[32]`) wordt de output `32 inch (81 cm)`. Wanneer een tv vier
// schermgroottes heeft (`[43, 50, 55, 58]`) wordt de output `43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)`.
// _Let op:_ om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.

function printThirdLineTv(obj) {
  // let stringSizes;     geeft undefined43 inch (109.22 cm) |    // Waarom wordt undefined niet overschreven?
  let stringSizes = '';
  if (obj.availableSizes.length === 1) {
    stringSizes = `${obj.availableSizes[0]} inch (${obj.availableSizes[0] * 2.54} cm) `;
  } else {
    obj.availableSizes.forEach((size) => {
      stringSizes += `${size} inch (${size * 2.54} cm) | `;
    })
  }

  return stringSizes;

}

console.log(printThirdLineTv(inventory[3]));


//  Opdracht 4d:
//  Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld.
//  Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//   ```
//   Philips 43PUS6504/12 - 4K TV
//   €379,-
//   43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//   ```


// Maak variabele tvSpecs en geef deze elementId printTvSpecs
// in tvSpecs staan de 3 lines met specs
// de lines worden aangemaakt middels de functies printFirstLineTv etc.
// aan het eind van tvSpecs komt een witregel

const tvSpecs = document.getElementById('showTvSpecs');
const iter    = 0;

tvSpecs.innerHTML = `
        <div>
          <p>${printFirstLineTv(inventory[iter])}</p>
          <p>${printSecondLineTv(inventory[iter])}</p>
          <p>${printThirdLineTv(inventory[iter])}</p>
          <p></p>
        </div>
`;



//  Opdracht 4e:
//  Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.

const allTvSpecs = document.getElementById('showAllTvSpecs');

allTvSpecs.innerHTML = `
      <p>Specs van alle tv's: </p>
      ${getAllTvSpecs(inventory)}
`;

// loopt door alle objecten en maakt een grote string om in de variabele te zetten met .innerHTML
function getAllTvSpecs(arrayOfObjects) {
  let tempAllTvSpecs = ``;
  arrayOfObjects.forEach((tv) => {
    tempAllTvSpecs += getTvSpecs(tv)
  })

  return tempAllTvSpecs;
}

// maakt een blok met specs voor een enkele tv
function getTvSpecs(obj) {
  const tempTvSpecs = `
     <div>
        <p>${printFirstLineTv(obj)}</p>
        <p>${printSecondLineTv(obj)}</p>
        <p>${printThirdLineTv(obj)}</p>
     </div>
  `;
  return tempTvSpecs;
}

