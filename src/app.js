function generateTitles(event) {
  event.preventDefault();

  let titlesElement = document.querySelector("#titles");
  titlesElement.innerHTML = "results here";
}

let titleFormElement = document.querySelector("#title-generator-form");
titleFormElement.addEventListener("submit", generateTitles);
