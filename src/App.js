const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
