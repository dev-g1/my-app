import "../Styles/Button.css";
// import { useEffect } from "react";

export default function Button(prop) {
    function goTo(){
        
    }
    return(
        <button onClick={goTo}>{prop.title}</button>
    )
}