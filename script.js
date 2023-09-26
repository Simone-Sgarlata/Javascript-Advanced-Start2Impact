let description = document.createElement("div"); // creo l'elemento description per visualizzare il div con la descrizione
description.textContent =
  "Start searching a new city and view the results (only in english)"; // assegno un valore al description
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

document.getElementById("inputCity"); // recupero l'elemento inputCity grazie all'id
inputCity.addEventListener("input", () => {
  // mi metto in ascolto di inputCity
  let inputValue = inputCity.value; // creo una variabile alla quale assegno il valore dell'input

  inputValue = inputValue.toLowerCase(); // sostituisco eventuali lettere maiuscole con lettere minuscole che mi farebbero fallire la chiamata
  inputCity.value = inputValue; // riassegno la città con le lettere minuscole a inputCity.value
});

document.addEventListener("DOMContentLoaded", () => {
  // fino a che il contenuto del DOM non è stato caricato non eseguo nulla
  let cityName = ""; // inizializzo la valiabile cityName

  searchButton.addEventListener("click", () => {
    // aggiungo l'addEventListener sul click del bottone search

    cityName = inputCity.value; // assegno a cityName il valore inserito nell'input
    const basicUrl = `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`; // basicUrl per la chiamata usando la variabile cityName per rendere dinamica la ricerca della città

    const oldTitleDescription = document.getElementById("titleDescription"); // recupero l'elemento titleDescription dall'id
    const oldDescriptionCity = document.getElementById("descriptionCity"); // recupero l'elemento descriptionCity dall'id
    const oldTitleCategory = document.getElementById("titleCategory"); // recupero l'elemento titleCategory dall'id
    const oldCategories = document.getElementById("categories"); // recupero l'elemento categories dall'id
    const oldTitleScoreCity = document.getElementById("titleScoreCity"); // recupero l'elemento titleScoreCity dall'id
    const oldScoreCity = document.getElementById("scoreCity"); // recupero l'elemento scoreCity dall'id

    if (oldTitleDescription) {
      oldTitleDescription.remove(); // elimino l'elemento oldTitleDescription per eliminare i vecchi dati
    }
    if (oldDescriptionCity) {
      oldDescriptionCity.remove(); // elimino l'elemento oldDescriptionCity per eliminare i vecchi dati
    }
    if (oldTitleCategory) {
      oldTitleCategory.remove(); // elimino l'elemento oldTitleCategory per eliminare i vecchi dati
    }
    if (oldCategories) {
      oldCategories.remove(); // elimino l'elemento oldCategories per eliminare i vecchi dati
    }
    if (oldTitleScoreCity) {
      oldTitleScoreCity.remove(); // elimino l'elemento oldTitleScoreCity per eliminare i vecchi dati
    }
    if (oldScoreCity) {
      oldScoreCity.remove(); // elimino l'elemento oldScoreCity per eliminare i vecchi dati
    }
    fetch(basicUrl, {
      // faccio il fetch della chiamata usando il basicUrl dichiarato in precedenza
      method: "GET", // eseguo una GET
    })
      .then((response) => response.json()) // recupero la response
      .then((data) => {
        if (data.summary) {
          // controllo se esiste data.summary per effettaure in seguito della logica

          let divCityInfo = document.createElement("div"); // creo l'elemento divCityInfo per visualizzare il div che continee le informazioni dall'API
          document.body.appendChild(divCityInfo); // aggiungo l'elemento divCityInfo al corpo della pagina per renderlo visibile
          divCityInfo.id = "divCityInfo"; // aggiungo un id all'elemento divCityInfo per assegnargli lo stile nel file css

          let titleDescription = document.createElement("div"); // creo l'elemento titleDescription per visualizzare il div con il titolo della descrizione
          document.body.appendChild(titleDescription); // aggiungo l'elemento titleDescription al corpo della pagina per renderlo visibile
          titleDescription.textContent = "Description of the city: "; // assegno un valore al titolo della descrizione
          titleDescription.id = "titleDescription"; // aggiungo un id all'elemento titleDescription per assegnargli lo stile nel file css

          let descriptionCity = document.createElement("div"); // creo l'elemento descriptionCity per visualizzare il div con il titolo della descrizione della città
          document.body.appendChild(descriptionCity); // aggiungo l'elemento descriptionCity al corpo della pagina per renderlo visibile

          descriptionCity.textContent = data.summary.replace(
            /<\/?p>|<\/?b>/g,
            ""
          ); // elimino gli elementi non necessari nella descrizione della città dopo la chiamata e dopo aver verificato che esiste l'elemento data.summary
          descriptionCity.id = "descriptionCity"; // aggiungo un id all'elemento titleCategory per assegnargli lo stile nel file css
        }

        if (data.categories) {
          // controllo se esiste data.categories per effettaure in seguito della logica

          let titleCategory = document.createElement("div"); // creo l'elemento titleDescription per visualizzare il div con il titolo delle categorie della città
          document.body.appendChild(titleCategory); // aggiungo l'elemento titleCategory al corpo della pagina per renderlo visibile
          titleCategory.textContent = "Categories: "; // assegno un valore al titolo delle categorie
          titleCategory.id = "titleCategory"; // aggiungo un id all'elemento titleCategory per assegnargli lo stile nel file css

          let categories = document.createElement("div"); // creo l'elemento categories per visualizzare il div con le categorie della città
          document.body.appendChild(categories); // aggiungo l'elemento categories al corpo della pagina per renderlo visibile
          categories.id = "categories"; // aggiungo un id all'elemento categories per assegnargli lo stile nel file css
          document.getElementById("categories"); // aggiungo un id all'elemento categories per assegnargli lo stile nel file css

          data.categories.forEach((element, index) => {
            // ciclo ogni categoria recuperata dalla chiamata
            const categoryName = element.name; // assegno il nome di ogni categoria a categoryName
            const categoryScore = element.score_out_of_10; // assegno lo score di ogni categoria a categoryScore

            const category = document.createTextNode(
              `Name: ${categoryName}, Score: ${categoryScore}`
            ); // creo un nodo testo con una stringa formata dalla concatenazione delle variabili categoryName e categoryScore

            categories.appendChild(category); // aggiungo l'elemento category come figlio dell'elemento categories

            if (index < data.categories.length - 1) {
              categories.appendChild(document.createElement("br")); // mando a capo ogni categoria recuperata per una migliore visualizzazione
            }
          });
        }

        if (data.teleport_city_score) {
          // controllo se esiste data.teleport_city_score per effettaure in seguito della logica

          let titleScoreCity = document.createElement("div"); // creo l'elemento titleScoreCity per visualizzare il div con il titolo dello score della città
          document.body.appendChild(titleScoreCity); // aggiungo l'elemento titleScoreCity al corpo della pagina per renderlo visibile
          titleScoreCity.textContent = "Score of the city: "; // assegno un valore al titolo dello score della città
          titleScoreCity.id = "titleScoreCity"; // aggiungo un id all'elemento titleScoreCity per assegnargli lo stile nel file css

          let scoreCity = document.createElement("div"); // creo l'elemento scoreCity per visualizzare il div con lo score della città
          document.body.appendChild(scoreCity); // aggiungo l'elemento scoreCity al corpo della pagina per renderlo visibile

          scoreCity.textContent = data.teleport_city_score; // assegno il valore dello score dalla chiamata all'elemento scoreCity
          scoreCity.id = "scoreCity"; // aggiungo un id all'elemento scoreCity per assegnargli lo stile nel file css
        }

        divCityInfo.appendChild(titleDescription); // aggiungo l'elemento titleDescription come figlio dell'elemento divCityInfo
        divCityInfo.appendChild(descriptionCity); // aggiungo l'elemento descriptionCity come figlio dell'elemento divCityInfo
        divCityInfo.appendChild(titleCategory); // aggiungo l'elemento titleCategory come figlio dell'elemento divCityInfo
        divCityInfo.appendChild(categories); // aggiungo l'elemento categories come figlio dell'elemento divCityInfo
        divCityInfo.appendChild(titleScoreCity); // aggiungo l'elemento titleScoreCity come figlio dell'elemento divCityInfo
        divCityInfo.appendChild(scoreCity); // aggiungo l'elemento scoreCity come figlio dell'elemento divCityInfo
      })
      .catch((error) => {
        alert(
          "Error with the API request, city not found, try searching the name of the city in english"
        ); // aggiungo un alert per avvisare degli errori con la chiamata API
        console.log("Error for API request", error);
      });
  });
});
