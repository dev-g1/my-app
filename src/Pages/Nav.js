import hamburger_icon  from "../assets/🦆 icon _hamburger menu.svg";
import close_hamburger_icon  from "../assets/icons8-close-32.png";
import "../Styles/Nav.css"
import { useState } from "react";

export default function Nav() {
    const [menuState, setMenuState] = useState(
        {
        display: "none"
    })
    function openMenu() {
        setMenuState({
            display: "block"
        })
    }
    function closeMenu() {
        setMenuState({
            display: "none"
        })
    }
    return (
        <>
            <div>
                {menuState.display == "none" ? <img src={hamburger_icon} alt="menu icon" onClick={openMenu} /> : <img src={close_hamburger_icon} alt="close menu icon" onClick={closeMenu} style={menuState}/>}
                
                <div className= "menuList">
                    <ul className = "go_to_list" style ={menuState}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reserve a Table</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </>
    )
}