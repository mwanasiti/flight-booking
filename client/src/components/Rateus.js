import React from 'react'
import { useState, useEffect } from 'react';
import StarRating from '../components/StarRating';

function Rateus({ user }) {
  const [allFeedback, setAllFeedback] = useState([]);
    const [formData, setFormData] = useState({
      image: '',
      name:'',
      rating:'',
      reason:'',
      user_id: user.id     
    });

    useEffect(() => {
      fetch("/api/user_ratings")
      .then(r => r.json())
      .then(data => setAllFeedback(data))
  }, [])

  function handleSubmit(e){
    e.preventDefault();
    fetch('/api/user_ratings',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
        setAllFeedback([...allFeedback, data])
    })

    setFormData({
        image: '',
        name: '',
        rating: '',
        reason: ''
    })
  }

  function deleteReview(id){
    fetch(`/api/user_ratings/${id}`,{
        method: "DELETE",
    })
    .then(r => r.json())
    .then(() => {
        const destroyIt = allFeedback.filter((review) => review.id !== id)
            setAllFeedback(destroyIt)
        })
        window.location.reload()
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
    <div>

      <div>
      <form className='card cardform p-5' style={{marginLeft:'200px', marginRight:'200px', backgroundColor:'#fff'}}>

          <label>
            Image:
          </label>
          <input onChange={onChange} name="image" value={formData.image} type="text"/>
          <hr></hr>

          <label>
            Name:
          </label>
          <input onChange={onChange} name="name" value={formData.name} type="text"/>
          <hr></hr>
   
          <label>
            Service rating(1-5):
          </label>
          <input onChange={onChange} name="rating" value={formData.rating} type="number" min='1' max='5'/>
          <hr></hr>

          
          <label>
            Reason for above rating:
          </label>
          <textarea onChange={onChange} name="reason" value={formData.reason} type="text"/>
          <hr></hr>
        
          <div>
            <button className='btn btn-dark' type='submit' onClick={handleSubmit}>Submit</button>
          </div>
      </form>
            <br />
            <div >
        {allFeedback.map((feedback) => {
            return (
                <div style={{ display: "inline-flex", justifyContent: "center", overflowX: "auto" }} key={feedback.id} className="card feedback-card col-md-5">
                    <div class="card-body" style={{backgroundColor: 'aliceblue'}}>
                        <blockquote class="blockquote mb-0">
                        <div className="card h-100" style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
                          <img src={feedback?.image} style={{borderRadius: "50%", height: 200, width: 300}} className="card-img-top" alt={feedback?.name}/>
                        </div>
                        <h3>Name: {feedback?.name}</h3>
                        <div>
                          Rating: {" "},
                          <StarRating percentage={feedback.rating / 5} />
                        </div>
                        <p>Reason: {feedback?.reason}</p>
                        {user.id === feedback.user_id ?
                        (
                          <button 
                        type="button" 
                        className="btn btn-primary" data-mdb-ripple-color="dark"
                        onClick={() => deleteReview(feedback.id)}>Delete
                        </button>
                        ):(
                          <>
                            ~ {feedback.name}
                          </>
                        )
                        }
                        
                        </blockquote>
                    </div>
                </div>
            )
        })}
    </div>

    
      </div>

      {/* <div style={{marginTop:'00px', marginRight:'20px', marginLeft:'20px'}} className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100" style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
      <img src="https://media.istockphoto.com/photos/happy-woman-traveling-by-plane-and-listening-to-music-picture-id1028421738?b=1&k=20&m=1028421738&s=170667a&w=0&h=YteDUzIEXsDnrRnrnBp-3Nfq8r7jsao1eIhEtRpjKmU=" style={{borderRadius: "50%", height: 200, width: 300}} className="card-img-top" alt="Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Jemima Alice</h5>
        <p className="card-text">
          Best flight booking app i've ever used. Instant assistance. I'd highly recommend!
        </p>
      </div>
      <div>
      <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
      </div>
      <div className="card-footer">
      
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
      <img src="https://media.istockphoto.com/photos/senior-woman-using-laptop-during-airplane-trip-while-wearing-face-picture-id1393890755?b=1&k=20&m=1393890755&s=170667a&w=0&h=t-a7pATFJtPAbBY14oQrJYy6p3xoAokP8uH54hObDi0=" style={{borderRadius: "50%", height: 200, width: 300}} className="card-img-top" alt="Los Angeles Skyscrapers"/>
      <div className="card-body">
        <h5 className="card-title">Wekesa Mundani</h5>
        <p className="card-text">I was able to book my flight from the comfort of my home.Great Service.</p>
      </div>
      <div>
      <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
            <div>
        <small className="text-muted">Last updated 24hrs ago</small>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100" style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
      <img src="https://media.istockphoto.com/photos/african-american-senior-man-at-home-portrait-picture-id1385099292?b=1&k=20&m=1385099292&s=170667a&w=0&h=jXxKH1RIsiOAPAJomJUFgpzAXTet8QURV-SA8JOCjq8=" style={{borderRadius: "50%", height: 200, width: 300}} className="card-img-top" alt="Palm Springs Road"/>
      <div className="card-body">
        <h5 className="card-title">Abijan Dsar</h5>
        <p className="card-text">
          I have continuosly been surfing the internet for flight booking apps but none has yet impressed me like this one.
        </p>
      </div>
      <div>
      <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 5 days ago</small>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default Rateus