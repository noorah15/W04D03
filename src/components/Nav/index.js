import React from "react";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import "./style.css";

function Nav() {
  let history = useHistory();

  const viewCardPage = (id) => {
    console.log(id);
    history.goBack();
  };

  return (
    <div className="nav">
      <ul>
        <li className="icon">
          {" "}
          <Link
            onClick={() => {
              viewCardPage();
            }}
          >
            {" "}
            <IoArrowBackCircleSharp />{" "}
          </Link>{" "}
        </li>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/cards"> Cards </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
