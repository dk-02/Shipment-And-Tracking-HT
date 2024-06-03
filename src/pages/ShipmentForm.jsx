import React from "react";
import Menu from "../components/Menu";

function ShipmentForm() {

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Sent");
    }

    return(
        <div className={"flex h-screen w-screen"}>
            <Menu/>

            <form className={"w-full p-5 flex flex-col gap-5"}>
                <fieldset className={"flex flex-col"}>
                    <legend className={"font-bold tracking-wide "}>
                        Pošiljka
                    </legend>

                    <div>
                        <label className={"inline-block w-[250px]"}>ID pošiljke:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Sadržaj pošiljke:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Datum kreiranja narudžbe:</label>
                        <input type="date" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Masa paketa (g):</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>
                </fieldset>

                <fieldset className={"flex flex-col"}>
                    <legend className={"font-bold tracking-wide"}>
                    Praćenje pošiljke
                    </legend>

                    <div>
                        <label className={"inline-block w-[250px]"}>Kod za praćenje pošiljke:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Status pošiljke:</label>
                        <span>Inicijalizirana</span>
                    </div>
                </fieldset>

                <fieldset className={"flex flex-col"}>
                    <legend className={"font-bold tracking-wide"}>
                        Pošiljatelj
                    </legend>

                    <div>
                        <label className={"inline-block w-[250px]"}>Naziv/ime pošiljatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>ID pošiljatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Adresa pošiljatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend className={"font-bold tracking-wide"}>
                        Primatelj
                    </legend>

                    <div>
                        <label className={"inline-block w-[250px]"}>Naziv/ime primatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>ID primatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>Adresa primatelja:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>
                </fieldset>

                <fieldset>
                    <legend className={"font-bold tracking-wide"}>
                        Prijevoznik
                    </legend>

                    <div>
                        <label className={"inline-block w-[250px]"}>Naziv/ime prijevoznika:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>

                    <div>
                        <label className={"inline-block w-[250px]"}>URL do stranice za praćenje pošiljke:</label>
                        <input type="text" className={"bg-gray-100"}/>
                    </div>
                    <div>
                        <label className={"inline-block w-[250px]"}>Datum početka praćenja pošiljke:</label>
                        <input type="date" className={"bg-gray-100"}/>
                    </div>
                    <div>
                        <label className={"inline-block w-[250px]"}>Procijenjeni datum isporuke:</label>
                        <input type="date" className={"bg-gray-100"}/>
                    </div>
                </fieldset>


                <button name="createNewShipment" id="createNewShipment" onClick={handleSubmit}
                        className={"bg-[#e20074] px-2 py-1 rounded text-white font-semibold tracking-wider"}>Spremi</button>
            </form>

        </div>
    );
}

export default ShipmentForm;
