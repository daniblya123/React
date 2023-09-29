import { useEffect } from "react";
import { Link } from "react-router-dom";
import { INDEX_PATH } from "../constants/paths";

function ContactPage() {
  useEffect(() => {
    document.title = "Contact";
  });

  return (
    <>
      <h1>This is the Contact Page.</h1>
      <p>
        Here is a link back to the <Link to={INDEX_PATH}>Home Page.</Link>
      </p>
    </>
  );
}

export default ContactPage;
