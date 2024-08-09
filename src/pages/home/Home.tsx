import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="normal" style={{ marginRight: "20px" }}>
        Normal
      </Link>
      <Link to="dynamic">Dynamic</Link>
    </div>
  );
};

export default Home;
