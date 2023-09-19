import ButtonGroup from "./ButtonGroup";

function App() {
  const colourButtonNames = ["Red", "Green", "Blue"];
  const countryButtonNames = ["England", "France", "Germany"];

  return (
    <>
      <h1>Hello World!</h1>
      <ButtonGroup heading="Colour Buttons" buttonNames={colourButtonNames} />
      <ButtonGroup heading="Country Buttons" buttonNames={countryButtonNames} />
    </>
  );
}

export default App;
