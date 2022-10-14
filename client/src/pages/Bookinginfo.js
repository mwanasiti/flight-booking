import React from 'react'
import { useState, useEffect } from 'react';


function Bookinginfo() {
    const [allTraveller, setAllTraveller] = useState([]);
    const [formData, setFormData] = useState({
        name:'',
        mail:'',
        id:'',
        course_id: ''
    });

  useEffect(() => {
      fetch('/users')
      .then(r => r.json())
      .then(data => setAllTraveller(data))
  }, [])

  function handleSubmit(e){
    e.preventDefault();
    fetch('/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        setAllTraveller(data)
    })
  }



  return (
    <div>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-light">
      <th scope="row">Light</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr class="table-dark">
      <th scope="row">Dark</th>
      <td>Cell</td>
      <td>Cell</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Bookinginfo