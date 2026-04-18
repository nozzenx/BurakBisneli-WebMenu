import { useNavigate } from "react-router-dom";

function About()
{
    const navigate = useNavigate();

    return(
        <div class='w-full h-full flex items-center min-h-screen justify-center flex-col gap-8'>
            <h1 class="text-3xl font-bold text-white">Welcome</h1>
            <button 
            onClick={() => navigate('/menu')} 
            class="w-40 h-15 bg-[#AD734E] rounded-xl flex justify-center items-center font-bold text-shadow-2xs">
                Press To Start
            </button>
        </div>
    );
}
export default About;