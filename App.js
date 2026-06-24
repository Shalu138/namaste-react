import ReactDOM from "react-dom/client";

//   const h1 = document.createElement("h1");
//   h1.innerHTML = "This is Javascript DOM generated code!";

//   const root = document.getElementById("root");
//   root.appendChild(h1);

//   *****************************************
//                 WITH REACT
// *******************************************
// const heading = React.createElement("h1", {}, "Hello World from React!");

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

// root.render(heading);

// *****************************************
//    CREATING MULTIPLE CHILD ELEMENTS
// *****************************************
{
  /* <div id="parent">
  <div id="child">
    <h1>Nested Element</h1>
  </div>
</div> */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Nested Element"),
//   ),
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// *****************************************
//    CREATING MULTIPLE CHILD ELEMENTS with SIBLING
// *****************************************
{
  /* <div id="parent">
  <div id="child">
    <h1>Nested Element</h1>
    <h2>H2 Heading</h2>
  </div>
  <div id="child2">
    <h1>Nested Element</h1>
    <h2>H2 Heading</h2>
  </div>
</div> */
}

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Nested Element"),
//     React.createElement("h2", {}, "H2 Heading"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "Nested2 Element"),
//     React.createElement("h2", {}, "H2 Heading"),
//   ]),
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// ****************** USING JSX ******************
// const jsxheading = <h1 className="jsx-heading">Rendering JSX Heading!!</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

// *************** React Component => JS functions that return jsx or react elements **************

// functional component
const HeadingComponent = () => {
  return <h1>Creating Heading Component!</h1>;
};

// nested react element (Component Composition)
const HeadingComponent2 = () => (
  <div>
    <HeadingComponent />
    <h1>Trying the other way</h1>
    <p>XYZ</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2 />);
