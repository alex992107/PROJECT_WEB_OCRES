import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData.jsx";


function Sidebar(){
    return(
            <div className="Side">
                <ul className="SideList">
                {SidebarData.map((val,key) => {
                    return (
                    <li key={key} 
                    className="Row"
                    id={window.location.pathname === val.link ? "active" : ""}
                    onClick={() => {window.location.pathname = val.link}}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                    );
                })}   
                </ul>
            </div>
    )
}

export default Sidebar