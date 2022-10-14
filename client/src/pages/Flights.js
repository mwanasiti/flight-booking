import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Flights = () => {
    const [flights, setFlights] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   

    useEffect(() => {
        fetch('/api/flights')
        .then(r => {
            if(r.ok){
                r.json().then((data) => {
                    setFlights(data)
                    setIsLoading(false)
                }) 
            }
        })
    }, []);
      
    if(isLoading === true) return <p>Loading...</p>
    
    
  
    return (
      <>
        <div>
            {flights.map((flight) => {
                return (
                    <div key={flight.id}>
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Flight Id</th>
                                <th scope="col"></th>
                                <th scope="col">Airline</th>
                                <th scope="col">to</th>
                                <th scope="col">From</th>
                                <th scope="col">Seats</th>
                                <th scope="col">Cost in $</th>
                                <th scope="col">Flight Date</th>
                                <th scope="col">Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>{flight.id}</td>
                                <td>{<img style={{borderRadius:'80%'}} class="img-fluid rounded-pill" src={flight.airline_image} className="rounded mx-auto d-block" alt={flight.airline} />}</td>
                                <td>{flight.airline}</td>
                                <td>{flight.to}</td>
                                <td>{flight.from}</td>
                                <td>{flight.seats}</td>
                                <td>{flight.cost}</td>
                                <td>{flight.flight_date}</td>
                                <td><Link style={{textDecoration: "none"}} to={`/bookings/${flight.id}`}><button type="button" className="btn btn-danger">Book Now</button></Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
      </>
    )
}

export default Flights