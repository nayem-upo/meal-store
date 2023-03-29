import "./Cart.css"
import React from 'react';



const Cart = (props) => {
    const added = props.cart;
    return (
        <div className="cart-summary">
            <h4>Added Products</h4>
            <div className="products">
                {
                    added.map(food=> <p className="m-0">{food}</p> )
                }
                
            </div>
        </div>
    );
};
// export{addToSumm, Cart}
export default Cart;