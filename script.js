let description = document.createElement("div"); // creo l'elemento description per visualizzare il div con la descrizione
description.textContent = "Start searching a new city and view the results"; // assegno un valore al description
document.body.appendChild(description);
description.id = "description"; // aggiungo un id all'elemento description per assegnargli lo stile nel file css

let divInputCity = document.createElement("div"); // creo l'elemento divInputCity per contenere il bottone e l'input
document.body.appendChild(divInputCity);
divInputCity.id = "divInputCity"; // aggiungo un id all'elemento divInputCity per assegnargli lo stile nel file css

let inputCity = document.createElement("input"); // creo l'elemento inputCity per visualizzare l'input
document.body.appendChild(inputCity);
inputCity.id = "inputCity"; // aggiungo un id all'elemento inputCity per assegnargli lo stile nel file css
document.getElementById("inputCity").placeholder = "Search a new city"; // assegno un valore al placeholder dell'input

let searchButton = document.createElement("button"); // creo l'elemento searchButton per visualizzare il bottone della ricerca
searchButton.textContent = "Search"; // assegno un valore al searchButton
document.body.appendChild(searchButton);
searchButton.id = "searchButton"; // aggiungo un id all'elemento searchButton per assegnargli lo stile nel file css

divInputCity.appendChild(inputCity);
divInputCity.appendChild(searchButton);
