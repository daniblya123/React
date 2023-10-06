import { useState } from "react";

interface ButtonGroupProps {
  heading: string;
  buttonNames: string[];
}

function ButtonGroup({ heading, buttonNames }: ButtonGroupProps) {
  const [buttonText, setButtonText] = useState("");

  /**const handleButtonClick = (button: string) =>
    setButtonText(button + " was pressed!");**/

  const buttonTags = buttonNames.map(button => (
    <button
      type="button"
      key={button}
      /**onClick={() => handleButtonClick(button)}**/
    >
      {button}
    </button>
  ));

  return (
    <>
      <h2>{heading}</h2>
      <div className="flex-container">{buttonTags}</div>
      <p>{buttonText}</p>
    </>
  );
}

export default ButtonGroup;
