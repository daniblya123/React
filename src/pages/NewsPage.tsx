import { useEffect } from "react";
import { Link } from "react-router-dom";

function NewsPage() {
  useEffect(() => {
    document.title = "News";
  });

  return (
    <>
      <h1>This is the News Page.</h1>
      <p>
        Here is a link back to the <Link to="/">Home Page.</Link>
      </p>
    </>
  );
}

export default NewsPage;
