import React from 'react'
import { useNavigate } from 'react-router-dom';


const Bookings = () => {
    const navigation = useNavigate();
  return (
    <div style={{marginTop: 20, display: "inline-flex", justifyContent: "center", marginRight: 20, marginLeft: 20, width: "50%"}}>
        <form>
            <div className="row mb-4">
                <div className="col">
                <div className="form mb-4">
                    <input type="text" id="form6Example1" className="form-control" />
                    <label className="form-label" for="form6Example1">Name</label>
                </div>
                </div>
                <div className="col">
                <div className="form">
                    <input type="text" id="form6Example2" className="form-control" />
                    <label className="form-label" for="form6Example2">ID/Passport</label>
                </div>
                </div>
            </div>

            <div className="form mb-4">
                <input type="text" id="form6Example3" className="form-control" />
                <label className="form-label" for="form6Example3">Phone Number</label>
            </div>

            <div className="form mb-4">
                <input type="mobile" id="form6Example4" className="form-control" />
                <label className="form-label" for="form6Example4">Street Address</label>
            </div>

            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadio" id="flexRadio"  />
                <label className="form-check-label" for="flexRadio">Male</label>
                </div>

                <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadio" id="flexRadioChecked" checked />
                <label className="form-check-label" for="flexRadioChecked">Female</label>
                </div>



            <button type="submit" className="btn btn-primary btn-block mb-4" onClick={()=>{navigation('/bookinginfo')}}>Book Now</button>
        </form>
    </div>
  )
}

export default Bookings