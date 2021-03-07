import React, { useEffect, useState } from "react";
import DisplayImage from "./DP.jpg";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    (async () => {
      let apiUrl = "https://api.github.com/users/francisN21";
      const user = await fetch(apiUrl)
        .then((response) => {
          console.log(response);
          let data = response.json();
          return data;
        })
        .then((data) => {
          return data;
        });

      setProfile(user);
    })();
  }, []);
  return (
    <div className="container c1">
      <div className="row">
        <div className="col-md-12 c2">
          <div className="page-header">
            <h1>Portfolio</h1>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-3">
              <img
                src={DisplayImage}
                alt="Display Pic"
                className="img-thumbnail"
                height="200"
                width="300"
              />
            </div>
            {/* <!-- my info --> */}
            <div className="col-sm-8">
              <ul>
                <li>Full Name: Francisco Niño Rones</li>
                <li>Location: San Pablo, Ca</li>
                <li>Age : 27</li>
                <li>
                  Hobbies:
                  <ul>
                    <li>Coding</li>
                    <li>Cars</li>
                    <li>Computer Games</li>
                    <li>Guitar</li>
                    <li>PC Builds</li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- container for the bottom description     --> */}
            <div className="row">
              <div className="col-md-12">
                <figure>
                  <p>
                    "Hello! I am Francisco, we are on the last stretch of our
                    coding bootcamp and so far I've learned how to create mySQL,
                    Express and Node app and they are all show cased below. Very
                    excited on learning Mongo and React to complete the stack.
                    Currently I am working on improving the PWDGenerator project
                    to make it a full stack app and another personal project to
                    have more practice and project under my belt."
                  </p>
                  <p>
                    "Please check out my featured Repositories down below. I
                    used API fetch on github to append my repo below. Thank you"
                  </p>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
