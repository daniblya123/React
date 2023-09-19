import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

function App() {
  const colourButtonNames = ["Red", "Green", "Blue"];
  const countryButtonNames = ["England", "France", "Germany"];

  const [timesButtonPressed, setTimesButtonPressed] = useState(0);
  const handleButtonPressed = () =>
    setTimesButtonPressed(timesButtonPressed + 1);

  return (
    <>
      <h1>Hello World!</h1>
      <p>Buttons have been pressed {timesButtonPressed} times in total.</p>
      <ButtonGroup
        heading="Colour Buttons"
        buttonNames={colourButtonNames}
        onButtonPressed={handleButtonPressed}
      />
      <ButtonGroup
        heading="Country Buttons"
        buttonNames={countryButtonNames}
        onButtonPressed={handleButtonPressed}
      />
    </>
  );
}

export default App;
