import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import { useParams } from "react-router-dom";
import api from "../api";

function ShipmentDetail() {

    const {id} = useParams();

    useEffect(() => {
        const getShipmentTracking = async () => {
            try {
                const res = await api.get('/shipmentTracking/' + id);
                setOrderData(res.data);
            } catch (error) {
                console.error("Error fetching shipments.");
                throw error;
            }
        }

        getShipmentTracking().catch(() => alert("Dogodila se greška pri dohvatu podataka."));
    }, [id]);

    const [orderData, setOrderData] = useState({});

    const [isInEditing, setIsInEditing] = useState(false);

    const handleToggleEditing = () => {
        setIsInEditing(!isInEditing);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setOrderData({...orderData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Sent");

        setIsInEditing(false);
    }


    const fieldNameMapping = {
        id: "ID pošiljke",
        customerName: "Primatelj",
        customerId: "ID primatelja",
        status: "Status pošiljke",
        trackingCode: "Kod za praćenje pošiljke",
        createDate: "Datum kreiranja narudžbe",
        addressFrom: "Adresa pošiljatelja",
        addressTo: "Adresa primatelja",
        orderContents: "Sadržaj pošiljke",
        packetWeight: "Masa paketa (g)",
        lastOrderStatusChangeDate: "Datum zadnje promjene statusa pošiljke",
        lastOrderStatusChangeReason: "Razlog zadnje promjene statusa pošiljke",
        sender: "Pošiljatelj",
        senderId: "ID pošiljatelja",
        carrier: "Prijevoznik",
        orderTrackingSiteUrl: "URL do stranice za praćenje pošiljke",
        orderTrackingStartDate: "Datum početka praćenja pošiljke",
        estimatedDateOfDelivery: "Procijenjeni datum isporuke"
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


    return(
        <div className={"flex h-fit w-full"}>
            <Menu/>

            {!isInEditing ?
                <div className={"flex flex-col gap-5 p-5 w-full items-center"}>
                    <h1 className={"text-2xl font-bold tracking-wide text-[#e20074]"}>Podatci o pošiljci {id}</h1>
                    <div className={"flex flex-col w-1/2"}>

                        {orderData && Object.entries(orderData).map(([key, value], index) => (
                            <div key={index} className={index % 2 === 1 ? "bg-gray-100 h-10 flex items-center px-5" : (index % 2 === 0) ? "h-10 flex items-center px-5" : ""}>
                                <span className={"inline-block w-1/2 font-bold tracking-wide"}>{fieldNameMapping[key]}: </span>

                                {key === 'status' ?
                                    <span>
                                        {statusMapping[value]}
                                    </span>
                                    :
                                    <span>{typeof value !== 'object' && value}</span>
                                }
                                {(key === 'addressTo') &&
                                    <span>
                                        {Object.values(orderData.addressTo).join(", ")}
                                    </span>
                                }
                                {(key === 'addressFrom') &&
                                    <span>
                                        {Object.values(orderData.addressFrom).join(", ")}
                                    </span>
                                }



                            </div>
                        ))}

                    </div>

                    <button className={"w-60 self-center bg-[#e20074] rounded px-3 py-1 text-white font-semibold tracking-wider text-sm"}
                        onClick={handleToggleEditing}>
                        Uredi
                    </button>

                </div>

                :
                <div className={"flex flex-col gap-5 p-5 w-full items-center"}>
                    <h1 className={"text-2xl font-bold tracking-wide text-[#e20074]"}>Uredi podatke o pošiljci {id}</h1>
                    <div className={"flex flex-col gap-1"}>

                        {orderData && Object.entries(orderData).map(([key, value], index) => (
                            <div key={index}>
                                <label className={"font-bold tracking-wide inline-block w-[300px]"}>{fieldNameMapping[key]}: </label>

                                {key === 'status' ?
                                    <input type="text" name={key} value={statusMapping[value]}
                                           onChange={handleInputChange} className={"bg-gray-100 w-[300px] p-1"}/>
                                    :
                                    key === 'addressTo' ? <input type="text" name={key}
                                                                 value={Object.values(orderData.addressTo).join(", ")}
                                                                 onChange={handleInputChange}
                                                                 className={"bg-gray-100 w-[300px] p-1"}/>
                                        :
                                        key === 'addressFrom' ?
                                            <input type="text" name={key}
                                                   value={Object.values(orderData.addressFrom).join(", ")}
                                                   onChange={handleInputChange} className={"bg-gray-100 w-[300px] p-1"}/> :

                                            <input type="text" name={key} value={value}
                                                   onChange={handleInputChange} className={"bg-gray-100 w-[300px] p-1"}/>
                                }


                            </div>
                        ))}

                    </div>

                    <button
                        className={"w-60 self-center bg-[#e20074] rounded px-3 py-1 text-white font-semibold tracking-wider text-sm"}
                        onClick={handleSubmit}>Pohrani promjene
                    </button>

                </div>

            }


        </div>
    );
}

export default ShipmentDetail;
