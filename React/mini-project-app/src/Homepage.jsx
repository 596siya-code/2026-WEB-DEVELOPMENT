import React from "react";

function Home({cart,setCart}){

    function addpizza(){
    setCart(cart + 1);

    }


    function addburger(){
        setCart(cart+1);
    }
return(
    <div style = {{padding:"30px"}}>

       <h1>Foodie express</h1>

    <div style={{border:'1px solid grey', padding:'20px' ,borderRadius:"12px"}}>
        <h2>Pizza</h2>
        <button onClick={addpizza}>add pizza</button>
    </div>

     <div style={{border:'1px solid grey', padding:'20px' ,borderRadius:"12px"}}>
        <h2>Burger</h2>
        <button onClick={addburger}>add burger</button>
    </div>

     

</div>
   
)
}
export default Home