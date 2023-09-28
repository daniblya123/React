import CatImage from "./assets/Cat.jpg";
import { useState } from "react";
import { string } from "prop-types";

function ImageRow() {
  const images = ["Image one", "Image two", "Image three"];
  const [imageText, setImageText] = useState("");

  const handleImageClick = (imageName: string) =>
    setImageText(imageName + " was pressed");

  const ImageTags = images.map(imageName => (
    <img
      src={CatImage}
      width="20%"
      onClick={() => handleImageClick(imageName)}
    ></img>
  ));

  return (
    <>
      <div>{ImageTags}</div>
      <p>{imageText}</p>
    </>
  );
}
export default ImageRow;
