import { useNavigate, useLocation } from 'react-router-dom';


function Details()
{
    const navigate = useNavigate();
    const location = useLocation();
    const {name, info, imageUrl} = location.state

    return(
        <div className='px-12'>
            <button onClick={() => {navigate('/menu')}}className='w-16 h-16 bg-[#6F1D1B] rounded-2xl'>
                <h1 className='text-4xl font-extrabold'>X</h1>
            </button>

            <div className="flex flex-col items-center">
                
                <div className="w-2/6 h-2/6 rounded-4xl overflow-hidden">
                    <img src={imageUrl} alt="Food image" className="w-full h-full bg-cover"/>
                </div>

                <div className='flex flex-col w-2/6 h-2/6 p-4 gap-3'>
                    <h1 className='text-white text-4xl font-bold'>{name}</h1>
                    <p className='text-gray-200 text-xl font-medium'>{info}</p>
                </div>

            </div>
        </div>
    
    );
    
}


export default Details