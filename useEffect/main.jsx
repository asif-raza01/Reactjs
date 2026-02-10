import React from "react";
import {useState,useEffect} from "react"

const Events=()=> {
  // const num=0;
  // console.log(num);
  const [count,setCount]=useState(0);
  const [title,setTitle]=useState("hello")
  useEffect(()=>{
    console.log("useeffect is running");
    setTitle("wtf!!");
  },[count]);
  return (
    <>
     {/* <h1>{num}</h1>
     <h1>Events</h1>
     <button onClick={bg_white}> White </button>
     <button onClick={bg_dark}> dark </button> */}
     <h1>Title={title}</h1>
     <button onClick={()=>setCount(count+1)}>increment</button>
     <button onClick={()=>setCount(count-1)}>deccrement</button>
    </>
  );
}


export default Events;
