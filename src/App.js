
import './App.css';
import Navbar from  './Components/Navbar';
import Home from  './Pages/Home';
import ReactDOM from "react-dom";
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Footer from './Components/Footer';


function App() {
  return (
    <>
    < Navbar/>
    <Routes> 
      <Route  path="/" element={<Home/>}/>
    </Routes>
    <Home />
    
    
    </>
  );
}
export default App;
