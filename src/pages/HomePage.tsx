import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NEWS_PATH } from "../constants/paths";

function HomePage() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <>
      <h1>This is the Home Page.</h1>
      <p>
        Here is a link to the <Link to={NEWS_PATH}>News Page.</Link>
      </p>
    </>
  );
}

export default HomePage;
