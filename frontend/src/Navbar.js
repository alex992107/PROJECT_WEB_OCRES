 import React, {useState} from 'react';
 import {Link} from 'react-router-dom'; 
 function Navbar() {
     const [click, setClick]=useState(false);
     const handleClick=() => setClick (!click);
     const CloseMobileMenu=()=> setClick(false);
     return (
         <>
           <nav className='Navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo'>
                        SNCF <i className= 'fas fa-train'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ?'fas fa-times' : 'fas fa-bar'}/>
                     </div> 
                     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                                <li className='nav_item'>
                    <Link to='/Acceuil' className='nav-links' onClick={CloseMobileMenu}>
                        Acceuil
                    </Link>
                        </li>
                                 <li className='nav_item'>
                    <Link to='/horraire' className='nav-links' onClick={CloseMobileMenu}>
                        Horraires des trains
                    </Link>
                        </li>
                                <li className='nav_item'>
                    <Link to='/Contact' className='nav-links' onClick={CloseMobileMenu}>
                        Nous contacter
                    </Link>
                        </li>


                        </ul>
                     </div>
            </nav>
         </>
     )
 }
 
 export default Navbar
