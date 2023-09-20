import ConditionalDisplay from "./ConditionalDisplay";
import dino from "./assets/dino.png";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <ConditionalDisplay>
        <p>
          This is a child paragraph. It will disappear alongside the image below
          when the button is pressed.
        </p>
        <img src={dino} width="20%" />
      </ConditionalDisplay>
    </>
  );
}

export default App;
