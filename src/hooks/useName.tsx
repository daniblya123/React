import { useState } from "react";

function useName() {
  /* Either sessionStorage or localStorage can be used.
     sessionStorage persists until the window session ends.
     localStorage does not expire. */
  const storedName = localStorage.getItem("name");
  const [name, setName] = useState(storedName ? storedName : "");

  const saveName = (name: string) => {
    localStorage.setItem("name", name);
    setName(name);
  };

  return {
    name,
    setName: saveName,
  };
}

export default useName;
