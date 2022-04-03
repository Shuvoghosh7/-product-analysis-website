import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Review from './Component/Review/Review';
import DashBoard from './Component/DashBoard/DashBoard';
import Blogs from './Component/Blogs/Blogs';
import NavBar from './Component/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/review' element={<Review/>}/>
       <Route path='/dashBoard' element={<DashBoard/>}/>
       <Route path='/blogs' element={<Blogs/>}/>
     </Routes>


    </>
  );
}

export default App;
