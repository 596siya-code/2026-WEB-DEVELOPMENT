import React from "react";

function Cart({cart}){

    return(
        <div style={{padding :"20px" }}>
            <h2>Your Cart</h2>
            <h2>total items :{cart}</h2>

        </div>
    )
}
export default Cart