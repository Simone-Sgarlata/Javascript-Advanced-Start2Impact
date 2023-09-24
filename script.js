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

document.addEventListener("DOMContentLoaded", () => {
  let cityName = "";

  searchButton.addEventListener("click", () => {
    cityName = inputCity.value;
    const basicUrl = `https://api.teleport.org/api/urban_areas/slug:${cityName}/scores/`;

    const oldTitleDescription = document.getElementById("titleDescription");
    const oldDescriptionCity = document.getElementById("descriptionCity");
    const oldTitleCategory = document.getElementById("titleCategory");
    const oldCategories = document.getElementById("categories");
    const oldTitleScoreCity = document.getElementById("titleScoreCity");
    const oldScoreCity = document.getElementById("scoreCity");

    if (oldTitleDescription) {
      oldTitleDescription.remove();
    }
    if (oldDescriptionCity) {
      oldDescriptionCity.remove();
    }
    if (oldTitleCategory) {
      oldTitleCategory.remove();
    }
    if (oldCategories) {
      oldCategories.remove();
    }
    if (oldTitleScoreCity) {
      oldTitleScoreCity.remove();
    }
    if (oldScoreCity) {
      oldScoreCity.remove();
    }
    fetch(basicUrl, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let titleDescription = document.createElement("div");
        document.body.appendChild(titleDescription);
        titleDescription.textContent = "Description of the city: ";
        titleDescription.id = "titleDescription";

        let descriptionCity = document.createElement("div");
        document.body.appendChild(descriptionCity);
        if (data.summary) {
          descriptionCity.textContent = data.summary.replace(
            /<\/?p>|<\/?b>/g,
            ""
          );
        }
        descriptionCity.id = "descriptionCity";

        let titleCategory = document.createElement("div");
        document.body.appendChild(titleCategory);
        titleCategory.textContent = "Categories: ";
        titleCategory.id = "titleCategory";

        let categories = document.createElement("div");
        document.body.appendChild(categories);
        categories.id = "categories";
        document.getElementById("categories");

        if (data.categories) {
          data.categories.forEach((element, index) => {
            const categoryName = element.name;
            const categoryScore = element.score_out_of_10;

            const category = document.createTextNode(
              `Name: ${categoryName}, Score: ${categoryScore}`
            );

            categories.appendChild(category);

            if (index < data.categories.length - 1) {
              categories.appendChild(document.createElement("br"));
            }
          });
        }

        let titleScoreCity = document.createElement("div");
        document.body.appendChild(titleScoreCity);
        titleScoreCity.textContent = "Score of the city: ";
        titleScoreCity.id = "titleScoreCity";

        let scoreCity = document.createElement("div");
        document.body.appendChild(scoreCity);
        if (data.teleport_city_score) {
          scoreCity.textContent = data.teleport_city_score;
        }
        scoreCity.id = "scoreCity";
      })
      .catch((error) => {
        console.log("Error for API request", error);
      });
  });
});
