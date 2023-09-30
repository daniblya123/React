import NameDisplay from "./NameDisplay";
import NameForm from "./NameForm";
import NameProvider from "./NameProvider";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <NameProvider>
        <div className="bordered">
          <NameForm />
        </div>
        <div className="bordered">
          <NameDisplay />
        </div>
      </NameProvider>
    </>
  );
}

export default App;
