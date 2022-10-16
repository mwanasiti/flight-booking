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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetch("/api/user_ratings")
      .then(r => r.json())
      .then(data => {
        setAllFeedback(data)
        setIsLoading(false)
      })
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

  if(isLoading === true) return <p>Loading...</p>;

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
                <div style={{ display: "inline-flex", justifyContent: "center", overflowX: "auto" }} key={feedback?.id} className="card feedback-card col-md-5">
                    <div class="card-body" style={{backgroundColor: 'aliceblue'}}>
                        <blockquote class="blockquote mb-0">
                        <div className="card h-100" style={{display: "inline-flex", justifyContent: "center", alignItems: "center"}}>
                          <img src={feedback?.image} style={{borderRadius: "50%", height: 200, width: 300}} className="card-img-top" alt={feedback?.name}/>
                        </div>
                        <h3>Name: {feedback?.name}</h3>
                        <div>
                          Rating: {" "}
                          <StarRating percentage={feedback?.rating / 5} />
                        </div>
                        <p>Reason: {feedback?.reason}</p>
                        {user.id === feedback?.user_id ?
                        (
                          <button 
                        type="button" 
                        className="btn btn-primary" data-mdb-ripple-color="dark"
                        onClick={() => deleteReview(feedback?.id)}>Delete
                        </button>
                        ):(
                          <>
                            ~ {feedback?.name}
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

    </div>
  )
}

export default Rateus