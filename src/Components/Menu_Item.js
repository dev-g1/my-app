import "../Styles/Menu_Item.css"

export default function Menu_Item(props) {
    return(
        <div className="menu">
            <div className="menu_image">
                <img src={props.img} width="100%" /> 
            </div>
            <div className="menu_details">
                <h3>{props.menuName} </h3>
                <p>{props.description} </p>
            </div>
            <div className="order">
                <h4>Order a delivery</h4> 
                <img src="" />
            </div>
        </div>
    )
}