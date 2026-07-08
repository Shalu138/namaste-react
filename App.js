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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/e5f54df4ed8bac458b801ede76ee37d0",
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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/x1bnynpgagxsy5ihuip9",
    },
  },
  {
    type: "restaurant",
    data: {
      id: "1004",
      name: "Chayos",
      cuisine: "Bakery, Beverages, Cafe",
      typeOfRes: "Cafe / Quick Service",
      costForTwo: "250",
      avgRating: "3.9",
      deliveryTime: "15-20 min",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_6488.JPG",
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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/25/2b189a59-4842-46d9-9c19-67c1a4e38348_1342213.JPG",
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
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/xqinz4rdvxbexou7df1h",
    },
  },
];

console.log(resList);

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, costForTwo, avgRating, cuisine } = resData?.data;
  return (
    <div className="res-card">
      <img
        src={resData.data.image}
        alt="restaurant-image"
        className="res-img"
      />
      <h4 className="res-name">{name}</h4>
      <div>Rs. {costForTwo}</div>
      <div>{avgRating} Star</div>
      <div>{cuisine}</div>
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
            {resList.map((restaurant) => (
              <RestaurantCard key={restaurant.data.id} resData={restaurant} />
            ))}
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
