import React from "react";
import Menu from "./Menu";

function ShipmentDetail() {
    return(
        <div className={"flex h-screen w-screen"}>
            <Menu/>
            <div className={"flex flex-col"}>
                <span>ID pošiljke</span>
                <span>Šifra za praćenje</span>
                <span>Kod za praćenje pošiljke</span>
                <span>Status paketa</span>
                <span>Datum zadnje promjene statusa</span>
                <span>Razlog zadnje promjene statusa</span>

                <span>Pošiljatelj</span>
                <span>ID pošiljatelja</span>
                <span>Adresa pošiljatelja</span>

                {/*<span>Primatelj: {order.customerName}</span>*/}
                {/*<span>ID primatelja: {order.customerId}</span>*/}
                {/*<span>Adresa primatelja: {order.addressTo.street}, {order.addressTo.postcode}, {order.addressTo.city}, {order.addressTo.country}</span>*/}

                <span>Sadržaj narudžbe</span>
                <span>Datum kreiranja narudžbe</span>
                <span>Masa paketa (g)</span>

                <span>Prijevoznik</span>
                <span>URL do stranice za praćenje pošiljke</span>
                <span>Datum početka praćenja pošiljke</span>
                <span>Procijenjeni datum isporuke</span>

            </div>

        </div>
    );
}

export default ShipmentDetail;
