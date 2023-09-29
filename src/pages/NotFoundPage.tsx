import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME_PATH } from "../constants/paths";

function NotFoundPage() {
  useEffect(() => {
    document.title = "404";
  });

  return (
    <>
      <h1>This is the 404 Page.</h1>
      <p>
        Here is a link back to the <Link to={HOME_PATH}>Home Page.</Link>
      </p>
    </>
  );
}

export default NotFoundPage;
