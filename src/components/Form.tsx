import React, { FormEvent, useContext, useState } from 'react'
import CalorieContext from '../store/calorieContext'
import CalorieInterface from '../models/caloriemodel';
import { HiHeart, HiOutlineVariable } from "react-icons/hi";
const Form = () => {

  const [title, setTitle] = useState<string>('');
  const [calories, setCalories] = useState<string>('');
  const [id, setId] = useState<number>(0);
  const {list, addItem} = useContext(CalorieContext);

  const onSave = (e: FormEvent) => {
    e.preventDefault();
    setId(prevId => prevId + 1);
    const data: CalorieInterface = {
      id: id,
      title: title,
      calories: calories
    }
    addItem(data);
  }


  return (
    <div className='card'>
      <form className='input-form' onSubmit={onSave}>
        <div className='inputs'>
          <HiHeart className='icon-2'/>
          <input type="text" className="input-field" placeholder='Enter Name....' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className='inputs'>
          <HiOutlineVariable className='icon-2'/>
          <input type="text" className="input-field" placeholder='Enter Calories...'  onChange={(e) => setCalories(e.target.value)}/>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Form
