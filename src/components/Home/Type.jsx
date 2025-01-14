import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Reactjs | Nodejs Developer",
              "Passionate Blockchain Enthusiast",
              "Committed Open Source Contributor",
              "Effective Problem Solver",
              "Cybersecurity Enthusiast"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type