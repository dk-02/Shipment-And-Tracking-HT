import React, {useEffect, useState} from "react";
import Menu from "../components/Menu";
import {useNavigate} from "react-router";
import api from '../api';

function ShipmentsList() {

    useEffect(() => {
        const getShipmentTracking = async () => {
            try {
                const res = await api.get('/shipmentTracking');
                setFilteredOrders(res.data);
                setOrders(res.data);
            } catch (error) {
                console.error("Error fetching shipments.");
                throw error;
            }
        }

        getShipmentTracking().catch(() => alert("Dogodila se greška pri dohvatu podataka."));
    }, []);

    const [orders, setOrders] = useState([]);
    const [orderId, setOrderId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(orders);

    const handleFilterChange = (e, orderBy) => {
        const val = e.target.value.toLowerCase();
        let filtered = null;

        if(val === "") {
            setOrderStatus(val);
            filtered = orders;
        } else {
            switch (orderBy) {
                case "orderId":
                    setOrderId(val);
                    filtered = orders.filter((order) => order.id.includes(val));
                    break;
                case "customerId":
                    setCustomerId(val);
                    filtered = orders.filter((order) => order.customerId.includes(val));
                    break;
                case "orderStatus":
                    setOrderStatus(val);
                    filtered = orders.filter((order) => order.status.toLowerCase() === val);
                    break;
                default:
                    filtered = orders;
                    break;
            }
        }

        setFilteredOrders(filtered);
    }

    const statusMapping = {
        initialized: "Inicijalizirana",
        in_process: "U obradi",
        processed: "Obrađena",
        shipped: "Poslana",
        in_customs: "Na carini",
        delivered: "Dostavljena",
        returned: "Vraćena",
        error: "Greška"
    }

    const navigate = useNavigate();


    return (
        <div className={"flex h-screen w-screen"}>

            <Menu/>

            <div className={"contentDiv ml-5"}>
                <div className={"flex flex-col pt-5 gap-5 w-[75vw]"}>
                    <div>
                        <h1 className={"text-lg font-bold text-[#e20074] mb-2"}>Filtriraj:</h1>
                        <div className={"filtering grid grid-cols-2 gap-2 w-2/3 ml-5"}>
                            <div>
                                <label>ID POŠILJKE:</label>
                                <input type="text" value={orderId} onChange={(e) => handleFilterChange(e,"orderId")} className={"p-2 ml-5 h-8 bg-gray-100"}/>
                            </div>
                            <div>
                                <label>ID PRIMATELJA:</label>
                                <input type="text" value={customerId} onChange={(e) => handleFilterChange(e, "customerId")} className={"p-2 ml-5 h-8 bg-gray-100"}/>
                            </div>
                            <div>
                                <label>STATUS POŠILJKE:</label>
                                <select name="orderStatus" id="orderStatus" value={orderStatus} onChange={(e) => handleFilterChange(e, "orderStatus")} className={"h-8 bg-gray-100 ml-5 w-32"}>
                                    <option value="">...</option>
                                    <option value="initialized">Inicijalizirana</option>
                                    <option value="in_process">U obradi</option>
                                    <option value="processed">Obrađena</option>
                                    <option value="shipped">Poslana</option>
                                    <option value="in_customs">Na carini</option>
                                    <option value="delivered">Dostavljena</option>
                                    <option value="returned">Vraćena</option>
                                    <option value="error">Greška</option>
                                </select>

                            </div>

                        </div>
                    </div>

                    <div
                        className={"flex flex-col items-center gap-2 ml-5 h-[75vh] overflow-y-scroll bg-gray-50 p-5"}>
                        {filteredOrders.map((order) => (
                            <div key={order.id}
                                 className={"bg-white shadow-lg flex flex-col justify-center w-2/3 h-fit p-5 min-w-fit"}>
                                <span>ID pošiljke: <strong>{order.id}</strong></span>
                                <span>Status pošiljke: <strong>{statusMapping[order.status.toLowerCase()]}</strong></span>
                                <span>Kod za praćenje pošiljke: <strong>{order.trackingCode}</strong></span>

                                <div className={"orderButtons flex gap-2 mt-4 self-center"}>
                                    <button className={"min-w-[110px] bg-[#e20074] rounded px-3 py-1 text-white font-semibold tracking-wider text-sm"} onClick={() => navigate("/shipments/" + order.id)}>Podatci o pošiljci</button>
                                    <button className={"min-w-[110px] bg-[#e20074] rounded px-3 py-1 text-white font-semibold tracking-wider text-sm"} onClick={() => navigate("/")}>Promijeni podatke</button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );

}

export default ShipmentsList;
