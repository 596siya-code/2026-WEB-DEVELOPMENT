// import React , {useState} from "react"


// function App(){

//   const [Follow , setFollow] = useState(false)

//   return(

//     <div>
//     <h2>Click Event</h2>
//   <button onClick={()=> setFollow(!Follow) }> {Follow ? "Following" : "Follow"}</button>

//     </div>
//   )
// }
// export default App



//example 2 Input

import React , {useState} from "react"
import Button from 'react-bootstrap/Button';
import card from "./cards";
import Card from "./cards";

function App(){
  
  const [Text, setText] = useState("")
   

  return(

    <div>
          <input  placeholder="search"
          
          onChange={(value)=> setText (value.target.value)}
    
    />
          <h3>You typed : {Text}</h3>
          <Card/>
      <Button variant="primary">login</Button>
    </div>
  )
}
export default App
