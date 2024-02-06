import React, { useState } from "react";
import Ground from "./Ground";

function App(){

    const[value,setValue] = useState("");
    const[isHidden,setHidden] = useState(false);
    const[palyArea,setPlayArea] = useState(false);

    function handleClick(e){
       setValue(e.target.value);
       setHidden(true);
       setPlayArea(true);
    }   

    return <div>

        <div className="play-area">
        <button className="play-button"   onClick={handleClick} value="Batting" >{isHidden?"Hand Cricket":"Play"}</button>
        
        
        </div>
       
        {palyArea && <Ground value={value} isHidden={isHidden}/>}
       
        
    </div>
}

export default App;