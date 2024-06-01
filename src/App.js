import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShipmentDetail from './components/ShipmentDetail';
import ShipmentForm from './components/ShipmentForm';
import ShipmentsList from "./components/ShipmentsList";
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
