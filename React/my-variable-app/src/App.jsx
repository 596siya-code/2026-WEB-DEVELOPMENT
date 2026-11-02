//   import React from "react"; 
//   import { useState } from "react";
//   function App(){

//     const [count, setCount] = useState(11)
//     function IncreaseCount(){

//         setCount(count+1)
//         console.log(count)
//     }
//     return(
//         <div>

//             <h2>cart/like/counter :{count}</h2>
//             <button onClick={IncreaseCount}>Increase</button>
//         </div>
//     )
//   }
//   export default App

//example 3 password Hide and show
// import React, { useState } from "react";

// function App(){

//   const [show,setShow] = useState(false)
//     return(
//         <div>
 
//      <input type = { show ? "text": "password"} placeholder="enter your password"/>
//      <button onClick={ ()=> setShow(!show)}>Show/Hide</button>
//         </div>
//     )


    
// }

 import React, { useState } from "react";

function App(){
 
    const [Follow,setFollow] = useState(false)
  
    return(
        <div>
 
     
     <button onClick={()=> setFollow(!Follow)}>{Follow ? "Following" : "Follow"}</button>
        </div>
    )


    
}
export default App


