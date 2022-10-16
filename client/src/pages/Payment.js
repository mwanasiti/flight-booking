import React from 'react'

function Payment() {
  return (
    <div>
        <div>
        <form style={{marginTop:'50px', marginLeft:'400px', marginRight:'400px'}}>
            <div>
            <div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
  <label className="form-check-label" for="inlineRadio1">Card</label>
</div>

<div className="form-check form-check-inline">
  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label className="form-check-label" for="inlineRadio2">MPESA</label>
</div>
            </div>
  <div className="row mb-4">
    <div className="col">
      <div className="form">
        <input type="number" id="form3Example1" className="form-control" />
        <label className="form-label" for="form3Example1">Payment Card number</label>
      </div>
    </div>
    <div className="col">
      <div className="form">
        <input type="text" id="form3Example2" className="form-control" />
        <label className="form-label" for="form3Example2">Expiry Date</label>
      </div>
    </div>
  </div>

 
  <div className="form mb-4">
    <input type="password" id="form3Example3" className="form-control" />
    <label className="form-label" for="form3Example3">Security code</label>
  </div>

 
  <div className="form mb-4">
    <input type="text" id="form3Example4" className="form-control" />
    <label className="form-label" for="form3Example4">Cardholder's name</label>
  </div>

 
  

  
  <button type="submit" style={{}} className="btn btn-dark btn-block mb-4">PAY</button>
</form>
        </div>

    </div>
  )
}

export default Payment