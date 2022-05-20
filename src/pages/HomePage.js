import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";

import about_us from "../images/about_us.jpg";

export default function HomePage(props) {
  return (
    <div className="brightBeckground">
      <h2>
        <GetStringFromJSON stringID="home_headline" language={props.language} />
      </h2>
      <p>
        <img src={about_us} alt="Logo" className="textImage" />
        <GetStringFromJSON stringID="home_content" language={props.language} />
      </p>
    </div>
  );
}
