import { useContext } from "react";
import { NameContext } from "./NameProvider";

function NameDisplay() {
  const { name } = useContext(NameContext);

  return (
    <>
      <p>
        This paragraph is in a different component. No props are being passed,
        but the global name state can be accessed. The value of the global name
        is {name}.
      </p>
    </>
  );
}

export default NameDisplay;
