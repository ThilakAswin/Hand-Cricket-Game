import React, { useState } from "react";


function Ground(props){
    

    const[userScore,setUserScore] = useState(0);
    const[cpuScore,setCpuScore] = useState(0);
    const[total,setTotal] = useState(0);
    const[target,setTarget] = useState(0);
    const[batting,setBatting] = useState(props.value==="Batting"?true:false);
    const[isOut,setOut] = useState(false);
    const[result,setResult] = useState("");


    function handleClick(e){
        if(batting){
        const choice = +(e.target.value);
        setUserScore(choice);
        const cpuChoice = Math.floor(Math.random()*10 +1 );
        setCpuScore(cpuChoice);
        if(choice === cpuChoice)
        {
            alert("out");
            // setOut(true);
            setTarget(total);
            setTotal(0);
            setBatting(false);
        }else{
        setTotal(prevScore =>{
            return prevScore + choice;
        });
        

    }
    }else{
        
       
   
        const choice = +(e.target.value);
        setUserScore(choice);
        const cpuChoice = Math.floor(Math.random()*10 +1 );
        setCpuScore(cpuChoice);

       
        if(choice === cpuChoice)
        {
            if(total > target){
                setOut(false);
                setResult("You Lost");
                setTimeout(()=>window.location.reload(),5000);
            }
            else if(total===target){
                setResult("Draw");
                setTimeout(()=>window.location.reload(),5000);
            }
            else{
                setResult("You Won");
                setTimeout(()=>window.location.reload(),5000);
            }
           
        }
        setTotal(prevScore =>{
            if(total +cpuChoice > target)
            {setResult("You Lost");
            setTimeout(()=>window.location.reload(),5000);}
            return prevScore + cpuChoice;
        });
            
            
       

    }

    }

    return <div>
      <div class="container">
    <div class="row">
      <div class="col col-heading">
        <h1>User</h1>
      </div>
      <div class="col col-display" id="scoreHome">{userScore}</div>

    </div>
    <div class="row">
      <div class="col col-heading">
        <h1>Cpu</h1>
      </div>
      <div class="col col-display" id="scoreGuest">{cpuScore}</div>
    </div>
    <div className="ground-area">
        <h2>{result}</h2>
         <h2 style={{visibility:props.isHidden?null:"hidden"}}>You are {batting?"Batting":"Bowling"}</h2>
         <h2>Score : {total}</h2>
         <h2>Target: {target}</h2>
    </div>
    <div className="controller">
        <button className="button-71" onClick={handleClick} value="1">1</button>
        <button className="button-71" onClick={handleClick} value="2">2</button>
        <button className="button-71" onClick={handleClick} value="3">3</button>
        <button className="button-71" onClick={handleClick} value="4">4</button>
        <button className="button-71" onClick={handleClick} value="5">5</button>
        <button className="button-71" onClick={handleClick} value="6">6</button>
        <button className="button-71" onClick={handleClick} value="7">7</button>
        <button className="button-71" onClick={handleClick} value="8">8</button>
        <button className="button-71" onClick={handleClick} value="9">9</button>
        <button className="button-71" onClick={handleClick} value="10">10</button>
    </div>
    {/* <div className="display">
       
        <h3>{userScore}</h3>
        <h3>{cpuScore}</h3>
    </div> */}
   
    </div>
    </div>
}

export default Ground;