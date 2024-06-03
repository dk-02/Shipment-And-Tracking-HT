import React from "react";

function ShipmentDetail() {
    return(
        <>
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

        </>
    );
}

export default ShipmentDetail;
