import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div >
      <h1 >404</h1>
      <p >Oops! The page you are looking for does not exist.</p>
      <Link to="/">
        Go Back Home
      </Link>
    </div>
  );
};


export default NotFoundPage;
