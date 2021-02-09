let repo1EL = document.querySelector(".repo1");
let r1d1EL = document.querySelector(".r1d1");
let r1d2EL = document.querySelector(".r1d2");
let r1d3EL = document.querySelector(".r1d3");
let r1d4EL = document.querySelector(".r1d4");
let r1d5EL = document.querySelector(".r1d5");

let repo2EL = document.querySelector(".repo2");
let r2dEL = document.querySelector(".r2d1");
let r2d2EL = document.querySelector(".r2d2");
let r2d3EL = document.querySelector(".r2d3");
let r2d4EL = document.querySelector(".r2d4");
let r2d5EL = document.querySelector(".r2d5");

let repo3EL = document.querySelector(".repo3");
let r3dEL = document.querySelector(".r3d1");
let r3d2EL = document.querySelector(".r3d2");
let r3d3EL = document.querySelector(".r3d3");
let r3d4EL = document.querySelector(".r3d4");
let r3d5EL = document.querySelector(".r3d5");

// placeholder
let repo = {};

// for my repo
function getMyRepo() {
  let apiUrl = "https://api.github.com/users/francisN21/repos";

  fetch(apiUrl)
    .then((response) => {
      console.log(response);
      let data = response.json();
      return data;
    })
    .then((data) => {
      console.log(data);
      // r1 for repo 1
      repo.nameR1 = data[15].full_name;
      repo.htmlR1 = data[15].html_url;
      repo.descriptionR1 = data[15].description;
      repo.issueR1 = data[15].open_issues;
      repo.langR1 = data[15].language;

      // r1 for repo 2
      repo.nameR2 = data[8].full_name;
      repo.htmlR2 = data[8].html_url;
      repo.descriptionR2 = data[8].description;
      repo.issueR2 = data[8].open_issues;
      repo.langR2 = data[8].language;

      // r1 for repo 2
      repo.nameR3 = data[17].full_name;
      repo.htmlR3 = data[17].html_url;
      repo.descriptionR3 = data[17].description;
      repo.issueR3 = data[17].open_issues;
      repo.langR3 = data[17].language;
    })
    .then(() => {
      displayRepo();
    });
}

getMyRepo();

let displayRepo = () => {
  // repo 1
  repo1EL.innerHTML = "<a href='" + repo.htmlR1 + "'>" + repo.nameR1 + "</a>";
  r1d2EL.innerHTML = `Description: ${repo.descriptionR1}`;
  r1d3EL.innerHTML = `Open Issue: ${repo.issueR1}`;
  r1d4EL.innerHTML = `Language: ${repo.langR1}`;
  r1d5EL.innerHTML = `<img src="./Assets/images/PWDGen.PNG" alt="weatherapp" class="img-thumbnail" height="250" width="350">`;
  // repo 2
  repo2EL.innerHTML = "<a href='" + repo.htmlR2 + "'>" + repo.nameR2 + "</a>";
  r2d2EL.innerHTML = `Description: ${repo.descriptionR2}`;
  r2d3EL.innerHTML = `Open Issue: ${repo.issueR2}`;
  r2d4EL.innerHTML = `Language: ${repo.langR2}`;
  r2d5EL.innerHTML = `<img src="./Assets/images/MTG.PNG" alt="passwordapp" class="img-thumbnail" height="350" width="850">`;
  // repo 3
  repo3EL.innerHTML = "<a href='" + repo.htmlR3 + "'>" + repo.nameR3 + "</a>";
  r3d2EL.innerHTML = `Description: ${repo.descriptionR3}`;
  r3d3EL.innerHTML = `Open Issue: ${repo.issueR3}`;
  r3d4EL.innerHTML = `Language: ${repo.langR3}`;
  r3d5EL.innerHTML = `<img src="./Assets/images/READMEBOT.gif" alt="portfolio" class="img-thumbnail" height="350" width="350">`;
};
