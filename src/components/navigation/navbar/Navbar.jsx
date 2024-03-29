import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../../context/auth.context";

function Navbar() {
  const navigate = useNavigate();

  const { isUserActive, authenticatedUser, isUserAdmin, user } =
    useContext(AuthContext);

  const handleLogout = () => {
    // destruir el token con removeItem de LocalStorage
    localStorage.removeItem("authToken");
    authenticatedUser();
    navigate("/");
  };

  if (isUserActive === true) {
    return (
      <div className="nav">
        <div className="nav--image">
          <img src="" alt="" />
        </div>

        <div className="nav--links">
          <Link className="links" to={"/"}>
            HOME
          </Link>
          <Link className="links" to={"/proposals"}>
            PROPOSALS
          </Link>

          <Link className="links" to={"/profile"}>
            PROFILE
          </Link>
        </div>

        <div className="signup-button">
          <button className="sign-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="nav">
        <div className="nav--image">
          <img src="" alt="" />
        </div>

        <div className="nav--links">
          <Link className="links" to={"/"}>
            HOME
          </Link>
          <Link className="links" to={"/proposals"}>
            PROPOSALS
          </Link>
          <Link className="links" to={"/signup"}>
            SIGN UP
          </Link>
          <Link className="links" to={"/login"}>
            LOGIN
          </Link>
        </div>

        <div className="signup-button">
          <button className="sign-btn" onClick={handleLogout}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Navbar;
