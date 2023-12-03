import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <p>Revision Portal for Software Testing</p>
      <p>
        <i>- by Uddeshya Raj</i>
      </p>
      <br />
      <p>
        <strong>Email: </strong> <a href="mailto: uddeshya1901@gmail.com">uddeshya1901@gmail.com</a>
      </p>
      <p>
        <strong>
          LinkedIn:{" "}
        </strong>
          <a href="https://www.linkedin.com/in/uddeshya-raj-17b589200/" target="_blank">
            Link
          </a>
      </p>
      <br />
      <p>
          <strong>Chapterwise PDFs (Drive Link):{" "}</strong>
          <a href="https://drive.google.com/drive/folders/1ZF8BbL012nj6dNoRVCAh0mNZP709-9DR" target="_blank">
             Link
          </a>{" "}
      </p>
    </div>
  );
};

export default About;
