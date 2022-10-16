import React from 'react'
import { useNavigate } from 'react-router-dom';


const Bookings = () => {
    const navigation = useNavigate();
  return (
    <div style={{marginTop: 20, display: "inline-flex", justifyContent: "center", marginRight: 20, marginLeft: 20, width: "50%"}}>
        <form class="form">
            
 
  <div class="row mb-4">
    <div class="col">
      <div class="form">
        <input type="text" id="form3Example1" class="form-control" />
        <label class="form-label" for="form3Example1">Name</label>
      </div>

     

    </div>
    <div class="col">
      <div class="form">
        <input type="mobile" id="form3Example2" class="form-control" />
        <label class="form-label" for="form3Example2">Phone Number</label>
      </div>
    </div>
  </div>

  


  <div class="form mb-4">
    <input type="text" id="form3Example3" class="form-control" />
    <label class="form-label" for="form3Example3">Street Address</label>
  </div>

  


  <div class="form mb-4">
    <input type="text" id="form3Example4" class="form-control" />
    <label class="form-label" for="form3Example4">ID/Passport</label>
  </div>
  

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label class="form-check-label" for="inlineRadio1">Female</label>
</div>



<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label class="form-check-label" for="inlineRadio2">Male</label>
</div>

 
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
    <label class="form-check-label" for="form2Example33">
      Remember me
    </label>
  </div>

 
  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={()=>{navigation('/payment')}}>PROCEED TO PAYMENT</button>


  {/* <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div> */}
</form>

    </div>
  )
}

export default Bookings