import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData.jsx";

function Sidebar(){
    return(
        <div className="Side">
            <ul>
            {SidebarData.map((val,key) => {
                return (
                <li key={key} onClick={() => {window.location.pathname = val.link}}>
                    {""}
                    <div>{val.icon}</div>
                    {""}
                    <div>{val.title}</div>
                </li>
                );
            })}   
            </ul>
        </div>
    )
}

export default Sidebar