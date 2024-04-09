import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/tic-tac-toe">Tic Tac Toe</Link>
      </li>
    </ul>
  );
};

export default Navigation;
