let description = document.createElement("div"); // creo l'elemento description per visualizzare il div con la descrizione
description.textContent = "Start searching a new city and view the results"; // assegno un valore al description
document.body.appendChild(description); // aggiungo l'elemento description al corpo della pagina per renderlo visibile
description.id = "description"; // aggiungo un id all'elemento description per assegnargli lo stile nel file css

let divInputCity = document.createElement("div"); // creo l'elemento divInputCity per contenere il bottone e l'input
document.body.appendChild(divInputCity); // aggiungo l'elemento divInputCity al corpo della pagina per renderlo visibile
divInputCity.id = "divInputCity"; // aggiungo un id all'elemento divInputCity per assegnargli lo stile nel file css

let inputCity = document.createElement("input"); // creo l'elemento inputCity per visualizzare l'input
document.body.appendChild(inputCity); // aggiungo l'elemento inputCity al corpo della pagina per renderlo visibile
inputCity.id = "inputCity"; // aggiungo un id all'elemento inputCity per assegnargli lo stile nel file css
document.getElementById("inputCity").placeholder = "Search a new city"; // assegno un valore al placeholder dell'input

let searchButton = document.createElement("button"); // creo l'elemento searchButton per visualizzare il bottone della ricerca
searchButton.textContent = "Search"; // assegno un valore al searchButton
document.body.appendChild(searchButton); // aggiungo l'elemento searchButton al corpo della pagina per renderlo visibile
searchButton.id = "searchButton"; // aggiungo un id all'elemento searchButton per assegnargli lo stile nel file css

divInputCity.appendChild(inputCity); // aggiungo l'elemento inputCity come figlio dell'elemento divInputCity
divInputCity.appendChild(searchButton); // aggiungo l'elemento searchButton come figlio dell'elemento divInputCity

const basicUrl = "https://api.teleport.org/api/urban_areas/slug:milan/scores/";

fetch(basicUrl, {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error for API request", error);
  });
