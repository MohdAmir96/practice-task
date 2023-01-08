import React from "react";
import { useParams, Link } from "react-router-dom";
const Home = () => {
  let { params } = useParams();
  console.log(params);
  return (
    <div>
      <Link to='/dashboard'>

        <p>go to dashboard</p>
      </Link>
    </div>
  );
};

export default Home;
