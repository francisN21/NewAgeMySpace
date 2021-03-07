import React from "react";
import Resume from "./Main/Francisco Rones_Resume.docx";

const Contact = () => {
  return (
    <div class="container c1">
      <div class="row">
        <div class="col-md-12 c2">
          <div class="page-header">
            <h1>Contact</h1>
            <hr />
          </div>
          <div class="col-md-12">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/franciscorones/"
                  alt="LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={Resume} download="franciscoronesresume" alt="resume">
                  Resume
                </a>
              </li>

              <li>
                <a href="https://github.com/francisN21" alt="Github">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ininorone_z/" alt="Github">
                  Instagram
                </a>
              </li>
              <li>ininorones@gmail.com</li>
              <li>5106853884</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
