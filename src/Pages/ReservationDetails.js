import "../Styles/ReservationDetails.css"
import { Link } from "react-router-dom";


export default function ResevationDetails(props){
   
    return(
        <>
            <div className="reservation-details">
                <div className="head">
                    <h2>Reservation Details</h2>
                </div>

                <div className="details" >
                    <p><span>Date:</span>  {props.date} </p>
                    <p><span>Time:</span> {props.time} </p>
                    <p><span>Number of diners:</span> {props.diners} </p>
                    <p><span>Special spot:</span> {props.special_spot} </p>
                    <hr />
                    <p><span>First name:</span> {props.fname} </p>
                    <p><span>Last name:</span> {props.lname} </p>
                    <p><span>Phone number:</span> {props.number} </p>
                    <p><span>Email:</span> 
                    {props.email} </p>
                    <p><span>Payment method:</span> Cash Payment </p>
                </div>

                <Link to="/reserveATable" >
                    <button className="go-back">Go Back</button>
                </Link>
                <Link to="/thankYou" >
                    <button>Submit</button>
                </Link>
            </div>
        </>
    )
}