import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import Success from "./pages/Success";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/order"
          element={<OrderForm setOrderData={setOrderData} />}
        />
        <Route path="/success" element={<Success orderData={orderData} />} />
      </Routes>
    </Router>
  );
}

export default App;
