import React, { useContext } from 'react'
import { HiTrash } from "react-icons/hi";
import CalorieContext from '../store/calorieContext';

interface Props {
  id: number,
  title: string,
  calories: string
}


const Item: React.FC<Props> = (props) => {
  const {deleteItem} = useContext(CalorieContext);

  return (
    <div className='item-container'>
      <div className="title-container">
        <h3>{props.title}</h3>
      </div>
      <div className="calorie-display">
        <p className='calorie-tag'>{props.calories} Calories</p>
        <HiTrash className='icon' onClick={() => deleteItem(props.id)}/>
      </div>
    </div>
  )
}

export default Item
