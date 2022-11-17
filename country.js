//search function

const url = "gdgd";
function Search() {
  //accessing all DIVS
  const Capital = document.getElementById("Capital");
  const Continent = document.getElementById("Continent");
  const population = document.getElementById("Popu");
  const Currency = document.getElementById("Cur");
  const language = document.getElementById("Common");
  const img = document.getElementById("img");
  const country = document.querySelector(".para");
  const country_value = document.getElementById("input");
  const url = `https://restcountries.com/v3.1/name/${country_value.value}`;
  // catching errors
  if (country_value.value == "" || country_value.value.length == 1) {
    alert("The input field cannot be left empty");
  } else {
    //rendering result
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0]);
        img.src = `${json[0].flags.svg}`;
        country.innerHTML = json[0].name.common;
        Capital.innerHTML = `Capital: ${json[0].capital[0]}`;
        Continent.innerHTML = `Continents: ${json[0].continents[0]}`;
        population.innerHTML = `Population: ${json[0].population}`;
        Currency.innerHTML = `Currency: ${
          json[0].currencies[Object.keys(json[0].currencies)].name
        }`;
        language.innerHTML = `Language: ${Object.values(json[0].languages)
          .toString()
          .split(",")
          .join(",")}`;
      });
  }
}
