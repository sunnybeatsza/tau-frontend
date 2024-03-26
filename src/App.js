import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Quote } from "./Pages/Quote";
import { Checkout } from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Quote" element={<Quote />} />
        <Route exact path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
