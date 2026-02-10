import React from "react";


const Events=()=> {
  const num=0;
  console.log(num);
  const bg_white=()=>{
     document.body.style.backgroundColor="white";
     document.body.style.color="black";
  }
  const bg_dark=()=>{
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
  }
  return (
    <>
     <h1>{num}</h1>
     <h1>Events</h1>
     <button onClick={()=>bg_white()}> White </button>
     <button onClick={()=>bg_dark()}> dark </button>
     
    </>
  );
}


export default Events;
