let repo1EL = document.querySelector(".repo1");

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
            repo1EL.innerHTML = `${data.nameR1}`;
            data.htmlR1 = data[10].html_url;
            data.descriptionR1 = data[10].description;
            data.issueR1 = data[10].open_issue;
            data.langR1 = data[10].languages;

            console.log(data[8]);
            console.log(data[4]);
      })
  };

getMyRepo();
