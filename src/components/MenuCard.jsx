import { useNavigate } from "react-router-dom"

function MenuCard({ name, info, imageUrl }) {
    const navigate = useNavigate();
    return (
        <button 
        onClick={() => {navigate(`/details/${name}`, {state: {name, info, imageUrl}})}} 
        className="flex items-center p-4 w-full h-36 bg-[#AD734E] rounded-xl">

            <div className="w-32 h-32 shadow-lg shadow-cyan-500/50">
                <img src={imageUrl} className="w-full h-full bg-cover rounded-3xl"/>
            </div>

            <div className="w-2/3 h-32 flex flex-col items-start px-5 py-2">
                <h2 className="font-bold text-2xl text-white">{name}</h2>
                <p className="font-medium text-gray-100 text-left">{info}</p>
            </div>

            <div className="w-32 h-32 flex justify-end items-center">
                <h2 className="font-bold text-white">→</h2>
            </div>
                      
        </button>
    )
}

export default MenuCard