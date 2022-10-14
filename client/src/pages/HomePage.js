import React from 'react'
import image from '../plane.jpeg'

const HomePage = () => {
  return (
    <div>
      <div >
        <div style={{ textAlign: "center", display: "inline-flex", justifyContent: "center"}}>
          <img className='homeimage' style={{marginTop: 150, borderRadius: 30}} src={image} class="img-fluid rounded-pill" alt="plane"/>
            <ul>
            <p style={{fontWeight:'bold', marginTop: 150, fontSize:'25px', fontFamily:'italic', color:'#000000'}}>PLAN YOUR BOOKING WITH CONFIDENCE</p>
            <p>Book a flight to your favorite destination. Book your flight online,
              at the comfort of your home using our seamless application.</p>
              <p>With quality assurance, Flight bars is 
                rated one of the best and most used flight booking applictaions in the world</p>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default HomePage