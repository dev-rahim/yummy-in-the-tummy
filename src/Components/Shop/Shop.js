import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Cart from '../Cart/Cart';
import './Shop.css'
const Shop = () => {

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('./meals.json')
            .then(res => res.json())
            .then(data => setMeals(data))
        // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        //     .then(res => res.json())
        //     .then(data => setMeals(data.meals))
    }, [])

    const [mealTitle, setMealTitle] = useState([])
    const handleAddTOFavorite = (idMeal) => {
        // const empty = []
        // console.log(empty);
        // empty.push([...empty, strMeal]);
        // setMealTitle(empty);
        // const addMeal = meals.find(meal => meal.idMeal === idMeal);
        setMealTitle([...mealTitle, idMeal])

        // console.log(mealTitle);

    }

    return (
        <div className='Shop'>
            <div className="meals">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        clickEvent={handleAddTOFavorite}
                        meal={meal}
                    />)
                }
            </div>
            <div>
                <Cart mealTitle={mealTitle} />
            </div>
        </div>
    );
};

export default Shop;