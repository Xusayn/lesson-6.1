import React from 'react'
import './Section3.css'
function Section3() {
  return (
    <div>
        <div className="section3">
            <div className="container">
            <h1>Price Table</h1>
            <h3>We offer competitive price</h3>

            <div className="cards">
                <div className="card">
                    <h2>Free</h2>
                    <h5>Brief price description</h5>
                    <h2 className='font'>0 $</h2>
                    <h3>Only 2 Operators</h3>
                    <h3>Notifications</h3>
                    <h3>Landing Pages</h3>
                    <button><h3>Order Now</h3></button>
                </div>







            <div className="cardd">
            <h2>Standart</h2>
                    <h5>Brief price description</h5>
                    <h2 className='font'>5 $</h2>
                    <h3>5+ Operators</h3>
                    <h3>Notifications</h3>
                    <h3>Landing Pages</h3>
                    <button><h3>Order Now</h3></button>
            </div>









                <div className="card">
                    <h2>Premium</h2>
                    <h5>Brief price description</h5>
                    <h2 className='font'>10 $</h2>
                    <h3>10+ Operators</h3>
                    <h3>Notifications</h3>
                    <h3>Landing Pages</h3>
                    <button><h3>Order Now</h3></button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Section3
