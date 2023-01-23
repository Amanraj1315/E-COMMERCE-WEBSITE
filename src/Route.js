import './App.css';
import Home from './components/Pages/Home/Home';
import Blog from './components/Pages/Blog/Blog';
import Shop from './components/Pages/Shop/Shop';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
function Route() {
  return (
    <>
        <Header>
          <Routes>
            <Route path='/' element={<Home/>}>Home</Route>
            <Route path='Shop/' element={<Shop/>}>Shop</Route>
          </Routes>
        </Header>
  
    </>
  );
}

export default Route;
