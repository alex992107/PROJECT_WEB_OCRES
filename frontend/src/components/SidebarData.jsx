import React from "react";
import AppsIcon from '@mui/icons-material/Apps'; //Apps
import HomeIcon from '@mui/icons-material/Home'; //Maison
import WorkIcon from '@mui/icons-material/Work'; //Taff
import WbSunnyIcon from '@mui/icons-material/WbSunny'; //Vacances
import LocationCityIcon from '@mui/icons-material/LocationCity'; //Retour


export const SidebarData =[
    {
        title:"Accueil",
        icon:<AppsIcon/>,
        link:"/accueil",
    },
    {
        title:"Maison",
        icon:<HomeIcon/>,
        link:"/home",
    },
    {
        title:"Travail",
        icon:<WorkIcon/>,
        link:"/travail",
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