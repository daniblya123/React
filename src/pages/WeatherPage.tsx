import { useEffect } from "react";

function WeatherPage(){
    useEffect(() => {
        document.title = "Weather";
      });

return (<>
<h1>Hello world</h1>
<p>TODAY IS WARMM</p>
</>)
}

export default WeatherPage;