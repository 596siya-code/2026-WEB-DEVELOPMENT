//API - https://jsonplaceholder.typicode.com/users

import React from "react";
import { useEffect , useState} from "react";

function App(){

  const [users ,SetUsers] = useState([])

  useEffect(()=>{

  //Task - get the data from API

  fetch("https://jsonplaceholder.typicode.com/users")

  .then( response => response.json())
  .then(data=> SetUsers(data))


  .catch(err => console.log(err))
  },[]);

  return(
    <div>
      <h2>Users List</h2>

      {users.map( xyz =>(

        <p key= {xyz.id}>{xyz.name}</p>
      ))}
    </div>
  )
}
export default App