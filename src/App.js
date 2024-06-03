import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShipmentDetail from './pages/ShipmentDetail';
import ShipmentForm from './pages/ShipmentForm';
import ShipmentsList from "./pages/ShipmentsList";
import React from "react";

function App() {

    return(
        <Router>
            <Routes>
                <Route path={'/'} exact element={<ShipmentsList/>} />
                <Route path={'/shipments/:id'} element={<ShipmentDetail/>} />
                <Route path={'/create-shipment'} element={<ShipmentForm/>} />
            </Routes>
        </Router>
    );


}

export default App;
