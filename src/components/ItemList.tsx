import React, { useContext } from 'react'
import Item from './Item'
import CalorieContext from '../store/calorieContext'

const ItemList = () => {
  const {list} = useContext(CalorieContext);
    return (
    <div className='card card-big'>
        <h1>Food List</h1>
        {list.map(item => (<Item key={item.id} id={item.id} title={item.title} calories={item.calories}/>))}
    </div>
  )
}

export default ItemList
