import "./nav.css";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgsrc/logo.png";
import cart_icon from "../../assets/imgsrc/cart_icon.png";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../components/products/ProductSllice";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart);
  
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false); // <-- hamburger toggle
  useEffect(() => {
    // Clear local search input and Redux search query on route change
    setSearch("");
    dispatch(setSearchQuery(""));
  }, [location.pathname, dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(search));

    navigate("/filter-data");
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="navbar  container">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>MWardrobe</p>
          </div>

          {/* Hamburger Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            {/* <ul className="nav-menu"> */}
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/men" onClick={() => setMenuOpen(false)}>
                Men
              </NavLink>
            </li>
            <li>
              <NavLink to="/women" onClick={() => setMenuOpen(false)}>
                Women
              </NavLink>
            </li>
            <li>
              <NavLink to="/kids" onClick={() => setMenuOpen(false)}>
                Kids
              </NavLink>
            </li>
          </ul>

          <div className="nav-cart">
  <form onSubmit={handleSearch} className="nav-search-form">
    <input
      type="search"
      className="search"
      placeholder="search products"
      onChange={(e) => setSearch(e.target.value)}
    />
  </form>

  {/* <NavLink to="/login">
    <button>Login</button>
  </NavLink> */}

  <NavLink to="/cart">
    <div className="cart-icon-container">
      <img src={cart_icon} alt="Cart" />
      <div className="nav-cart-count">{cartItems.products.length}</div>
    </div>
  </NavLink>
</div>
        </div>
        
      </header>
    </>
  );
}
