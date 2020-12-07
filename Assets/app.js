

let getMyRepo = function () {
    let apiUrl = 'https://api.github.com/users/francisN21/repos';
  
    fetch(apiUrl)
      .then( (response) => {
          console.log(response);
          let data = response.json()
          return data;
      })
      .then( (data) => {
            console.log(data);

            console.log(data[10].full_name);
            console.log(data[10].html_url);
            console.log(data[10].description);
            console.log(data[10].open_issue);
            console.log(data[10].languages);

            console.log(data[8]);
            console.log(data[4]);
      })
      .then( () => {
        
      })
        
  };

getMyRepo();