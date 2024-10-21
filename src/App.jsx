import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Beatrooms from './pages/Beatrooms';
import About from './pages/About';
import Register from './pages/Register';
import Livebattle from './pages/Livebattle';

function App() {
  return (
    <>

   <Header />
   <Routes>
    <Route path='/' element={<Home />}  />
    <Route path='/beat-rooms' element={<Beatrooms/>}  />
    <Route path='/live-battle' element={<Livebattle/>}  />
    <Route path='/about' element={<About/>}  />
    <Route path='/register' element={<Register/>}  />
   </Routes>
    </>

  );
}

export default App;
