import React from 'react'
import {NavLink} from 'react-router-dom';
import './Menu.css'

//css done of this page in menu.css

const Menu = () => {
    return (
        <div>
            
             <div className="deg-pro-me">

              <NavLink className="login" to ="/Login">Login</NavLink>   

             <NavLink className ="nav1" to ="/Home">Home</NavLink> 
        
             <NavLink className ="nav2" to ="/Service"> {/*Service*/}Quotes</NavLink>

         <NavLink className ="nav3" to ="/About"> About</NavLink>
        
         <NavLink className ="nav4" to ="/Contact">Contact</NavLink>
         
         </div >
        </div>
    )
}

export default Menu
