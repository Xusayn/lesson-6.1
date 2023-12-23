import React from 'react'
import './Section1.css'
function Section1() {
  return (
    <div>
      <div className="section1">
        <div className="container">
        <h1>Product  was Built Specifically for You</h1>


        <div className="section1__div">

          <div className="card">
            <div className="forlogo1">
            <i class="fa-regular fa-paper-plane"></i>
            </div>
            <h2>First click tests</h2>
            <h3>While most people enjoy casino gambling,</h3>
          </div>



          <div className="card">
            <div className="forlogo2">
            <i class="fa-brands fa-squarespace"></i>
            </div>
            <h2>Design surveys</h2>
            <h3>Sports betting, lottery and bingo playing for the fun</h3>
          </div>





          <div className="card">
            <div className="forlogo3">
            <i class="fa-solid fa-heart"></i>
            </div>
            <h2>Preference tests</h2>
            <h3>The Myspace page defines the individual.</h3>
          </div>




          <div className="card">
            <div className="forlogo4">
            <i class="fa-solid fa-hourglass-half"></i>
            </div>
            <h2>Five second tests</h2>
            <h3>Personal choices and the overall personality of the person. </h3>
          </div>
        </div>

        <button className='btn'><h3 className='btn__text'>SIGN UP NOW</h3></button>
        </div>
      </div>
    </div>
  )
}

export default Section1
