import { useEffect, useState } from "react"

function UseState(){
    const [count, setCount] = useState(0)
    const increaseCount = ()=>{
        setCount(count + 1)
    }
    const decreaseCount = ()=>{
        setCount(count - 1)
    }


    return(
        <>
        <div style={{textAlign: "center", alignItems: "center", fontSize:"49px", margin: "20px", padding:"20px", color:'red'}}>
        <h1>{count}</h1>
        <button onClick={increaseCount}>+Increase</button>
        <button onClick={decreaseCount}>Decrease-</button>
        
        </div>
       
        
        
        
        </>

    )
}

export default UseState