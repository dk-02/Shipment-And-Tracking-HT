import React from "react";
import logo from "../HT-logo.jpg";
import {Link, useLocation} from "react-router-dom";

function Menu() {

    const location = useLocation();

    return (
        <div className={"min-w-fit w-80 shadow-lg shadow-gray-300 p-5 flex flex-col gap-5"}>
            <div className={"flex flex-col gap-3 mb-5"}>
                <Link to={"/"}>
                    <img src={logo ? logo : "HT LOGO"} alt="Croatian Telecom logo" className={"w-7"}/>
                </Link>

                <span className={"logoDiv text-2xl text-[#e20074] font-semibold"}>Shipment and tracking</span>
            </div>

            <div className={"optionsDiv"}>
                <ul>
                    {location.pathname === "/create-shipment" ?
                        <li className={"hover:bg-[#f2f2f2] hover:text-[#e20074] transition-all duration-300 h-10 flex items-center cursor-pointer p-2"}>
                            <a href="/">POVRATAK NA POČETNU</a>
                        </li> :
                        <li className={"hover:bg-[#f2f2f2] hover:text-[#e20074] transition-all duration-300 h-10 flex items-center cursor-pointer p-2"}>
                            <a href="/create-shipment">KREIRAJ NOVU DOSTAVU</a>
                        </li>}

                    {/*<li className={"hover:bg-[#f2f2f2] hover:text-[#e20074] h-10 flex items-center cursor-pointer p-2"}>*/}
                    {/*    <a href="/public">PODACI O DOSTAVI</a>*/}
                    {/*</li>*/}
                    {/*<li className={"hover:bg-[#f2f2f2] hover:text-[#e20074] h-10 flex items-center cursor-pointer p-2"}>*/}
                    {/*    <a href="/public">PROMIJENI PODATKE O DOSTAVI</a>*/}

                    {/*</li>*/}

                </ul>

            </div>

        </div>
    );

}

export default Menu;
