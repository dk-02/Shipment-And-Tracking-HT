import React, {useState} from "react";
import Menu from "./Menu";

function ShipmentsList() {

    let str = "Get";


    const [orders, setOrders] = useState([
        {
            id: '1',
            customerName: 'Ana Horvat',
            customerId: '45678',
            status: 'dosTavLjena',
            trackingCode: 'HR123456789',
            createDate: '2024-05-25T09:30:00',
            addressFrom: {
                street: 'Trg bana Josipa Jelačića 83',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            },
            addressTo: {
                street: 'Ilica 8',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            }
        },
        {
            id: '2',
            customerName: 'Marko Kovač',
            customerId: '34768',
            status: 'in-process',
            trackingCode: 'HR987654321',
            createDate: '2024-05-26T10:45:00',
            addressFrom: {
                street: 'Ilica 5',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            },
            addressTo: {
                street: 'Savska 157',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            }
        },
        {
            id: '3',
            customerName: 'Ivana Babić',
            customerId: '30527',
            status: 'shipped',
            trackingCode: 'HR246813579',
            createDate: '2024-05-27T11:15:00',
            addressFrom: {
                street: 'Savska 155',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            },
            addressTo: {
                street: 'Trg bana Josipa Jelačića 76',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            }
        },
        {
            id: '4',
            customerName: 'Petra Novak',
            customerId: '58729',
            status: 'initialized',
            trackingCode: 'HR369258147',
            createDate: '2024-05-28T12:00:00',
            addressFrom: {
                street: 'Trg bana Josipa Jelačića 10',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            },
            addressTo: {
                street: 'Ilica 22',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            }
        },
        {
            id: '5',
            customerName: 'Ante Kraljević',
            customerId: '12345',
            status: 'returned',
            trackingCode: 'HR582469137',
            createDate: '2024-05-29T13:30:00',
            addressFrom: {
                street: 'Ilica 77',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            },
            addressTo: {
                street: 'Trg bana Josipa Jelačića 56',
                city: 'Zagreb',
                postcode: '10000',
                country: 'Hrvatska'
            }
        }
    ]);

    const [orderId, setOrderId] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [orderStatus, setOrderStatus] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(orders);

    const handleFilterChange = (e, orderBy) => {
        const val = e.target.value.toLowerCase();
        let filtered = null;

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
        }

        setFilteredOrders(filtered);
    }


    return (
        <div className={"flex h-screen w-screen"}>

            <Menu/>

            <div className={"contentDiv ml-5"}>

                {str === "new" &&

                    <div className={"flex flex-col"}>
                        <span>Prijevoznik</span>
                        <span>Šifra za praćenje</span>
                        <span>URL do stranice za praćenje pošiljke</span>
                        <span>Datum početka praćenja pošiljke</span>
                        <span>Status paketa</span>
                        <span>Datum zadnje promjene statusa</span>
                        <span>Razlog zadnje promjene statusa</span>
                        <span>Masa paketa (g)</span>
                        <span>Procijenjeni datum isporuke</span>
                        <span>Adresa pošiljatelja</span>
                        <span>Adresa primatelja</span>
                        <span>Order?</span>
                        <span>Korisnik?</span>
                        <span>Datum kreiranja pošiljke</span>
                    </div>

                }

                {str === "Get" &&

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
                                    {/*<input type="text" value={orderStatus} onChange={(e) => handleFilterChange(e, "orderStatus")} className={"p-2 ml-5 h-8 bg-gray-100"}/>*/}

                                    <select name="orderStatus" id="orderStatus" value={orderStatus} onChange={(e) => handleFilterChange(e, "orderStatus")} className={"h-8 bg-gray-100 ml-5 w-32"}>
                                        <option value="">...</option>
                                        <option value="initialized">Inicijalizirana</option>
                                        <option value="in-process">U obradi</option>
                                        <option value="processed">Obrađena</option>
                                        <option value="shipped">Poslana</option>
                                        <option value="in-customs">Na carini</option>
                                        <option value="delivered">Dostavljena</option>
                                        <option value="returned">Vraćena</option>
                                        <option value="error">Greška</option>
                                    </select>

                                </div>
                                <div>
                                    <label>BROJ UGOVORA:</label>
                                    <input type="text" className={"p-2 ml-5 h-8 bg-gray-100"}/>
                                </div>

                            </div>
                        </div>


                        <div
                            className={"flex flex-col items-center gap-2 ml-5 h-[75vh] overflow-y-scroll bg-gray-50 p-5"}>
                            {filteredOrders.map((order) => (
                                <div key={order.id}
                                     className={"bg-white shadow-lg flex flex-col justify-center w-2/3 h-44 p-5 min-w-fit"}>
                                    <span>ID pošiljke: <strong>{order.id}</strong></span>
                                    <span>Status pošiljke: <strong>{order.status}</strong></span>
                                    <span>Kod za praćenje pošiljke: <strong>{order.trackingCode}</strong></span>
                                    <span>Primatelj: {order.customerName}</span>
                                    <span>ID primatelja: {order.customerId}</span>
                                    <span>Adresa primatelja: {order.addressTo.street}, {order.addressTo.postcode}, {order.addressTo.city}, {order.addressTo.country}</span>

                                </div>
                            ))}

                        </div>
                    </div>

                }


            </div>

        </div>
    );

}

export default ShipmentsList;
