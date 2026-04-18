import MenuCard from "../components/MenuCard";

import menuData from '../data/menuData';

import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function Menu()
{

    const navigate = useNavigate();

    const [items, setItems] = useState(() => {
        const stored = localStorage.getItem('menuData')
        return stored ? JSON.parse(stored) : menuData
    })

    return(
        <div>
            <div className="flex justify-end pr-12">
                <button onClick= {() => navigate("/edit")} className="text-white w-24 h-16 bg-[#AD734E] text-shadow-2xs font-bold rounded-3xl">Duzenle</button>
            </div>

            <div className="flex flex-col items-center gap-10">
                <h1 className="text-7xl font-bold text-white">Menu</h1>
                <div className="flex flex-col gap-6 w-2/4">

                    {/* <h2 className="pt-12 flex justify-center text-5xl font-semibold text-white">Ana Yemekler</h2> */}
                    {items.map((item) => (
                        <MenuCard
                        key={item.id}
                        name={item.name}
                        info={item.info}
                        imageUrl={item.imageUrl}
                        />
                    ))}

                
                    
                </div>
            </div>
        </div>
    );
}
export default Menu;