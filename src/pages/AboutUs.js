import React from "react";
import GetStringFromJSON from "../components/GetStringFromJSON";

export default function AboutUs(props) {
  return (
    <div className="brightBeckground">
      <h1>
        <GetStringFromJSON stringID="about_label" language={props.language} />
      </h1>
      <p>
        <GetStringFromJSON stringID="about_content" language={props.language} />
      </p>
    </div>
  );
}
