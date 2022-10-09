import Sidebar from './Pages/Sidebar'
// import MainInfo from './Pages/MainInfo';
// import SubInfo from './Pages/SubInfo';
import Main from './Pages/Main';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div>
   
   <Sidebar />
      <section>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='about' element ></Route>
        </Routes>
      
      </section>
     
  
    </div>
    </BrowserRouter>
  );
}

export default App;
