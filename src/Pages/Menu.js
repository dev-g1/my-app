import Menu_Item from "../Components/Menu_Item";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import dessert from "../assets/lemon dessert.jpg";
import Button from "../Components/Button";
import "../Styles/Menu.css"

export default function Menu() {
    const menuItems = [
        {
            menuName: "Greek Salad",
            description: "Lorem ipsum dolor sit amet consectetur. Gravida fringilla egestas nec semper tempus. Urna ac nam nulla a urna quis elit tellus tristique. Id proin ut at",
            img: greekSalad
        },
        {
            menuName: "Bruchetta",
            description: "Lorem ipsum dolor sit amet consectetur. Gravida fringilla egestas nec semper tempus. Urna ac nam nulla a urna quis elit tellus tristique. Id proin ut at",
            img: bruchetta
        },
        {
            menuName: "Lemon Dessert",
            description: "Lorem ipsum dolor sit amet consectetur. Gravida fringilla egestas nec semper tempus. Urna ac nam nulla a urna quis elit tellus tristique. Id proin ut at",
            img: dessert
        }
    ]
    return (
        <>
            <div className="menu-heading">
                    <h2>This week's Specials!</h2>
                    <Button title="Online Menu" />
                </div>
            {/* <div className="menu"> */}
                {menuItems.map(menu => {
                    return(
                        <Menu_Item key={menu.menuName} menuName={menu.menuName} img={menu.img} description={menu.description} />
                    )
                })}
            {/* </div> */}
        </>
    )
}