
import { useNavigate } from 'react-router-dom'
import deleteIcon from '../assets/delete.png'
import editIcon from '../assets/editIcon.png'


function EditMenuCard({id, name, info, imageUrl, onDelete})
{
    const navigate = useNavigate();

    return(
         <div className="flex justify-between items-center w-xl h-36 bg-[#AD734E] rounded-4xl px-8 py-2 gap-4">
                    
                    <div className="w-24 h-24">
                        <img src={imageUrl} alt="" className='rounded-3xl'/>
                    </div>

                    <div className="w-2/3">
                        <h2 className="font-bold text-2xl">{name}</h2>

                        <p className="font-medium ">{info}</p>
                    
                    </div>

                    <button onClick={() => {navigate(`/editCard/${name}`, { state: { id, name, info, imageUrl } })}}className="w-8 h-8">
                        <img src={editIcon} alt="" />
                    </button>
                    <button onClick={() => {onDelete()}}className="w-10 h-10">
                        <img src={deleteIcon} alt="" />
                    </button>
                </div>
    )
}

export default EditMenuCard