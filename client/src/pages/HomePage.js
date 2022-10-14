import React from 'react'
import Header from '../components/Header'
import image from '../plane.jpeg'

const HomePage = () => {
  return (
    <div >
      <div className='row'>
        <div className='col-12 col-md-3'>
        <Header />
        </div>
        <div className='col-12 col-md-9' style={{ textAlign: "center", marginTop:'-100px'}}>
          <img style={{marginTop: 150, borderRadius: 30}} src={image} className="img-fluid rounded-pill" alt="plane"/>
            <ul>
            <p style={{fontWeight:'bold', marginTop: 150, fontSize:'25px', fontFamily:'italic', color:'#000000'}}>PLAN YOUR BOOKING WITH CONFIDENCE</p>
            <p>Book a flight to your favorite destination. Book your flight online,
              at the comfort of your home <p>using our seamless application.With quality assurance, Flight bars is 
                </p>rated one of the best and most used flight booking </p>
              <p>
                applications in the world</p>
            </ul>
        </div>
        <div>
        <footer className="text-center text-white" style={{backgroundColor: '#000000', marginTop:'70px'}}>
  
  <div className="container p-4">
   
    <section className="">
      <div className="row">
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
              className="w-100"
              alt=''
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp"
              className="w-100"
              alt=''
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp"
              className="w-100"
              alt=''
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp"
              className="w-100"
              alt=''
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp"
              className="w-100"
              alt=''
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
          <div
            className="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp"
              className="w-100"
              alt='footerImg'
            />
            <a href="#!">
              <div
                className="mask"
                style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}}
              ></div>
            </a>
          </div>
        </div>
      </div>
    </section>
   
  </div>
 

  
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    © 2022 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">Flight Bars.com</a>
  </div>
 
</footer>
        </div>
        </div>
    </div>
  )
}

export default HomePage