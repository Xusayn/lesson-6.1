import React from 'react'
import './Header.css'
function Header() {
  return (
    <div>
        <header>
            <div className="container">
            <nav className="header__nav">
               <ul>
               <img src="./Group 190.png" alt="" className="header__nav__logo" />
               <h1 className='product'>Product</h1>
               </ul>

               <ul>
                <li className="nav__item">Product </li>
                <li className="nav__item">Customers</li>
                <li className="nav__item">Pricing</li>
                <li className="nav__item">Resources</li>

                <button className='signin'>Sign in</button>
                <button className='signup'>Sign up</button>
                <img src="./Frame.png" alt="" className="night" />
               </ul>
            </nav>




        <div className="header__info">
        <div className="header__rigt__div">
            <h1 className="rigt__div__text">
            Work at the speed of thought
            </h1>
            <h4 className="info">
            Tools, tutorials, design and innovation experts, all in one 
            place! The most intuitive way to imagine your next user experience.
            </h4>
            <div className="buttons">
                <button className='left__button'><h2>Get started</h2></button>
                <button className='rigt__button'> <img src="./Button.png" alt="" /><h3> Watch the Video</h3></button>

            </div>
        </div>




        <div className="header__left__div">
            <img src="./amico.png" alt="" className="left__div__img" />
        </div>
        </div>

        


            </div>
        </header>
    </div>
  )
}

export default Header
