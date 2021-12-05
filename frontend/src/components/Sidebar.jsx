import React from "react";
import "../App.css";
import {SidebarData} from "./SidebarData.jsx";

//On gère l'affichage de la side bar en faisant appel a notre fichier SidebarData
//On ajoute aussi une fonctionalité de "sélection", lorsque qu'une route est active, le bloc de la side bar est d'une couleur + foncé pour montrer à l'user sa selection

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