import React, { useContext } from 'react'
import CalorieContext from '../store/calorieContext'

const Calories = () => {
  const {calories} = useContext(CalorieContext);
  return (
    <div className='card calories'>
      <h1 className='calorie-count'>{calories}</h1>
      <p>Calories Total</p>
    </div>
  )
}

export default Calories
