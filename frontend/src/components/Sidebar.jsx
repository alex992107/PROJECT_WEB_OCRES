import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData.jsx";

function Sidebar(){
    return(
        <div className="Side">
            {SidebarData.map((val,key) => {
                return(
                    <li></li>
                    );
                }      
           
                )
            }   
        </div>
    )
}

export default Sidebar