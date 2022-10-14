import React from "react";
import {Link} from "react-router-dom";

const Navbar = ({setUser}) => {
    function handleLogoutClick() {
        fetch("/api/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
  <div className="navbar container">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/flights">Available flights</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/booking">Booking</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/bookinginfo">Update your details</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/users">Feedback</Link>
        </li> */}
      </ul>
    </div>
        <p className="nav-item">
            <button onClick={handleLogoutClick} className="nav-link" to="/logout">Logout</button>
        </p>
  </div>
</nav>
  );
};

export default Navbar;