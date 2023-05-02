import React, { useContext } from 'react'
import CalorieContext from '../store/calorieContext'

const Kilometers = () => {
  const {calories, km} = useContext(CalorieContext);
  return (
    <div className='card km'>
      <h1 className='calorie-count'>{km.toFixed(2)} km</h1>
      <p>To Burn {calories} Calories</p>
    </div>
  )
}

export default Kilometers
