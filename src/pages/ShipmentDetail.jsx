import React, {useState} from "react";
import Menu from "../components/Menu";

function ShipmentDetail() {

    const [isInEditing, setIsInEditing] = useState(false);
    const [editedShipment, setEditedShipment] = useState({
        userId : 0
    });

    const handleToggleEditing = () => {
        setIsInEditing(!isInEditing);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEditedText(value);
        setEditedShipment({...editedShipment, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Sent");
        // Dodaj post metodu na backend

        setIsInEditing(false);
    }

    const [editedText, setEditedText] = useState("12345");

    return(
        <div className={"flex h-screen w-screen"}>
            <Menu/>

            {!isInEditing ?
                <div className={"flex flex-col"}>
                    <span>ID pošiljke:</span>
                    <span>{editedText}</span>
                    <button onClick={handleToggleEditing}>Uredi</button>
                    {/*<span>Sadržaj pošiljke</span>*/}
                    {/*<span>Datum kreiranja narudžbe</span>*/}
                    {/*<span>Masa paketa (g)</span>*/}

                    {/*<span>Kod za praćenje pošiljke</span>*/}
                    {/*<span>Status pošiljke</span>*/}
                    {/*<span>Datum zadnje promjene statusa pošiljke</span>*/}
                    {/*<span>Razlog zadnje promjene statusa pošiljke</span>*/}

                    {/*<span>Pošiljatelj</span>*/}
                    {/*<span>ID pošiljatelja</span>*/}
                    {/*<span>Adresa pošiljatelja</span>*/}

                    {/*<span>Primatelj</span>*/}
                    {/*<span>ID primatelja</span>*/}
                    {/*<span>Adresa primatelja</span>*/}

                    {/*<span>Prijevoznik</span>*/}
                    {/*<span>URL do stranice za praćenje pošiljke</span>*/}
                    {/*<span>Datum početka praćenja pošiljke</span>*/}
                    {/*<span>Procijenjeni datum isporuke</span>*/}

                </div>
                :
                <div className={"flex flex-col"}>
                    <span>ID pošiljke:</span>
                    <input type="text" name={"userId"} value={editedText} onChange={handleInputChange} />
                    <button onClick={handleSubmit}>Pohrani promjene</button>
                    {/*<span>Šifra za praćenje</span>*/}
                    {/*<span>Kod za praćenje pošiljke</span>*/}
                    {/*<span>Status paketa</span>*/}
                    {/*<span>Datum zadnje promjene statusa</span>*/}
                    {/*<span>Razlog zadnje promjene statusa</span>*/}

                    {/*<span>Pošiljatelj</span>*/}
                    {/*<span>ID pošiljatelja</span>*/}
                    {/*<span>Adresa pošiljatelja</span>*/}

                    {/*<span>Primatelj</span>*/}
                    {/*<span>ID primatelja</span>*/}
                    {/*<span>Adresa primatelja</span>*/}

                    {/*<span>Sadržaj narudžbe</span>*/}
                    {/*<span>Datum kreiranja narudžbe</span>*/}
                    {/*<span>Masa paketa (g)</span>*/}

                    {/*<span>Prijevoznik</span>*/}
                    {/*<span>URL do stranice za praćenje pošiljke</span>*/}
                    {/*<span>Datum početka praćenja pošiljke</span>*/}
                    {/*<span>Procijenjeni datum isporuke</span>*/}

                </div>
            }


        </div>
    );
}

export default ShipmentDetail;
