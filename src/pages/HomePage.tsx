import { useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the <Link to="/news">News Page.</Link>
      </p>
    </>
  );
}

export default HomePage;
