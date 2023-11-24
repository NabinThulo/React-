
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ProductDetails from './Pages/ProductDetails';
function App() {
  return (
    <>
      <Navbar color={"red"} showSearch = {true} Title="John"/>
      
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/product-details" element={<ProductDetails/>}/>
        </Routes>
      {/* </BrowserRouter> */}
      <Navbar color={"green"} Title="Nabin"/>
    </>
  );
}

export default App;
