import NightImage from "./assets/Night.jpg"
import "./ImageRowDisplay.css"

function ImageRow(){
    return(
        <>
        <div className="images">
            <img src={NightImage} width="15%" ></img>
            <img src={NightImage} width="15%"></img>
            <img src={NightImage} width="15%"></img> 

        </div>
        </>
    )
}

export default ImageRow;