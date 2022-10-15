import Sidebar from './Pages/Sidebar'
// import MainInfo from './Pages/MainInfo';
// import SubInfo from './Pages/SubInfo';
import Main from './Pages/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About'


function App() {
  
// #C0C3CC
// #3392FA
// #F6F9FF
// #9EA8C2 색상표

  return (
    <BrowserRouter>
    <Sidebar />
    <div>
   
 
      <section>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='about' element={<About />} ></Route>
        </Routes>
      
      </section>
     
  
    </div>
    </BrowserRouter>
  );
}

export default App;
