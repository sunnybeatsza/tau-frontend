import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { ContactUs } from "./Pages/Contact";
import { Quote } from "./Pages/Quote";
import { Checkout } from "./Pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<ContactUs />} />
        <Route exact path="/Quote" element={<Quote />} />
        <Route exact path="/Checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
