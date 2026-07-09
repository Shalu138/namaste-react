import { LOGO_URL } from "../utils/constants";

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
          <img src={LOGO_URL} alt="Logo" />
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

export default Header;
