import { useState } from "react";

function ButtonGroup() {
  const buttons = ["Red", "Green", "Blue"];
  const [buttonText, setButtonText] = useState("");

  const handleButtonClick = (button: string) =>
    setButtonText(button + " was pressed!");

  const buttonTags = buttons.map(button => (
    <button
      type="button"
      key={button}
      onClick={() => handleButtonClick(button)}
    >
      {button}
    </button>
  ));

  return (
    <>
      <div className="flex-container">{buttonTags}</div>
      <p>{buttonText}</p>
    </>
  );
}

export default ButtonGroup;
