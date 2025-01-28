/***
 * <div id="parent">
 * <div id="child">
 * <h1>Hello this is a hi 1 tag</h1>
 * </div>
 * </div>
 *
 *
 *
 *
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello this is a hi 1 tag"),
    React.createElement("h2", {}, "Hello this is a hi 1 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello this is a hi 1 tag"),
    React.createElement("h2", {}, "Hello this is a hi 1 tag"),
  ])
]
);

console.log(parent);

//const heading = React.createElement("h1", {id:"heading",xyz:"abc"}, "Hello World");
const root = ReactDOM.createRoot(document.getElementById("root")); // Change ReactDom to ReactDOM
root.render(parent);
