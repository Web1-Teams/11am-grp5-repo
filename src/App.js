import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from  './Components/Pages/Home';
import Login from './Components/signin/Login';
import Register from './Components/signin/Register';
import Navbar from './Components/navbar/Navbar';
import Clubs from './Components/club/Clubs';
import Footer from './Components/footer/Footer';
import Food from './Components/Pages/Food';
import Basketball from './Components/sports/Basketball'
import Football from './Components/sports/Football'


function App() {
  return (
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' index element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/clubs' element={<Clubs/>}/>
<Route path='/Nutrition' element={<Food/>}/>
<Route path='/BasketBall' element={<Basketball/>}/>
<Route path='/Football' element={<Football/>}/>
<Route path='/Handball' element={<Handball}/>/
<Route path='/swimming' element={<Food/>}/>
<Route path='/tennis' element={<Food/>}/>
<Route/>
</Routes>
<Footer/>

</BrowserRouter>
  );
}

export default App;
