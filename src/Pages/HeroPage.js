import Button from "../Components/Button";
import hero_page_image from "../assets/restauranfood.jpg";
import "../Styles/HeroPage.css"
import { Link } from "react-router-dom";

export default function HeroPage(){
    return(
        <>
            <section>
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>

                    <p>
                    Lorem ipsum dolor sit amet consectetur. Gravida fringilla egestas nec semper tempus. Urna ac nam nulla a urna quis elit tellus tristique. Id proin ut at
                    </p>

                    {/* <Button>Reserve a table</Button> */}
                    <Link to="/reserveAtable" >
                        <Button title="Reserve a table" />
                    </Link>
                </div>
                <div className="hero_page_image">
                    <img src={hero_page_image} width="100%"/>
                </div>

            </section>
        </>
    )
}