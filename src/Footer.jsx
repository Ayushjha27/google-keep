import React from "react";

const Footer = () => {

    var year = new Date().getFullYear();

    return (
        <>
            <div className=" text-center   fixed-bottom">
                <p className=" font-weight-bold text-white tshadow">Copyright © {year}</p>
            </div>
        </>
    )
}
export default Footer;
