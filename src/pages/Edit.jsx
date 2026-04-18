import menuData from "../data/menuData"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

import EditMenuCard from "../components/EditMenuCard"





function Edit()
{
    const navigate = useNavigate();

    const [items, setItems] = useState(() => {
        const stored = localStorage.getItem('menuData')
        return stored ? JSON.parse(stored) : menuData
    })

    const handleReset = () => {
        localStorage.removeItem('menuData')
        setItems(menuData)
    }

    const handleDelete = (id) => {
        const updated = items.filter(item => item.id !== id)
        setItems(updated)
        localStorage.setItem('menuData', JSON.stringify(updated))
    }

    return(
        <div className="flex flex-col  items-center p-8 gap-12">

            <div className="flex justify-between gap-36">
                <button onClick={() => {navigate('/menu')}}className='w-16 h-16 bg-[#6F1D1B] rounded-2xl'>
                    <h1 className='text-4xl font-extrabold'>X</h1>
                </button>

                <div className="flex justify-center gap-3">
                    <button onClick={() => {navigate('/add')}}className="font-bold w-32 h-16 bg-green-400 rounded-3xl">Ekle</button>
                    <button onClick={() => {handleReset()}}className="font-bold w-32 h-16 bg-yellow-500 rounded-3xl">Reset</button>
                </div>
            </div>       
            <div className="flex flex-col gap-3">
                {items.map((item) => (
                    <EditMenuCard 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    info={item.info}
                    imageUrl={item.imageUrl}
                    onDelete={() => {handleDelete(item.id)}}
                    />
                    ))}
            </div>
            

        </div>
    )
}

export default Edit