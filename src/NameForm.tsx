import { FormEvent, useContext, useState } from "react";
import { NameContext } from "./NameProvider";

function NameForm() {
  const [localName, setLocalName] = useState("");
  const { name, setName } = useContext(NameContext);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setName(localName);
    setLocalName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          onChange={(e) => setLocalName(e.target.value)}
          value={localName}
          required
        />
        <button>Submit</button>
      </form>
      <p>Local name is {localName}.</p>
      <p>Global name (from context) is {name}.</p>
    </>
  );
}

export default NameForm;
