import React from 'react';
import "./Food.css"

const Food = (props) => {
    const addToSumm = props.addToSumm;
    const {strMeal, strMealThumb, strArea, strCategory} = props.food
    return (
        <div className='cart-boday'>
            <div className="cart">
                <div className="h-100">
                    <img src={strMealThumb} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Name: {strMeal}</h5>
                        <div className='d-flex gap-3'>
                            <h6>Area: {strArea}</h6>
                            <h6>Category: {strCategory}</h6>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='buttons'>
                    <button onClick={()=>addToSumm(strMeal)} className='btn-add'>Add To Cart</button>
                    <button className='btn-remove'>Remove</button>
            </div>
        </div>
    );
};

export default Food;