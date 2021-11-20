import React from "react";
import HomeIcon from '@mui/icons-material/Home'; //Maison
import WorkIcon from '@mui/icons-material/Work'; //Taff
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Vacances
import LocationCityIcon from '@mui/icons-material/LocationCity'; //Retour


export const SidebarData =[
    {
        title:"Maison",
        icon:<HomeIcon/>,
        link:"/home",
    },
    {
        title:"Travail",
        icon:<WorkIcon/>,
        link:"/mail",
    },
    {
        title:"Vacance",
        icon:<WbSunnyIcon/>,
        link:"/vacance",
    },
    {
        title:"Retour Vacance",
        icon:<LocationCityIcon/>,
        link:"/r_vacance",
    },
]