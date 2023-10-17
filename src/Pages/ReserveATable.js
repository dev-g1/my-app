import { Link } from "react-router-dom";
import backBtn from "../assets/icons8-back-50.png";
import "../Styles/ReserveATable.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ReserveATable(){
    const initialValues = {
        date: " ",
        time: "",
        diners: "",
        special_spot: "",
        fname: " ",
        lname: "",
        phone_no: "",
        email: ""
    }
    const onSubmit = (values) =>{
        console.log(values);
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values)=>{
            alert(values);
        },
        validationSchema: Yup.object({
            date: Yup.string().required("Required"),
            time: Yup.string().required("Required"),
            diners: Yup.string().required("Required"),
            fname: Yup.string().min(3, "names must be 3 characters or more. Thank you.").required("Required"),
            phone_no: Yup.string().required("Required")
        })
    })
    return(
        <>
            <div className="top" >
                <div >
                    <Link to="/" >
                        <div className="backButton">
                            <img src={backBtn} alt="back" width="35px" />
                        </div>
                    </Link>
                </div>
                <div>
                    <h2>Reserve a Table</h2>
                </div>
            </div>
            <div className="table-info">
                <form onSubmit={formik.handleSubmit} >
                    <div>
                        <label htmlFor="date" >Date: </label>
                        <input 
                        name="date" 
                        type="date" 
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        />
                    </div>
                    <div>
                        <label htmlFor="time" >Time:</label>
                        <input name="time" type="time" />
                    </div>
                    <div className="no-of-diners" >
                        <label htmlFor="diners" >Number of diners: </label>
                        <input name="diners" type="number" />
                    </div>
                    <div className="special_spot">
                        <label htmlFor="special_spot" >Would you love to reseve a special spot: </label>
                        <br/>
                        <div>
                            <label>
                                <input name="special_spot" type="radio" />
                                    Yes
                            </label>
                            <label>
                                <input name="special_spot" type="radio" />
                                    No
                            </label>
                        </div>
                    </div>
                </form>
                
            </div>

            {/* Contact Information */}
            <div className="contact-info">
                <h2>Contact Information</h2>
                {/* <form onSubmit={formik.handleSubmit}> */}
                <div>
                    <div>
                        <label htmlFor="fname" >First Name: </label> <br />
                        <input 
                            type="text" 
                            name="fname"
                            id="fname"
                            onChange={formik.handleChange}
                            value={formik.values.fname}
                        />
                    </div>
                    <div>
                        <label htmlFor="lname" >Last Name: </label><br />
                        <input type="text" name="lname" />
                    </div>
                <div>
                <label htmlFor="phone_no" >Phone Number: </label>
                <div className="phone-no">
                    <input value="+234"  />
                    <input type="number" name="phone_no" />
                </div>
                </div>
                <div>
                    <label htmlFor="email" >Email: </label><br />
                    <input type="email" name="email" />
                </div>

                <Link to="/reservationDetails" >
                <button type="submit" 
                
                onClick={() =>{
                    console.log(formik.values);
                }}  > Submit</button> 
                </Link>
                </div>
            </div>
        {/* </form> */}
        </>
    )
}