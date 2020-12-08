let repo1EL = document.querySelector(".repo1");
let r1d1EL = document.querySelector(".r1d1");
let r1d2EL = document.querySelector(".r1d2");
let r1d3EL = document.querySelector(".r1d3");
let r1d4EL = document.querySelector(".r1d4");

let repo2EL = document.querySelector(".repo2");
let r2dEL = document.querySelector(".r2d1");
let r2d2EL = document.querySelector(".r2d2");
let r2d3EL = document.querySelector(".r2d3");
let r2d4EL = document.querySelector(".r2d4");

let repo3EL = document.querySelector(".repo3");
let r3dEL = document.querySelector(".r3d1");
let r3d2EL = document.querySelector(".r3d2");
let r3d3EL = document.querySelector(".r3d3");
let r3d4EL = document.querySelector(".r3d4");


function getMyRepo(){
    let apiUrl = 'https://api.github.com/users/francisN21/repos';
  
    fetch(apiUrl)
      .then( (response) => {
          console.log(response);
          let data = response.json();
          return data;
      })
      .then( (data) => {
            console.log(data);
            // r1 for repo 1
            data.nameR1 = data[10].full_name;
            data.htmlR1 = data[10].html_url;
            data.descriptionR1 = data[10].description;
            data.issueR1 = data[10].open_issues;
            data.langR1 = data[10].language;

            repo1EL.innerHTML = "<a href='" + data.htmlR1 + "'>" + data.nameR1 + "</a>";
            r1d2EL.innerHTML = `Description: ${data.descriptionR1}`;
            r1d3EL.innerHTML = `Open Issue: ${data.issueR1}`;
            r1d4EL.innerHTML = `Language: ${data.langR1}`;

            // r1 for repo 2
            data.nameR2 = data[8].full_name;
            data.htmlR2 = data[8].html_url;
            data.descriptionR2 = data[8].description;
            data.issueR2 = data[8].open_issues;
            data.langR2 = data[8].language;

            repo2EL.innerHTML = "<a href='" + data.htmlR2 + "'>" + data.nameR2 + "</a>";
            r2d2EL.innerHTML = `Description: ${data.descriptionR2}`;
            r2d3EL.innerHTML = `Open Issue: ${data.issueR2}`;
            r2d4EL.innerHTML = `Language: ${data.langR2}`;

            // r1 for repo 2
            data.nameR3 = data[4].full_name;
            data.htmlR3 = data[4].html_url;
            data.descriptionR3 = data[4].description;
            data.issueR3 = data[4].open_issues;
            data.langR3 = data[4].language;

            repo3EL.innerHTML = "<a href='" + data.htmlR3 + "'>" + data.nameR3 + "</a>";
            r3d2EL.innerHTML = `Description: ${data.descriptionR3}`;
            r3d3EL.innerHTML = `Open Issue: ${data.issueR3}`;
            r3d4EL.innerHTML = `Language: ${data.langR3}`;
      })
      .then(()=>{

      })
  };

getMyRepo();
