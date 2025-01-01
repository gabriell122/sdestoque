import { useState, useEffect } from "react";
import "./style.css";
import DropDown from "../DropDown/DropDown";
const  Navbar = ({data})=>{
    return(
        <nav className="Navbar">
            {
                data.data
                ?
                data.data.map(
                    e =>
                    <DropDown 
                        data={e} 
                        set={data.set}
                    />
                )
                :
                ""
            }
        </nav>
    )
}
export default Navbar;