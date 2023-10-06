import ButtonGroup from "./ButtonGroup";
import ImageRow from "./ImageRow";

function App() {
  const colourButtonNames = ["Red", "Green", "Blue"];
  const countryButtonNames = ["England", "France", "Germany"];

  return (
    <>
      <h1>Hello World!</h1>
      <ButtonGroup heading="Colour Buttons" buttonNames={colourButtonNames} />
      <ButtonGroup heading="Country Buttons" buttonNames={countryButtonNames} />
      <ImageRow />
    </>
  );
}

export default App;
