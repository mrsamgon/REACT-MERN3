import { useEffect, useState } from "react";

function LearningUseEffect() {
  //------ First Type -----
  useEffect(() => {
    console.log("I'm Here UseEffect 😁😀");
  }, []); // Empty dependency array, runs once on mount

  const [count, setCount] = useState(0)
  const increaseCount = (()=>{
    setCount(count + 1)
  })
  const decreaseCount = (()=>{
    setCount(count - 1)
  })
  const [like , setLike] = useState(0)

const IncreaseLike = (()=>{
  setLike(like + 1)
})


 useEffect(()=>{
  console.log("Like send to server")
 },[like])


  useEffect(()=>{
    console.log("aayoooooooooo")
  },[count])


  return (
    <>
      {/* <h1>Hello World! from UseEffect</h1> */}
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <h1> Like : {like}</h1>
      <button onClick={IncreaseLike}>Like me</button>
    </>
  );
}

export default LearningUseEffect;
