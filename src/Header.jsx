import React from "react";
import Logo from "./avataaars.png";

const Header = () => {
    return (
        <>
            <div className="d-inline-flex p-2  shadow-lg bg-success w-100">
                <img className="rounded mx-2 " src={Logo} height="45px" width="45px" alt="Error 404" />
                <h4 className="pt-1 text-danger  font-weight-bold tshadow">Ayush's Keep Note</h4>
                <p className=' ml-auto pt-2 font-weight-bold text-white tshadow'>Made by Ayush 😍😍 </p>
            </div>

        </>
    )
}
export default Header;
