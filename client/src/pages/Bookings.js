import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Bookings = ({user}) => {
    const navigation = useNavigate();
    const [formData, setFormData] = useState({
      name: '',
      mail:'',
      mobile:'',
      gender:'',
      id_passport: '',
      user_id: user.id
    });

    console.log(formData)

    function handleSubmit(e){
      e.preventDefault();
      fetch(`/api/user_profiles/${user.id}`,{
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
      })
  
      setFormData({
        name: '',
        mail:'',
        mobile:'',
        gender:'',
        id_passport: '',
      })
    }

    const onChange=(e)=>{
      const name = e.target.name
      let value = e.target.value
  
      setFormData({
        ...formData,
        [name]:value
      });
    }

  return (
    <div style={{marginTop: 20, display: "inline-flex", justifyContent: "center", marginRight: 20, marginLeft: 20, width: "50%"}}>
        <form class="form">
            
 
  <div class="row mb-4">
    <div class="col">
      <div class="form">
        <input type="text" id="form3Example1" onChange={onChange} name="name" value={formData.name} class="form-control" />
        <label class="form-label" for="form3Example1">Name</label>
      </div>

     

    </div>
    <div class="col">
      <div class="form">
        <input type="mobile" id="form3Example2" onChange={onChange} name="mobile" value={formData.mobile} class="form-control" />
        <label class="form-label" for="form3Example2">Phone Number</label>
      </div>
    </div>
  </div>

  


  <div class="form mb-4">
    <input type="text" id="form3Example3" onChange={onChange} name="mail" value={formData.mail} class="form-control" />
    <label class="form-label" for="form3Example3">Street Address</label>
  </div>

  


  <div class="form mb-4">
    <input type="text" id="form3Example4" onChange={onChange} name="id_passport" value={formData.id_passport} class="form-control" />
    <label class="form-label" for="form3Example4">ID/Passport</label>
  </div>
  

  <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" id="inlineRadio1" onChange={onChange} name="gender" value={formData.gender} />
  <label class="form-check-label" for="inlineRadio1">Female</label>
</div>



<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" id="inlineRadio2" onChange={onChange} name="gender" value={formData.gender} />
  <label class="form-check-label" for="inlineRadio2">Male</label>
</div>

    <button type='submit' class="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Update Profile
    </button>

    <button class="btn btn-primary btn-block mb-4" onClick={()=>{
    navigation('/payment')
    }}>PROCEED TO PAYMENT</button>

</form>

    </div>
  )
}

export default Bookings