import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    "div", //target
    {}, // attributes to be passed in
    [
      //children
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {
        name: "Ben",
        animal: "Dog",
        breed: "Wheaten",
      }),
      React.createElement(Pet, {
        name: "Frank",
        animal: "Dog",
        breed: "Doodle",
      }),
      React.createElement(Pet, {
        name: "Winston",
        animal: "Dog",
        breed: "Beagle",
      }),
    ]
  );
};

render(React.createElement(App), document.getElementById("root"));
