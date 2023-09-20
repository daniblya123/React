import { ReactNode, useState } from "react";

const SHOW_DISPLAY_TEXT = "Click to show children.";
const HIDE_DISPLAY_TEXT = "Click to hide children.";

interface ConditionalDisplayProps {
  children: ReactNode;
}

function ConditionalDisplay({ children }: ConditionalDisplayProps) {
  const [display, setDisplay] = useState(true);
  const [displayText, setDisplayText] = useState(HIDE_DISPLAY_TEXT);

  const handleClick = () => {
    // useState is asynchronous, meaning we do not know when display will update.
    const oldDisplay = display;
    setDisplay(!display);
    // Using the temporary variable means that setDisplayText always uses the old value.
    setDisplayText(oldDisplay ? SHOW_DISPLAY_TEXT : HIDE_DISPLAY_TEXT);
  };

  return (
    <>
      <button type="button" onClick={handleClick}>
        {displayText}
      </button>
      {display && children}
    </>
  );
}

export default ConditionalDisplay;
