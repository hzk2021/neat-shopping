import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { useState } from "react";
import { CartContext } from "./contexts/CartContext";
import { Cart } from "./pages/Cart";
import "./assets/static//css/App.css";
import bgImage from "./assets/static/images/bg.jpg";

function App() {
  const [cartInfo, setCartInfo] = useState([]);

  return (
    <CartContext.Provider value={{cartInfo, setCartInfo}}>
      <div className="App h-100 bg-dark">
      
        <Header/>

        <Routes>
            <Route path="/">
              <Route index element={<Home src={bgImage}/>} />
              <Route path="home" element={<Home src={bgImage}/>} />
              <Route path="store" element={<Store />} />
              <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>

      </div>

    </CartContext.Provider>
  );
}

export default App;
