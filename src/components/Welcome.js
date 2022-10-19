// write code for Welcome component here
import React from "react";
function Welcome({props}){
  let sayHi = `Hey ${name}!`;
  return(
    <>
    <h1>{sayHi}</h1>
    <h2>Welcome to Newton School</h2>
    </>
  );
}

export default Welcome;
