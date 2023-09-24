import CatImage from "./assets/cat.jpg"
function ImagePair(){
    return(
        <>
        <img src={CatImage} width="20%"></img>
        <img src={CatImage} width="20%" ></img>
        
        </>
    )
}

export default ImagePair;