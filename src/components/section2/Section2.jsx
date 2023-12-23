import React from 'react'
import './Section2.css'
function Section2() {
  return (
    <div>
        <div className="section2">
           <div className="container">
           <h1 className="section2__text">Contents Strategies</h1>
            <h3 className="text2">
                We focus on ergonomics and meeting you where you work.
                It's only a keystroke away. 
             </h3>
             <div className="section2__cards">

                <div className="card">
                    <img src="./image bg.png" alt="" />
                    <h4>By Wahid Ari |  03 March 2019</h4>
                    <h2>Increasing Prosperity With Positive Thinking</h2>
                </div>



                <div className="card">
                    <img src="./g.png" alt="" />
                    <h4>By Wahid Ari |  03 March 2019</h4>
                    <h2 className='style'>Motivation Is The First Step To Success</h2>
                </div>
                


                <div className="card">
                    <img src="./p.png" alt="" />
                    <h4>By Wahid Ari |  03 March 2019</h4>
                    <h2>Success Steps For Your Personal Or Business</h2>
                </div>
                



                

             </div>
           </div>
        </div>
    </div>
  )
}

export default Section2
