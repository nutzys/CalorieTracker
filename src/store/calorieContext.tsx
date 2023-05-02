import { ReactNode, createContext, useState } from "react";
import CalorieInterface from "../models/caloriemodel";

interface ContextType {
    setList: React.Dispatch<React.SetStateAction<CalorieInterface[]>>,
    list: CalorieInterface[],
    addItem: (data: CalorieInterface) => void,
    deleteItem: (id: number) => void,
    calories: number,
    setKg: React.Dispatch<React.SetStateAction<string>>,
    km: number,
    calculateKm: () => void
}

const CalorieContext = createContext<ContextType>({
    setList: () => { },
    list: [],
    addItem: (data: CalorieInterface) => { },
    deleteItem: (id: number) => { },
    calories: 0,
    setKg: () => { },
    km: 0,
    calculateKm: () => { }
});

export function CalorieProvider({children}: {children : ReactNode}){ 

    const [list, setList] = useState<CalorieInterface[]>([]);
    const [calories, setCalories] = useState<number>(0);
    const [kg, setKg] = useState<string>('');
    const [km, setKm] = useState<number>(0);

    const addItem = (data: CalorieInterface) => {
        setCalories(prevState => prevState + parseInt(data.calories));
        setList(prevState => [...prevState, data]);
    }

    const calculateKm = () => {
        const cpk = 0.75 * Number(kg) * 3.5 / 60; //Calories burned per km
        setKm(calories / (Number(kg) * cpk));
    }

    const deleteItem = (id: number) => {
        const item = list.filter(item => item.id == id);
        const calorieAmount = item.map(item => item.calories);
        setCalories(prevState => prevState - Number(calorieAmount));
        setList(list.filter(item => item.id !== id));
    }

    return (
        <CalorieContext.Provider value={{ list, setList, addItem, deleteItem, calories, setKg, km, calculateKm}}>
            {children}
        </CalorieContext.Provider>
    )
}

export default CalorieContext;