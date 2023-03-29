import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import "./Foods.css"

const Foods = () => {

    const [foods, setFoods] = useState([]);

    useEffect(()=>{

        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(response => response.json())
        .then(data=> setFoods(data.meals))
    },[])


    const [cart, setCart] = useState([])


const addToSumm =(strMeal)=>{
    console.log(strMeal)
    const newCart = [...cart, strMeal]
    setCart(newCart)
    
}
    return (
        <div className='foods-cart'>
            <div className='foods'>
                {
                    foods.map(food=><Food addToSumm={addToSumm} food={food} key={food.idMeal}></Food>)
                }
            </div>
            
            <Cart cart ={cart}></Cart>

        </div>
    );
};

export default Foods;