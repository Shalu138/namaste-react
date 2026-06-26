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

// *************** FOOD DELIVERY APP *****************
const Header = () => {
  // inline styling - just like creating an object
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div className="headerMain">
      <div className="container" style={headerStyle}>
        <a href="/" className="logo">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/005/513/590/small/catering-quality-food-design-premium-logo-vector.jpg"
            alt="Logo"
          />
        </a>
        <div className="nav-right">
          <a href="javascript:void(0)" className="nav-item">
            Home
          </a>
          <a href="javascript:void(0)" className="nav-item">
            About
          </a>
          <a href="javascript:void(0)" className="nav-item">
            Restaurants
          </a>
          <a href="javascript:void(0)" className="nav-item">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log(props.resName);
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/a260a21f-1b2c-4690-998a-695887bbbd1f_289294.jpg"
        alt="restaurant-image"
        className="res-img"
      />
      <h4 className="res-name">{props.resName}</h4>
      <div>{props.cusine}</div>
      <div>4 Star</div>
      <div>25-30 min</div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="search-bar">
          <form>
            <input type="text" />
            <button type="submit">Search</button>
          </form>
        </div>

        <div className="restaurant-wrapper">
          <div className="restaurant-row">
            <RestaurantCard resName="Box 8" cusine="North India" />
            <RestaurantCard resName="Specia Bistro" cusine="Italian" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  ); // return is important. But why?
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
