import { Routes, Route } from "react-router-dom";

import About from './pages/About.jsx'
import Menu from './pages/Menu.jsx'
import Details from "./pages/Details.jsx";
import Edit from './pages/Edit.jsx'
import Add from './pages/Add.jsx'
import EditCard from "./pages/EditCard.jsx";

import background from './assets/background.jpg'

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div 
      style = {{backgroundImage: `url(${background})`}} 
      class="fixed -inset-4 bg-cover bg-top bg-no-repeat blur-sm brightness-50"/>

      <div className="relative z-10 py-8">
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/details/:name" element={<Details/>}/>
          <Route path ="/edit" element={<Edit/>}/>
          <Route path ="/add" element={<Add/>}/>
          <Route path="/editCard/:name" element={<EditCard/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App
