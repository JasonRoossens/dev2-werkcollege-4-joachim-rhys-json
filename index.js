"use strict";
/*

Stap 1:
Genereer dezelfde currency opties in de select velden currencyFrom en currencyTo.
1. Fetch de lokale data van url: './currencyList.json'.
2. Na de fetch sorteer je de opgehaalde lijst alfabetisch volgens de currency name.
3. Genereer de sorteerde lijst als opties op de select velden met id: currencyFrom en currencyTo.
   Gebruik hiervoor een htmlString en de insertAdjacentHTML DOM methode zodat <option>Select currency</option>
   niet verwijderd wordt.
   Voorbeeld van de HTML <select> element:
   <select>
    <option>Select currency</option>
    <option value="AFN">🇦🇫 Afghan Afghani</option>
    <option value="ALL">🇦🇱 Albanian Lek</option>
    ...
   </select>


Stap 2:
Wanneer een currency geselecteerd wordt moet het correcte currency symbool getoond worden.
Dit geldt voor HTML elementen met id: currencyFromSymbol en currencyToSymbol
1. Voeg een event listener toe aan de select velden die luisterd naar "change" events. Deze
   functie moet bepalen welke currency code geselecteerd is. Op het event kan je de geselecteerde
   code ophalen via: event.target.value
2. Gebruik de geselecteerde currency code en de currencyList om het geselecteerde currency object te bepalen.
   Voorbeeld geselecteerde currency object:
   selectedCurrencyFrom = {
      "symbol": "€",
      "name": "Euro",
      "symbol_native": "€",
      "code": "EUR",
      "flag": "🇪🇺"
   }
3. Gebruik bovenstaand object om het geselecteerde symbool te tonen. Je mag zelf kiezen ofdat
   je symbol_native of symbol toont.


Stap 3:
Wanneer de ingegeven waarde van "value from" aanpast of één van de geselecteerde currencies moet je
het resultaat berekenen en tonen op het HTML element met id "result"
1. Voeg een event listener toe aan input veld met id "valueFrom" die luistert naar het keyup event.
   Deze functie moet bepalen welke numerieke waarde ingegeven wordt. 
2. Bereken de uitkomst wanneer de geselecteerde currencies of value from input veld wordt aangepast
3. De uitkomst kan je berekenen doormiddel van de koerswisseling op te halen via de volgende link:
   "https://api.exchangerate-api.com/v4/latest/USD". (In dit geval is USD de geselecteerde currency)

Stap 4:
Maak een uitbreiding van de uitkomst functie zodat ook de uitkomst volledig tekstueel wordt weergegeven
in de section HTML element met id "textualRepresentationOfResult".
Render de volgende HTML elementen:
  <h3>1 Euro equals</h3>
  <h2>1,06 Swiss Franc</h2>
  <p>23 Feb, 12:01 UTC</p>
Tip: de tijd kan je terug vinden als UNIX timestamp in de data opgehaald van https://api.exchangerate-api.com/v4/latest/USD.
     Onder de property key time_last_updated. Je kan dit getal omzetten via de JavaScript new Date() functie
     https://stackoverflow.com/questions/847185/convert-a-unix-timestamp-to-time-in-javascript

Stap 5:
Nu heb je best wel wat code door al de bovenste stappen uit te voeren. Probeer meer structuur te krijgen in je code doormiddel 
van een currencyCalculator object aan te maken dat al je logica die je net geschreven hebt omvat.
Probeer al je functies in dit object te plaatsen, functies die je later zou kunnen hergebruiken kan je in een utils
object plaatsen.
*/