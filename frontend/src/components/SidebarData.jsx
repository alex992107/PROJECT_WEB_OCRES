//Dans ce fichier, on trouve les valeurs de notre side bar
//On  ajoute un titre, un logo et une route pour chaque valeur de la liste SidebarData

import React from "react";

//Import des logos avec la librairie MUI
import AppsIcon from '@mui/icons-material/Apps'; //Accueil
import StarIcon from '@mui/icons-material/Star'; //Etoile pour Poissy ECE
import HomeIcon from '@mui/icons-material/Home'; //Maison pour ECE Poissy
import LocationCityIcon from '@mui/icons-material/LocationCity'; //Batiment pour Poissy StLaz
import CottageIcon from '@mui/icons-material/Cottage'; // Maison pour StLaz Poissy
import SettingsIcon from '@mui/icons-material/Settings'; //Logo pour les réglages de l'API

export const SidebarData =[
    {
        title:"Accueil",
        icon:<AppsIcon/>,
        link:"/accueil",
    },
    {
        title:"Poissy ECE",
        icon:<StarIcon/>,
        link:"/departPoissyRerA",
    },
    {
        title:"ECE Poissy",
        icon:<HomeIcon/>,
        link:"/departEtoileRerA",
    },
    {
        title:"Poissy StLaz",
        icon:<LocationCityIcon/>,
        link:"/departPoissyTrainJ",
    },
    {
        title:"StLaz Poissy",
        icon:<CottageIcon/>,
        link:"/departStLazTrainJ",
    },
    {
        title:"Reglages",
        icon:<SettingsIcon/>,
        link:"/issues",
    },
    
]