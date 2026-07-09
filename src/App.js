import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

// *************** FOOD DELIVERY APP *****************

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
