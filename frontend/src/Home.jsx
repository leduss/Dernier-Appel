import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/">
        <button type="button">home</button>
      </Link>
      <Link to="/planets/tatooine">
        <button type="button">planete1</button>
      </Link>
      <Link to="/planets/pandora">
        <button type="button">planete2</button>
      </Link>
    </div>
  );
}

export default Home;
