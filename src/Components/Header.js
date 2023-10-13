import logo from "../assets/Logo.jpg";
import Nav from "./Nav";


export default function Header(){
    const logo_prop = {
        width: "100%"
    };
    const header_style = {
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
        height: "50px"
    }
    return (
        <>
            <div style={header_style}>
                <div className="header" >
                    <img src = {logo} style={logo_prop} alt="little lemon logo" />
                </div>

                <Nav />
            </div>
        </>
    )
}