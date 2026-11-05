// import React from "react";
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
// function Home(){

//   return(
//     <div>
//       <h1>home page</h1>
//     </div>
//   )
// }

// function About(){

// return(
//     <div>
//       <h1>About page</h1>
//     </div>
//   )
// }




// function App(){
// return(
  
// <BrowserRouter>

// <Routes>
//      <Route path="/"  element={<Home/>}  />
//      <Route  path="/about"  element={<About/>}  />
// </Routes>

//  </BrowserRouter>
//   )
// }
  
// export default App

//Example 2 -link tag ; acts like anchor tag

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './Homepage'
import About from './Aboutpage'


function App(){

  return(

    <BrowserRouter>
  
   <nav>
    <Link to="/">Home</Link>
    <Link to= "/About">About/Support</Link>
   </nav>

   <Routes>
 
 <Route  path='/'  element={<Home/>}/>
 <Route  path="/About" element={<About/>}      />

   </Routes>

    </BrowserRouter>
  )
}

export default App