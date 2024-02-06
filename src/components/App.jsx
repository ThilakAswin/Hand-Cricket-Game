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

        <div className="button-area">
        <button className="button-71" style={{visibility : isHidden ? "hidden" : null}}  onClick={handleClick} value="Batting" >Play</button>
        
        
        </div>
       
        {palyArea && <Ground value={value} isHidden={isHidden}/>}
       
        
    </div>
}

export default App;