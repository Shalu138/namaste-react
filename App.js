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

// Object created for Restaurant
const resList = [
  {
    type: "restaurant",
    data: {
      id: "1001",
      name: "BOX8 - Desi Meals",
      cuisine: "North Indian, Biryani",
      typeOfRes: "Cloud Kitchen",
      costForTwo: "400",
      avgRating: "4.3",
      deliveryTime: "25-30 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/a260a21f-1b2c-4690-998a-695887bbbd1f_289294.jpg",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1002",
      name: "La Pino'z Pizza",
      cuisine: "Italian, Pizzas, Fast Food",
      typeOfRes: "Casual Dining",
      costForTwo: "500",
      avgRating: "4.1",
      deliveryTime: "20-25 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f8334117211ec4e74406caebec280995",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1003",
      name: "Barbeque Nation",
      cuisine: "North Indian, Barbeque, Kebabs",
      typeOfRes: "Buffet / Fine Dining",
      costForTwo: "1500",
      avgRating: "4.5",
      deliveryTime: "40-45 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/th67be72ccbc62a875a6cebec280995",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1004",
      name: "Chai Point",
      cuisine: "Bakery, Beverages, Cafe",
      typeOfRes: "Cafe / Quick Service",
      costForTwo: "250",
      avgRating: "3.9",
      deliveryTime: "15-20 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bpx34117211ec4e74406caebec280995",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1005",
      name: "Wow! Momo",
      cuisine: "Tibetan, Chinese, Fast Food",
      typeOfRes: "Quick Service Restaurant",
      costForTwo: "350",
      avgRating: "4.2",
      deliveryTime: "20-30 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/9924a4117211ec4e74406caebec280995",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1006",
      name: "Sagar Ratna",
      cuisine: "South Indian, Pure Veg",
      typeOfRes: "Family Restaurant",
      costForTwo: "600",
      avgRating: "4.4",
      deliveryTime: "30-35 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sr834117211ec4e74406caebec280995",
    },
  },
];

console.log(resList);

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        src={resData.data.image}
        alt="restaurant-image"
        className="res-img"
      />
      <h4 className="res-name">{resData.data.name}</h4>
      <div>Rs. {resData.data.costForTwo}</div>
      <div>{resData.data.avgRating} Star</div>
      <div>{resData.data.cuisine}</div>
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
            <RestaurantCard resData={resList[0]} />
            <RestaurantCard resData={resList[1]} />
            {/* <RestaurantCard resName="Specia Bistro" cusine="Italian" /> */}
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
