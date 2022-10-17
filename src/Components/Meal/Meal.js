import React from 'react';
// import '@mui/icons-material'
// import AbcTwoTone from '@mui/icons-material';
import { FavoriteBorder } from '@mui/icons-material';
import './Meal.css'
const Meal = (props) => {
    const { strMeal, strMealThumb, } = props.meal;
    const loveIcon = <FavoriteBorder />
    // console.log(props);
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="pagla" />
            <h2>{strMeal}</h2>
            <button onClick={() => props.clickEvent(strMeal)}>
                <div className='btn-content'>
                    {/* <span className='icon'>{loveIcon}</span><span className='btn-text'>add to favorite</span> */}
                    <p className='icon'>{loveIcon}</p>
                    <div className='btn-text'>add to favorite</div>
                </div>
            </button>
        </div>
    );
};

export default Meal;