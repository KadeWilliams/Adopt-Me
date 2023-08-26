import React from "react";
import ReactDOM from "react-dom";

const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.type),
        React.createElement("h2", {}, props.breed),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Oliver",
            type: "Dog",
            breed: "Yorkie",
        }),
        React.createElement(Pet, {
            name: "Hayley",
            type: "Dog",
            breed: "Yorkie",
        }),
        React.createElement(Pet, {
            name: "Willow",
            type: "Dog",
            breed: "Yorkie",
        }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
