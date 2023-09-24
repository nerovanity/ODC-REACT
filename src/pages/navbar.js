import React from "react";
import { Link } from "react-router-dom";

export function Navbar(){
    return (
        <>
            <div className="w-full h-16 flex items-center px-14 justify-between bg-green-800">
                <Link to={"/"} className="text-3xl text-white font-semibold font-Montesarrat">CRUD</Link>
                <Link to={"/add-user"} className="hover:bg-teal-600 shadow-md hover:border-2 hover:border-teal-600 hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2">Add Users</Link>
            </div>
        </>
    )
}


// export default Navbar;