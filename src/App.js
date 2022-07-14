
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Home from './Pages/Home/Home'; 
import { Route, Routes } from 'react-router-dom';
import AboutMe from './Pages/AboutMe/AboutMe';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<AboutMe/>}></Route>
          <Route path='resume' element={<Resume/>}></Route>
          <Route path='portfolio' element={<Portfolio/>}></Route>
          <Route path='blogs' element={<Blogs/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
