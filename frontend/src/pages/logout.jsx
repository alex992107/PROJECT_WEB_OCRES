import React from "react";
import Button from '@mui/material/Button';


function Logout(){
    return(
        <div>
            Changer de compte
            <br/>
            <Button variant="contained" disabled>Clement</Button>
            <br/>
            <Button variant="contained" href="/accueil">Alexandre</Button>
            <br/>
        </div>
    )
}

export default Logout