import React, { FormEvent, useContext } from 'react'
import CalorieContext from '../store/calorieContext'

const Burn = () => {
  const {setKg, calculateKm} = useContext(CalorieContext);

  const getCalories = (e: FormEvent) => {
    e.preventDefault();
    calculateKm();
  }

  return (
    <div className='card'>
      <form className='input-form' onSubmit={getCalories}>
        <input type="text" placeholder='Enter Weight...' onChange={e => setKg(e.target.value)}/>
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default Burn
