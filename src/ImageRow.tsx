function ImageRow() {
  buttonNames = ["Red", "Blue", "Green"];
  const buttonTags = buttonNames.map(button => (
    <button type="button">{button}</button>
  ));
  return (
    <>
      <h1>Hello</h1>
      <h2>Hello guys</h2>
    </>
  );
}
export default ImageRow;
