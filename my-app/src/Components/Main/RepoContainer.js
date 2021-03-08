import React, { useState, useEffect } from "react";

const RepoContainer = () => {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    (async () => {
      let apiUrl = "https://api.github.com/users/francisN21/repos";
      const repository = await fetch(apiUrl)
        .then((response) => {
          let data = response.json();
          return data;
        })
        .then((data) => {
          return data;
        });

      setRepo(repository);
    })();
  }, []);

  return (
    <div className="overflow">
      {repo.map((post, index) => (
        <div className="container c2" key={index}>
          <div className=" col-md-12 c1">
            <h4>{post.name}</h4>
            <hr />

            <p>
              <a href={post.url} alt="Github" className="link">
                {post.url}
              </a>
            </p>
            <p>Description: {post.description}</p>
            <p>{post.language}</p>
            <p>Open Issues: {post.open_issues}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoContainer;
