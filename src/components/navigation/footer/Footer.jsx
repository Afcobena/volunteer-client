import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="footer--column__left">
        <div className="footer--column__left--image">
          <img src="" alt="" />
        </div>

        <h2 className="footer--column__left--title">
          Creating a better world, one cause at a time
        </h2>

        {/* CREAR COMPONENTE DE SUSCRIBE */}
        <div className="footer--column__left--suscribe">
          <h3>Suscribe</h3>
        </div>
      </div>

      <div className="footer--column__rigth">
        <div className="footer--column__rigth--1">
          <Link className="footer--column__rigth--1__home" to={"/"}>Home</Link>

          <Link className="footer--column__rigth--1__project" to={"/"}>Project</Link>

          <Link className="footer--column__rigth--1__track" to={"/"}>Track Record</Link>

          <Link className="footer--column__rigth--1__programs" to={"/"}>Programs</Link>
        </div>

        <div className="footer--column__rigth--2">
          <Link className="footer--column__rigth--2__campaign" to={"/"}>Campaign</Link>

          <Link className="footer--column__rigth--2__category" to={"/"}>Category</Link>

          <Link className="footer--column__rigth--2__donate" to={"/"}>Donate</Link>

          <Link className="footer--column__rigth--2__make--campaign" to={"/"}>Make Campaign</Link>
        </div>

        <div className="footer--column__rigth--3">
          <Link className="footer--column__rigth--3__our--story" to={"/"}>Our Story</Link>

          <Link className="footer--column__rigth--3__volunteer" to={"/"}>Volunteer</Link>
        </div>

        <div className="footer--column__rigth--4">
          <h3 className="footer--column__rigth--4__number">+34 636929963</h3>
          <h3 className="footer--column__rigth--4__email">adrianfcobena@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
