import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

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

export default Body;
